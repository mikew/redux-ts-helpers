export interface ActionConstantMap {
  [key: string]: 0
}

export type NamespacedMap<T> = { [key in keyof T]: string }

/**
 * Apply a namespace to each item in actionConstants.
 * @export
 * @template T
 * @param {string} namespace
 * @param {T} actionConstants
 * @returns {NamespacedMap<T>}
 */
export default function applyNamespace<T extends ActionConstantMap>(
  namespace: string,
  actionConstants: T,
): NamespacedMap<T> {
  const constantMap: NamespacedMap<T> = {} as any

  Object.keys(actionConstants).forEach((x) => {
    constantMap[x] = `${namespace}/${x}`
  })

  return constantMap
}
