import * as assert from 'assert'

import createAction from './createAction'

interface Silly {
  foo: number
  bar: boolean
}

interface SillyMeta {
  id: number
}

describe('createAction', () => {
  it('supports no arguments', () => {
    const action = createAction('action')
    const actual = action(null)

    assert.deepStrictEqual(actual, {
      type: 'action',
      payload: null,
      meta: undefined,
    })
  })

  it('supports payload as the first argument', () => {
    const action = createAction<Silly>('action')
    const actual = action({ foo: 42, bar: true })

    assert.deepStrictEqual(actual, {
      type: 'action',
      payload: {
        foo: 42,
        bar: true,
      },
      meta: undefined,
    })
  })

  it('supports payload and metadata', () => {
    const action = createAction<Silly, SillyMeta>('action')
    const actual = action({ foo: 42, bar: true }, { id: 123 })

    assert.deepStrictEqual(actual, {
      type: 'action',
      payload: {
        foo: 42,
        bar: true,
      },
      meta: {
        id: 123,
      },
    })
  })
})
