export type SimplifierHandlerOptions = {
  firstPass: boolean;
};

export type SimplifierHandler<T> = (
  element: T,
  options: SimplifierHandlerOptions,
) => string;
