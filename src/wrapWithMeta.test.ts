import * as assert from 'assert'

import createAction from './createAction'
import wrapWithMeta from './wrapWithMeta'

describe('wrapWithMeta', () => {
  it('sets meta to payload if metaCreator not given', () => {
    const action = createAction<number>('action')
    const actionWithMeta = wrapWithMeta(action)
    const actual = actionWithMeta(42)

    assert.deepStrictEqual(actual, {
      type: 'action',
      payload: 42,
      meta: 42,
    })
  })

  it('uses metaCreator to build meta based off payload', () => {
    const action = createAction<number>('action')
    const actionWithMeta = wrapWithMeta(action, (payload) => ({
      raw: payload,
      string: payload.toString(),
    }))
    const actual = actionWithMeta(42)

    assert.deepStrictEqual(actual, {
      type: 'action',
      payload: 42,
      meta: {
        raw: 42,
        string: '42',
      },
    })
  })
})
