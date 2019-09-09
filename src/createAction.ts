interface CreateAction {
  /** Simple action without a payload */
  (type: string): () => {
    type: string
  }

  /** Simple action with a payload */
  <TPayload>(type: string): (
    payload: TPayload,
  ) => { type: string; payload: TPayload }

  /** Complex action with custom payload implementation */
  <Fn extends (...args: any) => any>(type: string, fn: Fn): (
    ...args: Parameters<Fn>
  ) => { type: string; payload: ReturnType<Fn> }
}

const createAction: CreateAction = (type: any, fn?: any) => {
  if (fn) {
    return (...args: any) => ({
      type,
      payload: fn(...args),
    })
  }

  return (payload: any) => ({ type, payload })
}

export default createAction
