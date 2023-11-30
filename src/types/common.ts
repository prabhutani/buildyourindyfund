export type ClassName = {
  className?: string;
};

export type Callback<R = any, Args extends any[] = any[]> = (...args: Args) => R;

export type ScrollCallback = {
  onScroll: (elementId: string) => void;
};
