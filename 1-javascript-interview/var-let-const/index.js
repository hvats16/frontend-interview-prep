var a = 5; //Global scope

console.log(a);

{
  let a = 10;
  console.log(a); // Block scope, prints 10
}

function shadowingFunc() {
  let a = "Hello";

  if (true) {
    let a = "World";
    console.log(a); // Block scope, prints "World"
  }
  console.log(a); // Function scope, prints "Hello"
}

shadowingFunc();

function shadowingFunc2() {
  var a = "Hello";
  let b = "Hi";

  if (true) {
    let a = "World";
    // var b = "Hey"; // Gives Error for illegial Shadowing
    console.log(a); // Block scope, prints "World"
    console.log(b);
  }
}


console.log(x);
var x = 10; // Global scope

console.log(y);
let y = 20; // Temporal Dead Zone, gives ReferenceError

console.log(z);
const z = 30; // Temporal Dead Zone, gives ReferenceError