// Functions Declaration

function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// Functions Expression
const add = function (a, b) {
  return a + b;
};

console.log(add(5, 3));

// Arrow Functions
const multiply = (x, y) => x * y;
console.log(multiply(4, 6));

// Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("This is an IIFE!");
})();

// First Class Functions
function firstClassFunction(fn) {
  return fn();
}

console.log(firstClassFunction(() => "First class function executed!"));

// Higher-Order Functions
function higherOrderFunction(arr, fn) {
  return arr.map(fn);
}
const numbers = [1, 2, 3, 4];
const squaredNumbers = higherOrderFunction(numbers, (num) => num * num);
console.log(squaredNumbers);

// Callback Functions
function fetchData(callback) {
  setTimeout(() => {
    const data = "Fetched Data";
    callback(data);
  }, 1000);
}
fetchData((data) => {
  console.log(data);
});

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i); // Will log 5 five times due to closure
  }, 1000);
}

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i); // Will log 0 to 4 due to block scope
  }, 1000);
}

functionName();

function functionName() {
  console.log("Complete Function Copied to the Scope");
}


function sum(a, b) {
  return a + b;
}
console.log(sum(10, 20)); // Params
