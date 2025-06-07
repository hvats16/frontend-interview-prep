function f(a, b) {
  console.log(a, b);
}

// f("Hello", "World!");

function f2(a) {
  return function (b) {
    console.log(a, b);
  };
}

const newCall = f2("Hello");
// newCall("World!");

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const sum1 = sum(10)(20)(30);
// console.log(sum1);

function evaluate(type) {
  const operations = {
    sum: (a, b) => a + b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    subtract: (a, b) => a - b,
  };

  const op = operations[type];
  if (!op) return;

  return function (a) {
    return function (b) {
      return op(a, b);
    };
  };
}

// console.log(evaluate("multiply")(10)(20));

//Infinite currying

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

// console.log(add(10)(20)(10)());

//Currying vs Partial Application

//Partial Application Function but in currying we have to return 3 partial function
function sum2(a) {
  return function (b, c) {
    return a + b + c;
  };
}

const x = sum2(10);

// console.log(x(10, 20));
// console.log(x(100, 20));

// Real example of Currying

function updateElementText(id) {
  return function (text) {
    document.getElementById(id).innerText = text;
  };
}

const element = updateElementText("currying-example");

setTimeout(() => {
  element("Hello Harshit");
}, 5000);

// Currying curry() - f(a,b,c) -> f(a)(b)(c)

function curry(func) {
  return function curriedFunction(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunction(...args, ...next);
      };
    }
  };
}

const newSum = (a, b, c) => a + b + c;

const totalSum = curry(newSum);

console.log(totalSum(1)(2)(3));

//(1)(2)(3) -> function length is 3 here.
