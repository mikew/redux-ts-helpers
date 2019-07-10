interface CreateAction {
  (type: string): () => {
    type: string
  }

  <TPayload>(type: string): (
    payload: TPayload,
  ) => { type: string; payload: TPayload }
}

/**
 * Factory function that returns a redux action creator with one argument: the
 * payload.
 */
const createAction: CreateAction = (type: string) => (payload?: any) => ({
  type,
  payload,
})

export default createAction
