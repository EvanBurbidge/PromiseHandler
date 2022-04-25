## PromiseHandler

## Installation

`npm install -S  await-wrapper`

## Usage

```javascript

  import { awaitWrap } from 'await-wrapper';

  const fakePromise = () => new Promise(resolve => setTimeout(resolve("hi")), 500);
  const fakePromiseReject = () => new Promise((__, reject) => setTimeout(reject("no")), 500);

  const fakePromiseHandler = async () => {
    const { error, data } = await awaitWrap(fakePromise()); // { error: null, data: "hi" };
    error ? console.error(error) : console.log(data);
  }

  const fakePromiseRejectHandler = async () => {
    const { error, data } = await awaitWrap(fakePromiseReject()); // { error: "no", data: null };
    error ? console.error(error) : console.log(data);
  }

```

## New methods

Listening to some feedback there are some small performance issues that may be encountered with this library, while it may clean up your code it also adds a new level of awaiting to promises. If you need to handle data in a more performant way you can now add a resolverCallback and rejectCallback.

```javascript

  import { awaitWrap } from 'await-wrapper';

  const fakePromise = () => new Promise(resolve => setTimeout(resolve("hi")), 500);
  const fakePromiseReject = () => new Promise((__, reject) => setTimeout(reject("no")), 500);

  const resolveCallback = response => {
    // do something with response
  }
  const rejectCallback = error => {
    // do something with error
  }

  const fakePromiseHandler = async () => {
    const { error, data } = await awaitWrap(fakePromise(), { resolveCallback, rejectCallback }); // { error: null, data: "hi" };
    error ? console.error(error) : console.log(data);
  }

  const fakePromiseRejectHandler = async () => {
    const { error, data } = await awaitWrap(fakePromiseReject(), { resolveCallback, rejectCallback }); // { error: "no", data: null };
    error ? console.error(error) : console.log(data);
  }

```
