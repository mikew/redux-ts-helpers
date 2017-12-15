/**
 * Get first argument of a function with inferred return type.
 */
export default function tsGetFirstArgType<T>(
  _function: (arg1: T, ...args: any[]) => any,
): T {
  return null as any as T
}
