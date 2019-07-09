interface WrapWithMeta {
  <TPayload>(
    actionCreator: (payload: TPayload) => { type: string; payload: TPayload },
  ): (payload: TPayload) => { type: string; payload: TPayload; meta: TPayload }

  <TPayload, TMeta>(
    actionCreator: (payload: TPayload) => { type: string; payload: TPayload },
    metaBuilder: (payload: TPayload) => TMeta,
  ): (payload: TPayload) => { type: string; payload: TPayload; meta: TMeta }
}

const wrapWithMeta: WrapWithMeta = (actionCreator: any, metaBuilder?: any) => (
  payload: any,
) => {
  return {
    ...actionCreator(payload),
    meta: metaBuilder ? metaBuilder(payload) : payload,
  }
}

export default wrapWithMeta
