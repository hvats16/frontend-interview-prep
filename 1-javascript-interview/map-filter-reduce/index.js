//map filter reduce

//map

let arr = [1, 2, 3, 4, 5];

let newArr = arr.map((a) => {
  return a * 2;
});

console.log(newArr); // [2, 4, 6, 8, 10]

let newArr2 = arr.filter((a) => {
  return a % 2 === 0;
});

console.log(newArr2); // [2, 4]

let newArr3 = arr.reduce((acc, a) => {
  return acc + a;
}, 0);

console.log(newArr3); // 15

// Map Polyfill

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i]));
  }
  return temp;
};

const newArr4 = arr.myMap((data) => {
  return data * 10;
});

console.log(newArr4);

// Filter Polyfill

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) temp.push(this[i]);
  }
  return temp;
};

const newArr5 = arr.myFilter((data) => {
  return data % 2 === 0;
});

console.log(newArr5);

// Reduce PolyFill

Array.prototype.myReduce = function (cb, initValue) {
  let acc = initValue;

  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i]) : this[i];
  }
  return acc;
};

const newValue = arr.myReduce((temp, i) => {
  return temp + i;
}, 0);

console.log(newValue);
