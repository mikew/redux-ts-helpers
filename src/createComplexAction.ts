function createComplexAction<Fn extends (...args: any) => any>(
  type: string,
  fn: Fn,
): (...args: Parameters<Fn>) => { type: string; payload: ReturnType<Fn> } {
  return (...args: Parameters<Fn>) => ({
    type,
    payload: fn(...args),
  })
}

export default createComplexAction
