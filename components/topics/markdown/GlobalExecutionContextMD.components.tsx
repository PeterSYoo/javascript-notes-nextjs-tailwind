import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const GlobalExecutionContextMD = () => {
  const c1 = `
  function greet() {
    console.log('Hello, World!');
  }
    
  window.greet(); // logs "Hello, World!"
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;In JavaScript, the global execution context is the default
        execution context that is created when the JavaScript engine starts, and
        it provides the context for all code that is not inside a
        function.&quot;
      </p>
      <p>
        Imagine that the foundation of a building represents the global
        execution context in JavaScript. Just as the foundation provides a
        stable base for the rest of the building to be constructed upon, the
        global execution context provides a base for all of the code in a
        JavaScript program to be executed within.
      </p>
      <p>
        Now imagine that the building has multiple floors, each with its own
        rooms and functions. These different floors can be thought of as local
        execution contexts within the global execution context, representing
        specific blocks of code or functions being executed within the larger
        program.
      </p>
      <p>
        Just as the foundation supports the entire structure of the building,
        the global execution context supports the execution of all of the code
        in a JavaScript program. And just as the foundation remains the same
        even as the rest of the building is modified or changed over time, the
        global execution context remains constant throughout the execution of a
        JavaScript program, providing a stable base for all of the code to be
        executed within.
      </p>
      <p>
        The global execution context is a virtual environment in which
        JavaScript code is executed. When a JavaScript program starts running,
        the global execution context is created and provides a space for
        declarations, such as variables and functions, to be made. These
        declarations are then available to be used throughout the entire
        program. The global execution context is not a tangible object, but
        rather an abstract concept that represents the space in which code is
        executed.
      </p>
      <p>
        There is only one global execution context, and declarations made in
        this context are available throughout the entire program. Variables
        declared with the `var` keyword are stored in the global lexical
        environment and are also added as properties of the `window` object in
        web browsers. Functions declared with the `function` keyword are also
        stored in the global lexical environment and are added as methods of the
        `window` object.
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        In the global execution context, function expressions created with the
        `var` keyword are stored in the global lexical environment, but are not
        added as properties of the `window` object in web browsers. Only
        function declarations are added as properties of the `window` object. To
        keep the global scope clean and maintainable, it is generally considered
        a best practice to avoid declaring variables and functions in the global
        execution context. Instead, it is recommended to declare variables and
        functions within the appropriate scope, such as within a function or
        block, or to use `let` or `const` to create function expressions. This
        helps to prevent pollution of the global scope and makes it easier to
        keep track of the variables and functions that are available in your
        program.
      </p>
    </>
  );
};
