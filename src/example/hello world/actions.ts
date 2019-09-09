import { applyNamespace, createAction } from '../../index'

export const constants = applyNamespace('example', {
  increment: 0,
  setIncrementBy: 0,
  promiseAction: 0,
  asyncAction: 0,
})

export const increment = createAction(constants.increment)
export const setIncrementBy = createAction<number>(constants.setIncrementBy)

export const promiseAction = createAction(
  constants.promiseAction,
  (id: number) => someApiCall(id),
)

export const asyncAction = createAction(
  constants.asyncAction,
  (id: number) => () => someApiCall(id),
)

function someApiCall(id: number) {
  return Promise.resolve({ id, name: 'hello world' })
}
