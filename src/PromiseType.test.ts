import { AnyAction } from 'redux'

import { PromiseType } from './PromiseType'

describe('PromiseType', () => {
  it('works', () => {
    const action: AnyAction = { type: 'foo' }
    const payload = action.payload as PromiseType<typeof somePromise>

    // We can't directly `assert` something here, because we are checking types.
    // So, if the TypeScript compiler lets us continue, the types are good.
    try {
      payload.toLowerCase()
    // tslint:disable-next-line:no-empty
    } catch (err) {}
  })
})

// tslint:disable-next-line:prefer-const
let somePromise: Promise<string>
