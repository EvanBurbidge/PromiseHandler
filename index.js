
/**
 * @param { Promise } promise
 * @param { Object } { resolveCallback: (data) => void, rejectCallback: (error) => void}
 * @return { Promise<Any> }
 */
 export function awaitWrap(promise, { resolveCallback = () => {}, rejectCallback = () => {} } = {}) {
  return promise.then(function (data) {
    resolveCallback(data);
    return { error: null, data }
  }).catch(function (error) {
    rejectCallback(error);
    return { error, data: null }
  })
}

export default awaitWrap;
