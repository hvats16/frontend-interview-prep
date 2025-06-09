# JavaScript Core Concepts

A collection of essential JavaScript concepts commonly asked in technical interviews with practical examples and implementations.

## Concepts Overview

```
.
└── javascript-concepts/
    ├── functions/         # Core function concepts and patterns
    ├── map-filter-reduce/ # Array functional methods
    ├── var-let-const/     # Variable declarations and scope
    ├── closure/           # Lexical scope and data encapsulation
    ├── currying/          # Function transformation techniques
    ├── objects/           # Object patterns and inheritance
    ├── this-keyword/      # Context binding in JavaScript
    ├── call-apply-bind/   # Function context manipulation methods
    ├── debounce-throttle/ # Performance optimization techniques
    ├── event-propagation/ # DOM event flow management
    └── compose-pipe/      # Function composition patterns
```

## Concept Definitions & Key Points

### 1. Functions
**Definition**: Functions are first-class objects in JavaScript that can be assigned to variables, passed as arguments, and returned from other functions.

- Function declarations vs expressions
- Arrow functions and lexical `this`
- Higher-order functions (functions that operate on other functions)

### 2. Map, Filter, and Reduce
**Definition**: Core functional programming methods for array transformation and data processing.

- **map()**: Transforms each element and returns a new array of the same length
- **filter()**: Creates a new array with elements that pass a test condition
- **reduce()**: Accumulates array elements into a single value using a reducer function

### 3. Variable Declarations
**Definition**: Different ways to declare variables with distinct scoping behaviors.

- **var**: Function-scoped, hoisted with undefined initialization
- **let**: Block-scoped, hoisted without initialization (TDZ)
- **const**: Block-scoped, immutable binding (but not immutable value)

### 4. Closures
**Definition**: A closure is a function that has access to variables from its outer (enclosing) lexical scope, even after the outer function has returned.

- Enables data privacy and encapsulation
- Creates function factories with "memory"
- Powers module patterns and state management

### 5. Currying
**Definition**: Currying is a technique that transforms a function with multiple arguments into a sequence of functions each with a single argument.

- Enables partial application of function arguments
- Creates specialized functions from general ones
- Improves code reusability and composition

### 6. Objects and OOP
**Definition**: JavaScript's object-oriented programming model based on prototypal inheritance rather than classical inheritance.

- Prototypal inheritance chain
- Constructor functions vs ES6 Classes
- Object composition patterns

### 7. The 'this' Keyword
**Definition**: A context-dependent reference that points to an object to which the current code belongs or is being applied.

- Determined by how a function is called (not where it's defined)
- Four binding rules: default, implicit, explicit, and new
- Arrow functions maintain lexical `this` binding

### 8. Call, Apply, and Bind
**Definition**: Methods that allow explicit control over function execution context (`this` value).

- **call()**: Invokes function with a specified `this` and individual arguments
- **apply()**: Invokes function with a specified `this` and arguments as an array
- **bind()**: Returns a new function with `this` bound to a specific object

### 9. Debounce and Throttle
**Definition**: Techniques to control how many times a function can be executed over time.

- **Debounce**: Delays function execution until after a specified time has elapsed since the last call
- **Throttle**: Ensures a function executes at a limited rate (e.g., once every X milliseconds)
- Critical for performance with rapid events like scrolling, resizing, or typing

### 10. Event Propagation
**Definition**: The process by which events travel through the DOM tree.

- **Capturing phase**: Event travels down from Document to the target element
- **Target phase**: Event reaches the target element
- **Bubbling phase**: Event bubbles up from the target back to the Document
- Event delegation leverages bubbling for efficient event handling

### 11. Function Composition (Compose and Pipe)
**Definition**: The process of combining multiple functions to create a new function.

- **compose**: Combines functions right-to-left (mathematical composition)
- **pipe**: Combines functions left-to-right (more readable data flow)
- Enables building complex operations from simple functions
- Core concept in functional programming

## Getting Started

Clone this repository and explore each concept directory for detailed examples and implementations.