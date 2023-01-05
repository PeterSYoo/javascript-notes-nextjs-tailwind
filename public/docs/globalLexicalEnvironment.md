_"The global lexical environment is the outermost environment in which code is executed and defines the context for code that is not inside any function, also known as the global scope."_

<br/>
Imagine that the global lexical environment is like a library. The library contains a collection of books, each representing a variable or function in the JavaScript program. Just as a library provides a place for books to be stored and organized, the global lexical environment provides a place for variables and functions to be stored and organized within the context of a JavaScript program.

<br/>
Just as a library has various sections for different types of books (e.g. fiction, non-fiction, children's books), the global lexical environment has different "sections" or "scopes" for different types of variables and functions (e.g. global variables, local variables). And just as a library has a system for organizing and finding books (e.g. using call numbers), the global lexical environment has a system for organizing and accessing variables and functions (e.g. using the scope chain).

<br/>
Overall, the global lexical environment can be thought of as a central repository for all of the variables and functions in a JavaScript program, providing a way to store, organize, and access them as needed.

<br/>
The global lexical environment is a real object that is created automatically when the global execution context is created. It stores declarations from the global execution context, such as variables and function declarations. The global lexical environment is an object that is a property of the window object in web browsers, but it cannot be directly accessed from JavaScript code. It serves as a place to store declarations in the global scope and is not an abstract concept like the global execution context.
<br/><br/>
The global lexical environment is a feature of the `window` object in web browsers that stores variables and functions that are in the global execution context. These variables and functions are also added as properties of the `window` object, with the same names as in the global lexical environment. For example, if there is a function called `greet` in the global execution context, it will also be added as a property of the `window` object and a property of the global lexical environment object will be created that points to the `greet` function on the `window` object.

  <Code language='javascript'>

function greet() {
&nbsp;&nbsp;console.log('Hello, World!');
}

window.greet(); // logs "Hello, World!"
</Code>

The global lexical environment is a feature that is created automatically when the global execution context is created. It is an object that stores variables and functions declared with `let`, `const`, or `var`, as well as `function` declarations. While all of these declarations are stored in the global lexical environment, only `var` and `function` declarations are also added as properties of the `window` object in web browsers. The global lexical environment is a property of the `window` object, but does not have a property name itself. It does not pollute the global scope, but is an additional object that holds variables and `function` declarations and is not directly accessible from JavaScript code.

  <Code language='javascript'>
  
  var x = 10; // added to the global object as a property (window.x) and stored in the global lexical environment
  let y = 20; // not added to the global object as a property but is stored in the global lexical environment
  const z = 30; // not added to the global object as a property but is stored in the global lexical environment

console.log(window.x); // 10
console.log(window.y); // undefined
console.log(window.z); // undefined
</Code>

The global lexical environment is a special area in memory that stores `let`, `const`, `var`, and `function` declarations from the global execution context. It is an object, but does not have a name and is not directly accessible from JavaScript code. Instead, it serves as a place to store declarations in the global scope and can be thought of as a "hidden" object that is not directly visible to the code.
