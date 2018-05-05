import * as assert from 'assert'
import createReducer from './createReducer'

interface State {
  incrementBy: number
}

describe('createReducer', () => {
  it('returns a reducer', () => {
    const actionConstant = 'actionConstant'
    const initialState: State = {
      incrementBy: 1,
    }

    const reducer = createReducer(initialState, {
      [actionConstant]: (state, action) => {
        return {
          ...state,
          incrementBy: action.payload,
        }
      },
    })

    let currentState = undefined as any
    currentState = reducer(currentState, { type: '', payload: '' })

    assert.deepStrictEqual(currentState, {
      incrementBy: 1,
    })

    currentState = reducer(currentState, { type: actionConstant, payload: 4 })

    assert.deepStrictEqual(currentState, {
      incrementBy: 4,
    })
  })
})
