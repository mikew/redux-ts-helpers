import * as assert from 'assert'
import applyNamespace from './applyNamespace'

describe('applyNamespace', () => {
  it('applies a namespace to entries', () => {
    const actual = applyNamespace('testNamespace', {
      increment: 0,
      setIncrementBy: 0,
    })

    assert.deepStrictEqual(actual, {
      increment: 'testNamespace/increment',
      setIncrementBy: 'testNamespace/setIncrementBy',
    })
  })
})
