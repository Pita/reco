export type SimplifierHandler<T> = (
  element: T,
  options: {
    firstPass: boolean;
  },
) => string;
