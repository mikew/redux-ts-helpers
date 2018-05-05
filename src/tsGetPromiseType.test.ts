import * as assert from 'assert'

import tsGetPromiseType from './tsGetPromiseType'
import tsGetReturnType from './tsGetReturnType'

describe('tsGetPromiseType', () => {
  it('casts', async () => {
    const returnType = tsGetReturnType(asyncFunction)
    const type = tsGetPromiseType(returnType)

    // We can't directly `assert` something here, because we are checking types.
    // So, if the TypeScript compiler lets us continue, the types are good.
    try {
      type.foo.toLowerCase()
    // tslint:disable-next-line:no-empty
    } catch (err) { }
  })

  it('lets you supply an argument that is returned and cast', () => {
    const returnType = tsGetReturnType(asyncFunction)
    const type = tsGetPromiseType(returnType, 'wut')

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
