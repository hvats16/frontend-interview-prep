this.a = 5;
function func1() {
  console.log(this.a);
}
// func1();

const func2 = () => {
  console.log(this.a);
};
// func2();

let obj = {
  a: 10,

  function1: function () {
    console.log(this.a);
  },
  function2: () => {
    console.log(this.a);
  },
};

// obj.function1(); //10
// obj.function2(); // 5

let user = {
  name: "harshit",
  age: 24,
  getDetails: () => {
    console.log(this.name); // gives nothing because it will take value from its parent normal function and here is no parent normal function
  },
  getDetails2() {
    const nestedFunc = () => console.log(this.name); // Prints harshit
    nestedFunc();
  },
};

// user.getDetails();
// user.getDetails2();

class userClass {
  constructor(n) {
    this.name = n;
  }
  getName() {
    console.log(this.name);
  }
}

const newUser = new userClass("Harshit");

// newUser.getName();

const user2 = {
  name: "Harshit vats!",
  getName() {
    const name = "Harshit!";
    console.log(this.name);
  },
};

// user2.getName();

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

// Fix to make this assign to this function

function makeUser2() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

const makeUserRes = makeUser2(); // Here calling ref points to window objects

// console.log(makeUserRes.ref().name); // Prints nothings

const user3 = {
  name: "harshit",
  logMessage() {
    console.log(this.name);
  },
};

// setTimeout(user3.logMessage, 1000); // Prints nothing beacuse we are using this as a callback no longer have access to user object here points to window object

// Fix for this

// setTimeout(function () {
//   user3.logMessage();
// }, 1000);

var length = 4;
function callbackfunc() {
  console.log(this.length);
}

let objectTest = {
  length: 5,
  method(fn) {
    fn(); // this = global object
  },
};

// objectTest.method(callbackfunc); // ✅ prints 4

let objectTest2 = {
  length: 5,
  method() {
    arguments[0]();
  },
};

objectTest2.method(callbackfunc, 2, 3); // Prints 3 beacuse here [] is created of length 3 and it's an object which refers to parent [] and it has length property which is 3


