export function capitalize(input: string): string {
  return `${input?.charAt(0)?.toUpperCase() + input?.slice(1)?.toLowerCase()}`;
}

export enum State {
  UNINITIALIZED = 0,
  LOADING,
  SUCCESS,
  FAILED,
}
