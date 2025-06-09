const button = document.getElementById("main-btn");
const form = document.getElementById("main-form");
const div = document.getElementById("main-div");

button.addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  console.log("button clicked");
});

form.addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  console.log("forn clicked");
});

div.addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  console.log("div clicked");
});

//Event bubbling - Goes from bottom to top focus and blur do not bubble

// Event capturing (also called trickling) is the phase where an event travels from the root (document) down to the target element before bubbling up. (by capture: true)

//event.target: The element that actually triggered the event.

// event.currentTarget: The element the event listener is attached to.

// this: Refers to the element the listener is bound to, same as event.currentTarget in regular functions.

//Event delegation is a technique where you attach a single event listener to a parent element to handle events on its child elements using event bubbling.
