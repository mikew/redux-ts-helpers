import { AnyAction } from 'redux'

import { AsyncReturnType } from './AsyncReturnType'

describe('AsyncReturnType', () => {
  it('works', () => {
    const action: AnyAction = { type: 'foo' }
    const payload = action.payload as AsyncReturnType<typeof asyncFunction>

    // We can't directly `assert` something here, because we are checking types.
    // So, if the TypeScript compiler lets us continue, the types are good.
    try {
      payload.foo.toLowerCase()
    // tslint:disable-next-line:no-empty
    } catch (err) {}
  })
})

async function asyncFunction() {
  return { foo: 'bar' }
}
