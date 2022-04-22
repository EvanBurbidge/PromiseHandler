
/**
 * @param { Promise } promise

 * @return { Promise<Any> }
 */
export function awaitWrap(promise) {
  return promise.then(function(response) {
    return { error: null, data: response}
  }).catch(function(error) {
    return { error, data: null}
  })
}

export default awaitWrap;
