import { Reducer } from 'redux'

export interface HandlerMap<T> {
  [actionName: string]: (state: T, action: {
    type: string
    payload: any
    // tslint:disable-next-line:trailing-comma
    meta?: any
  }) => T
}

/**
 * Helper to create a reducer.
 */
export default function createReducer<T>(
  initialState: T,
  handlers: HandlerMap<T>,
): Reducer<T, { type: string, payload: any, meta?: any }> {
  return (state: T = initialState, action: { type: string, payload: any, meta?: any }) => {
    if (!handlers[action.type]) {
      return state
    }

    return handlers[action.type](state, action)
  }
}
