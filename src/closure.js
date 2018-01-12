// Complete the following functions.

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let count = 0;
  return () => {
    return count += 1;
  };
};

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;
  return {
    increment: () => ++counter,
    decrement: () => --counter
  };
};

const limitFunctionCallCount = (cb, n) => {
  let count = 0;
  return (...args) => {
    if (count < n) {
      count++;
      return cb(...args);
    } return null;
  };
};

/* STRETCH PROBLEM */

const cacheFunction = (cb) => {
  // const cache = {};
  // let argz;
  // const original = cb;
  // cb = function (...args) {
  //   argz = args;
  //   return original.apply(this, ...args);
  // };

  // return () => {
  //   cb(argz);
  //   if (!cache[argz]) {
  //     const result = cb(argz);
  //     cache[argz] = result;
  //     return result;
  //   } return cache[argz];
  // }
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
};

