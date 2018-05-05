import tsGetPromiseType from './tsGetPromiseType'
import tsGetReturnType from './tsGetReturnType'

/**
 * Get return value of an async function with inferred return type.
 */
export default function tsGetAsyncReturnType<T>(
  asyncFunction: (...args: any[]) => Promise<T>,
  arg?: any,
) {
  return tsGetPromiseType(tsGetReturnType(asyncFunction, arg)) as T
}
