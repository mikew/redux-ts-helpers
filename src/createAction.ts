/**
 * Factory function that returns a redux action creator with two arguments:
 * - the first is the payload
 * - the second is the meta
 */
export default function createAction<TPayload = any, TMeta = any>(
  type: string,
) {
  return (payload: TPayload, meta?: TMeta) =>
    ({
      type,
      payload,
      meta,
    } as {
      type: string
      payload: TPayload
      // This whole `as {}` bit is needed with recent versions of TypeScript,
      // there's a bug somewhere but finding it is a rabbit hole of:
      // - importing FluxAction, which then means people using `createAction` will
      //   be hit by https://github.com/Microsoft/TypeScript/issues/5711
      // - TypeScript not being able to infer that `meta` here is properly
      //   optional, and not just `any | undefined` (which yes, is exactly how
      //   optional appears yet "not technically" optional)
      // tslint:disable-next-line:trailing-comma
      meta?: TMeta
    })
}
