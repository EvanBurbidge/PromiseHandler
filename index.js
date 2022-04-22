
/**
 * @param { Promise } promise

 * @return { Promise<Any> }
 */
export function awaitWrap(promise) {
  return promise.then(function (data) {
    return { error: null, data }
  }).catch(function (error) {
    return { error, data: null }
  })
}

export default awaitWrap;
