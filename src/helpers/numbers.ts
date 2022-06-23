export const sum = (a: number, b: number) => a + b;

export const subtract = (a: number, b: number) => a - b;

export const transformToNumber = (array: Array<string>): Array<number> =>
  array.map((stringifiedNumber) => Number(stringifiedNumber));
