const addFive = (num) => {
  return num + 5;
};

const subtarctTwo = (num) => {
  return num - 2;
};

const MultiplyFive = (num) => {
  return num * 5;
};

//compose - right -> left
//pipe - left -> right

function compose(...fns) {
  return function (...args) {
    return fns.reduceRight((acc, fn) => {
      return [fn.apply(null, acc)];
    }, args)[0];
  };
}

function compose2(...fns) {
  return function (init) {
    return fns.reduceRight((acc, curr) => {
      return curr(acc);
    }, init);
  };
}

function pipe(...fns) {
  return function (...args) {
    return fns.reduce((acc, fn) => {
      return [fn.apply(null, acc)];
    }, args)[0];
  };
}

function pipe2(...fns) {
  return function (init) {
    return fns.reduce((acc, curr) => {
      return curr(acc);
    }, init);
  };
}

const evaluateCompose = compose(addFive, subtarctTwo, MultiplyFive);
const evaluatePipe = pipe(addFive, subtarctTwo, MultiplyFive);
const evaluateCompose2 = compose2(addFive, subtarctTwo, MultiplyFive);
const evaluatePipe2 = pipe2(addFive, subtarctTwo, MultiplyFive);
console.log(evaluateCompose(5));
console.log(evaluatePipe(5));
console.log(evaluateCompose2(5));
console.log(evaluatePipe2(5));
