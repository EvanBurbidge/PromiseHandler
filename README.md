## PromiseHandler

## Installation

`npm install -S promisehandler`

## Usage

```javascript

  import { PromiseHandler } from 'promisehandler';

  const fakePromise = () => new Promise(resolve => setTimeout(resolve("hi")), 500);
  const fakePromiseReject = () => new Promise((__, reject) => setTimeout(reject("no")), 500);

  const fakePromiseHandler = async () => {
    const { error, data } = await PromiseHandler(fakePromise()); // { error: null, data: "hi" };
    error ? console.error(error) : console.log(data);
  }

  const fakePromiseRejectHandler = async () => {
    const { error, data } = await PromiseHandler(fakePromiseReject()); // { error: "no", data: null };
    error ? console.error(error) : console.log(data);
  }

```
