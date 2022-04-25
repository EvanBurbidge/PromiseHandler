import { awaitWrap } from '../index';

const fn = jest.fn();

describe('awaitWrap', () => {

  it('should return a resolved value', async () => {
    const testResolve = "Hi there";
    const promise = Promise.resolve(testResolve);

    const { data, error } = await awaitWrap(promise);

    expect(error).toBe(null)
    expect(data).toBe(testResolve);
  });

  it('should return a resolved value', async () => {
    const testReject = "Hi there";
    const promise = Promise.reject(testReject);

    const { data, error } = await awaitWrap(promise);

    expect(data).toBe(null)
    expect(error).toBe(testReject);
  });
  
  it('should call the resolve callback', async () => {
    const testResolveCallback = "Hi there";
    const promise = Promise.resolve(testResolveCallback);

    const { data, error } = await awaitWrap(promise, { resolveCallback: fn });

    expect(fn).toHaveBeenCalledWith(testResolveCallback);
  });
  it('should call the reject callback', async () => {
    const testResolveCallback = "Hi there";
    const promise = Promise.reject(testResolveCallback);

    const { data, error } = await awaitWrap(promise, { rejectCallback: fn });

    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenCalledWith(testResolveCallback);
  });

})
