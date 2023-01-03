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
