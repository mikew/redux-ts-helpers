/**
 * Get return value of a function with inferred return type.
 */
export default function tsGetReturnType<T>(
  _function: (...args: any[]) => T,
  arg?: any,
): T {
  return arg as any as T
}
