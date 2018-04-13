import * as assert from 'assert'

import tsGetReturnType from './tsGetReturnType'

describe('tsGetReturnType', () => {
  it('casts', async () => {
    const type = tsGetReturnType(asyncFunction)

    // We can't directly `assert` something here, because we are checking types.
    // So, if the TypeScript compiler lets us continue, the types are good.
    try {
      // tslint:disable-next-line:no-unused-expression
      type.foo
    // tslint:disable-next-line:no-empty
    } catch (err) { }
  })

  it('lets you supply an argument that is returned and cast', () => {
    const type = tsGetReturnType(asyncFunction, 'wut')

    // We can't directly `assert` something here, because we are checking types.
    // So, if the TypeScript compiler lets us continue, the types are good.
    try {
      // tslint:disable-next-line:no-unused-expression
      type.foo
    // tslint:disable-next-line:no-empty
    } catch (err) { }

    assert.strictEqual(type, 'wut')
  })
})

function asyncFunction() {
  return { foo: 'bar' }
}
