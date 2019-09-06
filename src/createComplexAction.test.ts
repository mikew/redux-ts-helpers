import * as assert from 'assert'

import createComplexAction from './createComplexAction'

describe('createComplexAction', () => {
  it('works', () => {
    const action = createComplexAction(
      'action',
      (arg1: string, arg2: number) => ({
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
    })
  })
})
