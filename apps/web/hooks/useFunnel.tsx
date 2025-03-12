'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ComponentType, ReactNode, Suspense, useCallback, useEffect, useState } from 'react';
import Loading from 'shared/components/Loading';
import { useLocalStorage } from 'usehooks-ts';
import ROUTE from '../constants/routes';

type FunnelState<T> = {
  id: string;
  historyState: StepState<T>[];
  history: {
    push: (step: keyof T, context: Partial<T[keyof T]>) => void;
    clear: () => void;
    back: () => void;
  };
};

type FunnelRenderProps<T> = {
  [key in keyof T]: (props: { context: T[key]; history: FunnelState<T>['history'] }) => ReactNode;
};

type StepState<T> = {
  step: keyof T;
  context: Partial<T[keyof T]>;
  index: number;
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
    history: { push: () => {}, clear: () => {}, back: () => {} },
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

  useEffect(() => {
    const currentState = searchParams.get(`${state.id}.step`);
    if (pathname == ROUTE.TRIP_PLANNER.href && currentState == null) {
      router.replace(pathname + '?' + createQueryString(`${state.id}.step`, initial.step as string));
      if (funnelStorage.length == 0) {
        setFunnelStorage([initial]);
      }
    }
  }, [pathname, funnelStorage, state]);

  // 새로 고침 시에도 현재 파람 정보를 로컬 스토리지에서 찾고, 현재 파람의 컴포넌트 랜더하기
  useEffect(() => {
    const currentState = searchParams.get(`${state.id}.step`);
    const filtered = funnelStorage.filter(item => item.step === currentState)[0]?.context;
    if (filtered == null && funnelStorage.length === 0) {
      router.replace(ROUTE.TRIP_PLANNER.href);
      return;
    }

    if (currentState != null) {
      setCurrentStep(prev => ({
        ...prev,
        step: currentState as keyof T,
        context: filtered,
        index: funnelStorage.findIndex(item => item.step === currentState),
      }));
    } else {
      setCurrentStep(initial);
    }
  }, [searchParams, state, id]);

  /**
   *  앞뒤로 이동 시 변경 사항이 생기면 다음의 정보를 제거해줘야한다.
   *  !! 현재는 이전으로 넘어가면 앞서 선택했던 정보를 삭제해줬다. 만약에 같은 옵션을 선택했다면 그래도 삭제해주기를 바랄까?
   * */
  const onNavigateBack = useCallback(() => {
    setFunnelStorage(prev => {
      return prev.filter(item => item.index < currentStep.index).map(item => ({ ...item, context: item.context }));
    });
    const filteredStep = [...funnelStorage.filter(item => item.index < currentStep.index)].sort(
      (a, b) => a.index - b.index
    );
    router.push(
      pathname + '?' + createQueryString(`${state.id}.step`, filteredStep[filteredStep.length - 1].step as string)
    );
  }, [funnelStorage, currentStep, state]);

  // 초기화 되었을 경우 현재 단계를 처음 단계로 설정하고 쿼리 스트링 설정
  useEffect(() => {
    if (currentStep.context == null) {
      setCurrentStep(initial);
      router.push(pathname + '?' + createQueryString(`${state.id}.step`, initial.step as string));
    }
  }, [state, currentStep]);

  const history = {
    push: (select: keyof T, context: Partial<T[keyof T]>) => {
      // 다음 step의 context에 이전 state.historyState 배열의 context들을 누적하기 위한 값
      const updatedHistoryStateContext = {
        ...state.historyState.filter(item => item.index < currentStep.index)[0]?.context,
        ...context,
      };

      // 로컬 스토리지에 step 정보 저장하기
      setFunnelStorage(prev =>
        prev.length <= 1 && prev[prev.length - 1].step === initial.step
          ? [
              {
                step: initial.step,
                context: updatedHistoryStateContext,
                index: 0,
              },
              {
                step: select,
                context: updatedHistoryStateContext,
                index: 1,
              },
            ]
          : [
              ...prev
                .filter(item => item.step !== select)
                .reduce((acc, curr) => {
                  const currentStateStep = searchParams.get(`${state.id}.step`);
                  if (curr.step == currentStateStep) {
                    curr.context = updatedHistoryStateContext;
                  }
                  acc.push(curr);
                  return acc;
                }, [] as StepState<T>[]),
              {
                step: select,
                context: { ...prev.reduce((_, curr) => curr.context, {}), ...updatedHistoryStateContext },
                index:
                  prev.findIndex(item => item.step === select) >= 0
                    ? prev.findIndex(item => item.step === select)
                    : prev.length,
              },
            ].sort((a, b) => a.index - b.index)
      );

      setState(prev => ({
        ...prev,
        historyState: funnelStorage.filter(item => item.step === searchParams.get(`${state.id}.step`)),
      }));

      // searchParam에 새로운 step 추가해주기
      router.push(pathname + '?' + createQueryString(`${state.id}.step`, select as string));
    },
    clear: () => {
      setFunnelStorage([initial]);
    },
    back: onNavigateBack,
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
        return (
          <Suspense fallback={<Loading />}>
            <Component {...componentProps} />
          </Suspense>
        );
      };
      return renderStepComponentWithProps({
        Component: StepComponent,
        componentProps: { context: currentStep.context as T[keyof T], history },
      });
    },
  };
}

export default useFunnel;
