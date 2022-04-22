import { promiseWrapper } from '../index';

describe('promiseWrapper', () => {

  it('should return a resolved value', async () => {
    const testResolve = "Hi there";
    const promise = Promise.resolve(testResolve);

    const { data, error } = await promiseWrapper(promise);

    expect(error).toBe(null)
    expect(data).toBe(testResolve);
  });

  it('should return a resolved value', async () => {
    const testReject = "Hi there";
    const promise = Promise.reject(testReject);

    const { data, error } = await promiseWrapper(promise);

    expect(data).toBe(null)
    expect(error).toBe(testReject);
  });

})
