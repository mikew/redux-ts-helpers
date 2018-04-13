export default function tsGetPromiseType<T>(promise: Promise<T>) {
  return promise as any as T
}
