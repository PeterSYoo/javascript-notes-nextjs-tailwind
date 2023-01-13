import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const LocalLexicalEnvironmentMD = () => {
  const c1 = `
  // Global lexical environment
  let globalVariable = "Hello, global!";

  function greet() {
    // Local lexical environment for greet function
    let greeting = "Hello, local!";

    console.log(greeting); // Output: "Hello, local!"
    console.log(globalVariable); // Output: "Hello, global!"
  }

  greet();
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;In JavaScript, a local lexical environment is created whenever a
        function is called, and it provides the context for the code inside the
        function, including the function&apos;s local variables and
        parameters.&quot;
      </p>

      <p>
        Imagine that a local lexical environment is like a small reading room
        within a library. The reading room is a separate, enclosed space within
        the larger library, and it contains a selection of books that are
        specifically relevant to the task at hand.
      </p>

      <p>
        In the same way, a local lexical environment in JavaScript is a
        separate, enclosed space within the global lexical environment. It
        contains a selection of variables and functions that are specifically
        relevant to the code being executed within that local environment.
      </p>

      <p>
        Just as a reading room provides a focused space for reading and studying
        a specific topic, a local lexical environment provides a focused space
        for accessing and using a specific set of variables and functions within
        a JavaScript program. And just as a reading room is nested within the
        larger library and can access the books stored in the library, a local
        lexical environment is nested within the global lexical environment and
        can access the variables and functions stored there.
      </p>

      <p>
        The global lexical environment is represented by the global object,
        which is a special object that provides the global namespace for the
        JavaScript code that is executed in a particular context (e.g., a web
        page or a Node.js script).
      </p>

      <p>
        The local lexical environment, on the other hand, is a separate object
        that is created for each function when it is called. This object is used
        to store the local variables and function parameters for that function.
        It also has a reference to the outer lexical environment, which is the
        lexical environment in which the function was defined. This allows the
        function to access variables and parameters that are defined in the
        outer lexical environment, as well as the global lexical environment.
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        In this example, the global lexical environment has a single variable
        called globalVariable that is defined in the global scope.
      </p>

      <p>
        The greet function is defined in the global lexical environment, and it
        has its own local lexical environment. This local lexical environment
        contains a single variable called greeting that is defined within the
        function.
      </p>

      <p>
        When the greet function is called, it creates a new local lexical
        environment object and assigns it to the variable greeting. This object
        has a reference to the global lexical environment, which allows the
        function to access the globalVariable variable.
      </p>

      <p>
        Inside the function, the console.log statements output the values of the
        greeting and globalVariable variables, which demonstrate how the
        function is able to access variables from both its own local lexical
        environment and the global lexical environment.
      </p>

      <p>
        In JavaScript, each function has its own lexical environment, and a
        nested function has access to the lexical environments of all of its
        parent functions.
      </p>
    </>
  );
};
