import {
  AsyncReturnType,
  createReducer,
  PromiseType,
} from '../../index'

import * as actions from './actions'

export const initialState = {
  currentValue: 0,
  incrementBy: 1,
  promiseResult: '',
  asyncResult: '',
}

export const reducer = createReducer(initialState, {
  [actions.constants.setIncrementBy]: (
    state,
    action: ReturnType<typeof actions.setIncrementBy>,
  ) => {
    return {
      ...state,
      incrementBy: action.payload,
    }
  },

  [actions.constants.increment]: (state) => ({
    ...state,
    currentValue: state.currentValue + state.incrementBy,
  }),

  [`${actions.constants.promiseAction}/success`]: (
    state,
    action: ReturnType<typeof actions.promiseAction>,
  ) => {
    const payload = action.payload as any as PromiseType<typeof action.payload>

    return {
      ...state,
      promiseResult: payload.name,
    }
  },

  [`${actions.constants.asyncAction}/success`]: (
    state,
    action: ReturnType<typeof actions.asyncAction>,
  ) => {
    const payload = action.payload as any as AsyncReturnType<typeof action.payload>

    return {
      ...state,
      asyncResult: payload.name,
    }
  },
})
