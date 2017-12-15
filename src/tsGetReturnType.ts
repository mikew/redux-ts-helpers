/**
 * Get return value of a function with inferred return type.
 */
export default function tsGetReturnType<T>(
  _function: (...args: any[]) => T,
): T {
  return null as any as T
}
