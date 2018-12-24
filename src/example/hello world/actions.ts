import { applyNamespace, createAction } from '../../index'

export const constants = applyNamespace('example', {
  increment: 0,
  setIncrementBy: 0,
  promiseAction: 0,
  asyncAction: 0,
})

export const increment = createAction(constants.increment)
export const setIncrementBy = createAction<number>(constants.setIncrementBy)

export const promiseAction = (id: number) => ({
  type: constants.promiseAction,
  payload: someApiCall(id),
  meta: id,
})

export const asyncAction = (id: number) => ({
  type: constants.asyncAction,
  async payload() {
    return someApiCall(id)
  },
})

function someApiCall(id: number) {
  return Promise.resolve({ id, name: 'hello world' })
}
