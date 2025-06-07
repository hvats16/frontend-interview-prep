function subscribe() {
  const name = "Harshit";
  function displayName() {
    console.log(name);
  }
  displayName();
}

// subscribe(); // Output: Harshit

function createBase(num) {
  return function (baseNum) {
    return num + baseNum;
  };
}

const addSix = createBase(6);
// console.log(addSix(10));
// console.log(addSix(21));

function find(index) {
  let a = [];
  for (let i = 0; i < 100000; i++) {
    a[i] = i * i;
  }
  return a[index];
}

function find2() {
  let a = [];
  for (let i = 0; i < 100000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    return a[index];
  };
}

// const findCached = find2();
// console.time("6");
// findCached(6);
// console.timeEnd("6"); // Output: 6
// console.time("21");
// findCached(50);
// console.timeEnd("21"); // Output: 21

function a() {
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
}

// a(); // Output: 5, 5, 5, 5, 5

function a2() {
  for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
}

// a2(); // Output: 0, 1, 2, 3, 4

function a3() {
  for (var i = 0; i < 5; i++) {
    function inner(i) {
      setTimeout(function log() {
        console.log(i);
      }, 1000);
    }
    inner(i);
  }
}

// console.log(a3());

function counter() {
  let _counter = 0;
  function incrementCounter() {
    return ++_counter;
  }
  function decrementCounter() {
    return --_counter;
  }
  return {
    incrementCounter,
    decrementCounter,
  };
}

const mainfunction = counter();

// console.log(mainfunction.incrementCounter());
// console.log(mainfunction.incrementCounter());
// console.log(mainfunction.incrementCounter());
// console.log(mainfunction.decrementCounter());

// Module Pattern

var module = (function () {
  function privateMethod() {
    // do something
    console.log("This is Private Method");
  }

  return {
    publicMethod: function () {
      privateMethod();
    },
  };
})();

// module.publicMethod();

//Make this run only once

let view;

function likeTheView() {
  let called = false;

  return function () {
    if (called) return;
    called = true;
    let view = "Hola!";
    console.log(view);
  };
}

// const subscribed = likeTheView();
// subscribed(); // prints "Hola!"
// subscribed(); // does nothing
// subscribed(); // does nothing
// subscribed(); // does nothing
// subscribed(); // does nothing

// polyfill of run once function

function once(func, context) {
  let ran;
  return function () {
    if (func) {
      ran = func.apply(context || this);
      func = null;
    }
    return ran;
  };
}

const hello = () => console.log("hello");

const run = once(hello);

// run();
// run();
// run();
// run();
// run();

// Memoize Polyfill

function memoize(func) {
  const result = {};
  return function (...args) {
    let argsCache = JSON.stringify(args);
    if (result[argsCache] !== undefined) {
      return result[argsCache]; // Return cached result
    } else {
      result[argsCache] = func.call(this, ...args); // Compute and store
      return result[argsCache];
    }
  };
}

function calculate(num1, num2) {
  for (let i = 0; i < 1000000; i++) {}
  return num1 * num2;
}

const memoizedCalculate = memoize(calculate);

// console.log(memoizedCalculate(1111, 2222));
// console.log(memoizedCalculate(1111, 2222));
