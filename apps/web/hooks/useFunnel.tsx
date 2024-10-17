'use client';

import ROUTES from 'constants/routes';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ComponentType, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

type FunnelState<T> = {
  id: string;
  historyState: StepState<T>[];
  history: {
    push: (step: keyof T, context: Partial<T[keyof T]>) => void;
  };
};

type FunnelRenderProps<T> = {
  [key in keyof T]: (props: { context: T[key]; history: FunnelState<T>['history'] }) => ReactNode;
};

type StepState<T> = {
  step: keyof T;
  context: Partial<T[keyof T]>;
};

// https://stackoverflow.com/questions/71518896/type-is-not-assignable-to-type-librarymanagedattributes 참고
type FunnelComponentWithProps<T, P extends FunnelRenderProps<T>> = {
  Component: ComponentType<P>;
  componentProps: P;
};

/**
 * https://github.com/toss/use-funnel 의 기능을 부분적으로 구현
 * - searchParam으로 현재 step 저장
 * - 로컬 스토리지에 각 step context 누적하여 저장
 * - 새로고침에도 이전 step 정보 유지
 */
function useFunnel<T>({ id, initial }: { id: string; initial: StepState<T> }) {
  const [state, setState] = useState<FunnelState<T>>({
    id,
    historyState: [initial],
    history: { push: () => {} },
  });
  const [currentStep, setCurrentStep] = useState<StepState<T>>(initial);
  const [funnelStorage, setFunnelStorage] = useLocalStorage(id, [initial]);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // url 파람 stepId=value 을 생성해주기 위한 함수
  const createQueryString = useCallback(
    (stepId: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(stepId, value);
      return params.toString();
    },
    [searchParams, state]
  );

  // 다음 step의 context에 이전 state.historyState 배열의 context들을 누적하기 위한 값
  const accumulatedHistory = useMemo(() => {
    return state.historyState.reduce(
      (_, curr) => {
        return curr.context;
      },
      {} as Partial<T[keyof T]>
    );
  }, [state, searchParams, id]);

  // 새로 고침 시에도 현재 파람 정보를 로컬 스토리지에서 찾고, 현재 파람의 컴포넌트 랜더하기
  useEffect(() => {
    const currentState = searchParams.get(`${state.id}.step`);
    const filtered = funnelStorage.filter(item => item.step === currentState)[0]?.context;
    if (filtered == null && funnelStorage.length === 0) {
      router.replace(ROUTES.PAGE.TRIP_PLANNER.href);
      return;
    }

    if (currentState != null) {
      setCurrentStep({
        step: currentState as keyof T,
        context: filtered,
      });
    } else {
      setCurrentStep(initial);
    }
  }, [searchParams, state, id]);

  // 첫 퍼널 단계 진입 시
  useEffect(() => {
    const currentState = searchParams.get(`${state.id}.step`);

    if (currentState == null) {
      setCurrentStep(state.historyState[0]);

      if (state.historyState.length == 1) {
        router.push(pathname + '?' + createQueryString(`${state.id}.step`, state.historyState[0].step as string));
      }
    }
  }, [searchParams, state]);

  const history = {
    push: (select: keyof T, context: Partial<T[keyof T]>) => {
      const updatedHistoryStateContext = {
        ...accumulatedHistory,
        ...context,
      };

      // 다음 퍼널 select으로 이동 전 현재 퍼널의 historyState 업데이트
      setState({
        ...state,
        historyState: state.historyState.reduce(
          (acc, curr) => {
            acc.push({ context: { ...updatedHistoryStateContext }, step: curr.step });
            return acc;
          },
          [] as FunnelState<T>['historyState']
        ),
      });

      // searchParam에 새로운 step 추가해주기
      router.push(pathname + '?' + createQueryString(`${state.id}.step`, select as string));

      // 로컬 스토리지에 step 정보 저장하기
      setFunnelStorage([
        ...funnelStorage
          .filter(item => item.step !== select)
          .reduce((acc, curr) => {
            curr.context = { ...curr.context, ...updatedHistoryStateContext };
            acc.push(curr);
            return acc;
          }, [] as StepState<T>[]),
        {
          step: select,
          context: { ...funnelStorage.reduce((_, curr) => curr.context, {}), ...updatedHistoryStateContext },
        },
      ]);
    },
  };

  return {
    ...currentStep,
    history,
    historySteps: state.historyState,
    Render: (key: FunnelRenderProps<T>) => {
      const StepComponent = key[currentStep.step];
      /**
       * <StepComponent context={currentStep.context} history={history}/> 로 바로 쓰일 경우 다음과 같은 에러 발생
       * Type '{ context: Partial<T[keyof T]>; history: { push: (select: keyof T, context: Partial<T[keyof T]>) => void; }; }'
       * is not assignable to type 'LibraryManagedAttributes<FunnelRenderProps<T>[keyof T], { context: T[keyof T]; history: { push: (step: keyof T, context: Partial<T[keyof T]>) => void; }; }>'
       */
      const renderStepComponentWithProps = <T, P extends FunnelRenderProps<T>>({
        Component,
        componentProps,
      }: FunnelComponentWithProps<T, P>) => {
        return <Component {...componentProps} />;
      };
      return renderStepComponentWithProps({
        Component: StepComponent,
        componentProps: { context: currentStep.context as T[keyof T], history },
      });
    },
  };
}

export default useFunnel;
