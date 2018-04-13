import tsGetPromiseType from './tsGetPromiseType'
import tsGetReturnType from './tsGetReturnType'

describe('tsGetPromiseType', () => {
  it('casts', async () => {
    const returnType = tsGetReturnType(asyncFunction)
    const type = tsGetPromiseType(returnType)

    // We can't directly `assert` something here, because we are checking types.
    // So, if the TypeScript compiler lets us continue, the types are good.
    try {
      // tslint:disable-next-line:no-unused-expression
      type.foo
    // tslint:disable-next-line:no-empty
    } catch (err) { }
  })
})

async function asyncFunction() {
  return { foo: 'bar' }
}
