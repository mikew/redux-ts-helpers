export interface ActionConstantMap {
  [key: string]: 0
}

export type NamespacedMap<T> = { [key in keyof T]: string }

/**
 * Apply a namespace to each key in `actionConstants`.
 */
export default function applyNamespace<T extends ActionConstantMap>(
  namespace: string,
  actionConstants: T,
) {
  const constantMap: NamespacedMap<T> = {} as any

  Object.keys(actionConstants).forEach((x: keyof T) => {
    constantMap[x] = `${namespace}/${x}`
  })

  return constantMap
}
