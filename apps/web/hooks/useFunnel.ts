'use client';

interface FunnelStepOption<TContext> {
  guard?: (data: unknown) => data is TContext;
  parse?: (data: unknown) => TContext;
}
interface RouteOption {
  scroll?: boolean;
  locale?: string;
  shallow?: boolean;
}

interface FunnelHistory<TContextMap, TCurrentStep extends keyof TContextMap> {
  push: <TTargetStep extends keyof TContextMap>(
    step: TTargetStep,
    context: TContextMap[TTargetStep] | ((prev: TContextMap<TCurrentStep>) => T[TTargetStep]),
    routeOption?: RouteOption
  ) => Promise<void> | void;
  replace: <TTargetStep extends keyof TContextMap>(
    step: TTargetStep,
    context: TContextMap[TTargetStep] | ((prev: TContextMap<TCurrentStep>) => T[TTargetStep]),
    routeOption?: RouteOption
  ) => Promise<void> | void;
  go: (index: number) => void | Promise<void>;
  back: () => void | Promise<void>;
}

interface UseFunnelOptions<T> {
  id: string;
  initial: { step: keyof T; context: T[keyof T] };
  steps?: { [key in keyof T]?: FunnelStepOption<T[key]> };
}
type UseFunnelResults<T> = {
  [key in keyof T]: {
    step: key;
    context: T[key];
    history: FunnelHistory<T, T[key]>;
  };
}[keyof T] & {
  index: number;
  historySteps: { step: keyof T; context: T[keyof T] }[];
  // Render: FunnelRenderComponent<T>;
};

// function useFunnel<T>(options: UseFunnelOptions<T>): UseFunnelResults<T> {

// };

function useFunnel<T>(options: UseFunnelOptions<T>): UseFunnelResults<T> {
  //   const router = useRouter();
  //   const pathname = usePathname();
  //   const searchParams = useSearchParams();
  //   const createQueryString = useCallback(
  //     (name: string, value: string) => {
  //       const params = new URLSearchParams(searchParams.toString());
  //       params.set(name, value);
  //       return params.toString();
  //     },
  //     [searchParams]
  //   );
  //   router.push(pathname + '?' + createQueryString(options.id, 'desc'));
  return { ...options, history };
}

export default useFunnel;
