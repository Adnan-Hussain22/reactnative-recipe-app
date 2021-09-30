export type Noop = () => void;

export const noop = () => {};

export const HoNoop = () => () => {};
