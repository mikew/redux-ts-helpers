import * as assert from 'assert'

import createAction from './createAction'

describe('createAction', () => {
  it('supports no arguments', () => {
    const action = createAction('action')
    const actual = action()

    assert.deepStrictEqual(actual, {
      type: 'action',
      payload: undefined,
    })
  })

  it('supports payload as the first argument', () => {
    const action = createAction<{ foo: number; bar: boolean }>('action')
    const actual = action({ foo: 42, bar: true })

    assert.deepStrictEqual(actual, {
      type: 'action',
      payload: {
        foo: 42,
        bar: true,
      },
    })
  })

  it('supports complex actions', () => {
    const action = createAction('action', (arg: number) =>
      arg > 10 ? 10 : arg,
    )
    const actual = action(42)
    assert.deepStrictEqual(actual, {
      type: 'action',
      payload: 10,
    })
  })
})
