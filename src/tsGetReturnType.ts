/**
 * Get return value of a function with inferred return type.
 */
export default function tsGetReturnType<T>(
  fn: (...args: any[]) => T,
  arg?: any,
): T {
  return (arg || fn) as T
}
