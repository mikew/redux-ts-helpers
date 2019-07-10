interface WrapWithMeta {
  <TPayload, TPayloadReturn>(
    actionCreator: (
      payload: TPayload,
    ) => { type: string; payload: TPayloadReturn },
  ): (
    payload: TPayload,
  ) => { type: string; payload: TPayloadReturn; meta: TPayload }

  <TMeta>(
    actionCreator: () => { type: string },
    metaBuilder: () => TMeta,
  ): () => { type: string; meta: TMeta }

  <TPayload, TPayloadReturn, TMeta>(
    actionCreator: (
      payload: TPayload,
    ) => { type: string; payload: TPayloadReturn },
    metaBuilder: (payload: TPayload) => TMeta,
  ): (
    payload: TPayload,
  ) => { type: string; payload: TPayloadReturn; meta: TMeta }
}

const wrapWithMeta: WrapWithMeta = (actionCreator: any, metaBuilder?: any) => (
  payload?: any,
) => {
  return {
    ...actionCreator(payload),
    meta: metaBuilder ? metaBuilder(payload) : payload,
  }
}

export default wrapWithMeta
