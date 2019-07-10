import * as assert from 'assert'

import createAction from './createAction'
import wrapWithMeta from './wrapWithMeta'

describe('wrapWithMeta', () => {
  it('sets meta to payload if metaCreator not given', () => {
    const action = wrapWithMeta(createAction<number>('action'))
    const actual = action(42)

    assert.deepStrictEqual(actual, {
      type: 'action',
      payload: 42,
      meta: 42,
    })
  })

  it('uses metaCreator to build meta based off payload', () => {
    const action = wrapWithMeta(createAction<number>('action'), (payload) => ({
      raw: payload,
      string: payload.toString(),
    }))
    const actual = action(42)

    assert.deepStrictEqual(actual, {
      type: 'action',
      payload: 42,
      meta: {
        raw: 42,
        string: '42',
      },
    })
  })

  it('works when given metaCreator without payload', () => {
    const action = wrapWithMeta(createAction('action'), () => 'some meta')
    const actual = action()

    assert.deepStrictEqual(actual, {
      type: 'action',
      payload: undefined,
      meta: 'some meta',
    })
  })
})
