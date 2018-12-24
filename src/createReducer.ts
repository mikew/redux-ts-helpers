import { AnyAction, Reducer } from 'redux'

export interface HandlerMap<T> {
  [actionName: string]: (state: T, action: AnyAction) => T
}

/**
 * Helper to create a reducer.
 */
export default function createReducer<T>(
  initialState: T,
  handlers: HandlerMap<T>,
): Reducer<T> {
  return (state: T = initialState, action) => {
    if (!handlers[action.type]) {
      return state
    }

    return handlers[action.type](state, action)
  }
}
