/**
 * Factory function that returns a redux action creator with two arguments:
 * - the first is the payload
 * - the second is the meta
 * @export
 * @template TPayload
 * @template TMeta
 * @param {string} type
 * @returns {(payload: TPayload, meta?: TMeta) => Action}
 */
export default function createAction<TPayload = any, TMeta = any>(type: string) {
  return (payload: TPayload, meta?: TMeta) => ({
    type,
    payload,
    meta,
  })
}
