
/**
 * @param { Promise } promise

 * @return { Promise<Any> }
 */
export function promiseWrapper(promise) {
  return promise.then(function(response) {
    return { error: null, data: response}
  }).catch(function(error) {
    return { error, data: null}
  })
}

export default promiseWrapper;
