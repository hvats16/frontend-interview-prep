const button = document.getElementById("btn");
const buttonPressed = document.getElementById("button-pressed");
const buttonTriggred = document.getElementById("button-triggred");
let pressedCount = 0;
let triggredCount = 0;

function debounce(func, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function throttle(func, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

function incrementTriggred() {
  buttonTriggred.innerHTML = ++triggredCount;
}

const debounceTriggred = debounce(incrementTriggred, 1000);
const throttleTriggred = throttle(incrementTriggred, 500);

button.addEventListener("click", function () {
  buttonPressed.innerHTML = ++pressedCount;
  //   debounceTriggred();
  throttleTriggred();
});
