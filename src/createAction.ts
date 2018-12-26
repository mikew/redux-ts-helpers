interface CreateAction {
  (type: string): () => {
    type: string
  }

  <TPayload>(type: string): (
    payload: TPayload,
  ) => { type: string; payload: TPayload }

  <TPayload, TMeta>(type: string): (
    payload: TPayload,
    meta: TMeta,
  ) => { type: string; payload: TPayload; meta: TMeta }
}

/**
 * Factory function that returns a redux action creator with two generic
 * arguments:
 * - the first is the payload
 * - the second is the meta
 */
const createAction: CreateAction = (type: string) => (
  payload?: any,
  meta?: any,
) => ({
  type,
  payload,
  meta,
})

export default createAction
