import * as assert from 'assert'

import tsGetAsyncReturnType from './tsGetAsyncReturnType'

describe('tsGetPromiseType', () => {
  it('casts', async () => {
    const type = tsGetAsyncReturnType(asyncFunction)

    // We can't directly `assert` something here, because we are checking types.
    // So, if the TypeScript compiler lets us continue, the types are good.
    try {
      type.foo.toLowerCase()
    // tslint:disable-next-line:no-empty
    } catch (err) { }
  })

  it('lets you supply an argument that is returned and cast', () => {
    const type = tsGetAsyncReturnType(asyncFunction, 'wut')

    // We can't directly `assert` something here, because we are checking types.
    // So, if the TypeScript compiler lets us continue, the types are good.
    try {
      type.foo.toLowerCase()
    // tslint:disable-next-line:no-empty
    } catch (err) { }

    assert.strictEqual(type, 'wut')
  })
})

async function asyncFunction() {
  return { foo: 'bar' }
}
