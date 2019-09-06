import * as assert from 'assert'

import createAction from './createAction'
import wrapWithMeta from './wrapWithMeta'

describe('wrapWithMeta', () => {
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

  it('works with action creators that have multiple arguments', () => {
    const action = wrapWithMeta(
      (arg1: string, arg2: number) => ({
        type: 'action',
        payload: {
          arg1,
          arg2,
        },
      }),
      (arg1, arg2) => ({
        arg1,
        arg2,
      }),
    )
    const actual = action('hello world', 42)

    assert.deepStrictEqual(actual, {
      type: 'action',
      payload: {
        arg1: 'hello world',
        arg2: 42,
      },
      meta: {
        arg1: 'hello world',
        arg2: 42,
      },
    })
  })
})
