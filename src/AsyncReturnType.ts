export type AsyncReturnType<T> =
  T extends (...args: any[]) => Promise<infer U> ? U : T

async function foo() {
  return { bar: 42, baz: 'world' }
}

function reducer(state: any, payload: AsyncReturnType<typeof foo>) {

}
