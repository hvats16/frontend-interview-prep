// What is Call

var obj = {
  name: "Harshit",
};

function sayHello(age) {
  console.log(`Hello ${this.name} and age is ${age}`);
}

// sayHello.call(obj, 24); // Pointing to this obj as this

// What is Apply

var obj2 = {
  name: "Harshit",
};

function sayHello2(...args) {
  console.log(
    `Hello ${this.name} and age is ${args[0]} and profession is ${args[1]}`
  );
}

// sayHello2.apply(obj2, [24, "Software Engineer"]); // Pointing to this obj as this

// What is bind

var obj3 = {
  name: "Harshit",
};

function sayHello3(age) {
  console.log(`Hello ${this.name} and age is ${age}`);
}

const newFunc = sayHello3.bind(obj3, 24);

// newFunc();

// Question 1

const age = 24;

var person = {
  name: "Harshit",
  age: 20,
  getAge: function () {
    return this.age;
  },
};

var person2 = {
  age: 30,
};

// console.log(person.getAge.call(person2));

// Note - This never points to the function its points to the function context

// Append tp array to another array

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

arr1.push.apply(arr1, arr2);

// console.log(arr1);

// Find max

const arr = [5, 2, 7, 10, 3, 9];

const max = Math.max.apply(null, arr);
// console.log(max);

// Question 3

function f() {
  console.log(this);
}

let user = {
  g: f.bind(null),
};

// user.g(); // Points to windows object beacuse bind return function the context of f is bound fixed to window object

// Question

function g() {
  console.log(this.name);
}

g = g.bind({ name: "Harshit" }).bind({ name: "John" });

// g(); // Print Harshit once a function is bind to a particluar object then it will bind to that object forever

const newAge = 10;

var person2 = {
  name: "Harshit",
  newAge: 20,
  getAgeArrow: () => console.log(this.newAge),
  getAgeFunc: function () {
    console.log(this.newAge);
  },
};

var person3 = {
  newAge: 30,
};

// person2.getAgeFunc.call(person3); // 30
// person2.getAgeArrow.call(person3); // undefined // Doesn't matter how we are calling it takes refernece from it's parent normal function and we don't have any parent normal function here

// Polyfill for call

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("This is not callable");
  }

  context.fn = this; // temporarily attach function
  const result = context.fn(...args); // call the function
  delete context.fn; // clean up
  return result; // return result
};

// Polyfill for apply

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error("This is not callable");
  }
  if (!Array.isArray(args)) throw new Error("Arguments is not an Array");

  context.fn = this; // temporarily attach function
  const result = context.fn(...args); // call the function
  delete context.fn; // clean up
  return result; // return result
};

// Polyfill for bind

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Cannot bound it is not callable");
  }

  context.fn = this; // temporarily attach function
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};
