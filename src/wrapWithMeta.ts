interface WrapWithMeta {
  <TMeta>(
    actionCreator: () => { type: string },
    metaBuilder: () => TMeta,
  ): () => { type: string; meta: TMeta }

  <ActionFn extends (...args: any) => any, TMeta>(
    actionCreator: ActionFn,
    metaBuilder: (...args: Parameters<ActionFn>) => TMeta,
  ): (...args: Parameters<ActionFn>) => ReturnType<ActionFn> & TMeta
}

const wrapWithMeta: WrapWithMeta = (actionCreator: any, metaBuilder?: any) => (
  ...args: any
) => {
  return {
    ...actionCreator(...args),
    meta: metaBuilder ? metaBuilder(...args) : args,
  }
}

export default wrapWithMeta
