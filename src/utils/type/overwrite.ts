import { Omit } from './omit';

export type Overwrite<T, K> = Omit<T, Extract<keyof T, keyof K>> & K;
