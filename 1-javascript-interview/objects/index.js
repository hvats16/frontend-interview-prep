const user = {
  name: "Harshit",
  age: 24,
  role: "Software Enginner",
};

// for (key in user) {
//   console.log(key, user[key]);
// }

let nums = {
  a: 100,
  b: 10,
  c: "harshit",
  d: 15,
};

let result = 1;
Object.values(nums).forEach((value) => {
  if (Number.isInteger(value)) {
    result = result * value;
  }
});
// console.log(result);

// ALternative

const res = Object.values(nums).reduce((acc, value) => {
  if (Number.isInteger(value)) acc = acc * value;
  return acc;
});

// console.log(res);

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 121;
a[c] = 456;

// console.log(a);

// Both is assigned as the a["[Object, Object]""] = 121. That's why it is showing 456

const user2 = {
  name: "Harshit",
  age: 24,
  role: "Software Enginner",
};

const strObj = JSON.stringify(user2); // Convert into string
// console.log(strObj);
const parseObj = JSON.parse(strObj); // Convert into Object
// console.log(parseObj);
//Store in localstorage because cannot store directly object as value

// console.log([..."Hello"]); // ['H', 'e', 'l', 'l', 'o']

const myUser = {
  name: "Harshit",
  age: "24",
  fullName: {
    firstName: "Harshit",
    lastName: "Vats",
  },
};

const {
  name,
  fullName: { firstName },
} = myUser; // Destructing nested objects

function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit];
}

// console.log(getItems(["banana", "apple"], "pear", "mango"));

let objGreet = { greeting: "Hello" };

let d = objGreet; // d points to the SAME object in memory Reference Copy (Shallow Reference)

objGreet.greeting = "Bye";

// console.log(d.greeting); // "Bye"

// Example of Shallow Copy

const original = {
  name: "Harshit",
  meta: {
    age: 25,
    role: "Dev",
  },
};

// Shallow copy
const copy = { ...original };

copy.name = "Raj";
copy.meta.age = 30;

// console.log(original.name); // "Harshit" ✅
// console.log(original.meta.age); // 30 ❌ (changed due to shared reference)

// Example of Deep Copy

const original2 = {
  name: "Harshit",
  meta: {
    age: 25,
    role: "Dev",
  },
};

// Deep copy using JSON method
// const copy = JSON.parse(JSON.stringify(original2));

copy.meta.age = 30;

// console.log(original2.meta.age); // 25 ✅ (deep copy prevents mutation)

const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);


// Ways to deep copy 
// -> Object.assign({}, obj);
// Json.parse(Json.stringify(obj))
// let newObj = {...obj}
