export const convertSetToArray = <T>(_key: any, value: Set<T>): T[] =>
  value instanceof Set ? [...value] : [];
