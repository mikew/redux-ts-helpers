import { Action, Reducer } from 'redux'

export interface HandlerMap<S, A extends Action = any> {
  [actionName: string]: (state: S, action: A) => S
}

/**
 * Helper to create a reducer.
 */
// TODO The default is `any`, otherwise there's conflicts with casting an action
// to `ReturnType<typeof actions.whatever>` in a reducer when
// `strictFunctionTypes` is enabled.
// Explicitly don't infer the `Action` type, otherwise things get real
// complicated.
export default function createReducer<S>(
  initialState: S,
  handlers: HandlerMap<S, any>,
): Reducer<S, any> {
  return (state: S = initialState, action) => {
    if (!handlers[action.type]) {
      return state
    }

    return handlers[action.type](state, action)
  }
}
