The global lexical environment is represented by the global object, which is a special object that provides the global namespace for the JavaScript code that is executed in a particular context (e.g., a web page or a Node.js script).
<br/><br/>
The local lexical environment, on the other hand, is a separate object that is created for each function when it is called. This object is used to store the local variables and function parameters for that function. It also has a reference to the outer lexical environment, which is the lexical environment in which the function was defined. This allows the function to access variables and parameters that are defined in the outer lexical environment, as well as the global lexical environment.

<Code language='javascript'>

// Global lexical environment
let globalVariable = "Hello, global!";

function greet() {
&nbsp;// Local lexical environment for greet function
&nbsp;let greeting = "Hello, local!";

&nbsp;console.log(greeting); // Output: "Hello, local!"
&nbsp;console.log(globalVariable); // Output: "Hello, global!"
}

greet();
</Code>

In this example, the global lexical environment has a single variable called globalVariable that is defined in the global scope.
<br/><br/>
The greet function is defined in the global lexical environment, and it has its own local lexical environment. This local lexical environment contains a single variable called greeting that is defined within the function.
<br/><br/>
When the greet function is called, it creates a new local lexical environment object and assigns it to the variable greeting. This object has a reference to the global lexical environment, which allows the function to access the globalVariable variable.
<br/><br/>
Inside the function, the console.log statements output the values of the greeting and globalVariable variables, which demonstrate how the function is able to access variables from both its own local lexical environment and the global lexical environment.