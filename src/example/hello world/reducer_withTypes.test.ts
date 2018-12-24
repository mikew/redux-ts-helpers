import * as assert from 'assert'
import { applyMiddleware, createStore, Store } from 'redux'
import reduxAsyncPayload from 'redux-async-payload'

import * as actions from './actions'
import * as reducer from './reducer_withTypes'

describe('example reducer_withTypes', () => {
  let store: Store<typeof reducer.initialState, any>

  beforeEach(() => {
    store = createStore(reducer.reducer, applyMiddleware(reduxAsyncPayload()))
  })

  it('handles actions without an argument', () => {
    store.dispatch(actions.increment(null))
    const state = store.getState()

    assert.strictEqual(state.currentValue, 1)
  })

  it('handles actions with an argument', () => {
    store.dispatch(actions.setIncrementBy(12))
    const state = store.getState()

    assert.strictEqual(state.incrementBy, 12)
  })

  it('handles promise payloads', async () => {
    await store.dispatch(actions.promiseAction(1))
    const state = store.getState()

    assert.strictEqual(state.promiseResult, 'hello world')
  })

  it('handles async function payloads', async () => {
    await store.dispatch(actions.asyncAction(1))
    const state = store.getState()

    assert.strictEqual(state.asyncResult, 'hello world')
  })
})
