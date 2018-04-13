/**
 * Get resolved type from a Promise.
 */
export default function tsGetPromiseType<T>(
  promise: Promise<T>,
  arg?: any,
) {
  return (arg || promise) as any as T
}
