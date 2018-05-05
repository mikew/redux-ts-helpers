import {
  createReducer,
  tsGetAsyncReturnType,
  tsGetPromiseType,
  tsGetReturnType,
} from '../../index'

import * as actions from './actions'

export const initialState = {
  currentValue: 0,
  incrementBy: 0,
  promiseResult: '',
  asyncResult: '',
}

export const reducer = createReducer(initialState, {
  [actions.constants.setIncrementBy]: (state, action) => {
    const actionTyped = tsGetReturnType(actions.setIncrementBy, action)

    return {
      ...state,
      incrementBy: actionTyped.payload,
    }
  },

  [actions.constants.increment]: (state) => ({
    ...state,
    currentValue: state.currentValue + state.incrementBy,
  }),

  [`${actions.constants.promiseAction}/success`]: (state, action) => {
    const actionTyped = tsGetReturnType(actions.promiseAction, action)
    const payload = tsGetPromiseType(actionTyped.payload)

    return {
      ...state,
      promiseResult: payload.name,
    }
  },

  [`${actions.constants.asyncAction}/success`]: (state, action) => {
    const actionTyped = tsGetReturnType(actions.asyncAction, action)
    const payload = tsGetAsyncReturnType(actionTyped.payload)

    return {
      ...state,
      promiseResult: payload.name,
    }
  },
})
