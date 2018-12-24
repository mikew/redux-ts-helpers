import { ActionSuccessType } from 'redux-async-payload'

import { createReducer } from '../../index'

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
  ) => ({
    ...state,
    incrementBy: action.payload,
  }),

  [actions.constants.increment]: (state) => ({
    ...state,
    currentValue: state.currentValue + state.incrementBy,
  }),

  [`${actions.constants.promiseAction}/success`]: (
    state,
    action: ActionSuccessType<typeof actions.promiseAction>,
  ) => ({
    ...state,
    promiseResult: action.payload.name,
  }),

  [`${actions.constants.asyncAction}/success`]: (
    state,
    action: ActionSuccessType<typeof actions.asyncAction>,
  ) => ({
    ...state,
    asyncResult: action.payload.name,
  }),
})
