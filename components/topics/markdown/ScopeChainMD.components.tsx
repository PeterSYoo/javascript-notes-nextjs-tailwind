import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const ScopeChainMD = () => {
  const c1 = `
  let x = "global";

  function foo() {
    let y = "local";

    console.log(x); // Output: "global"
    console.log(y); // Output: "local"
  }

  foo();

  console.log(x); // Output: "global"
  console.log(y); // ReferenceError: y is not defined
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;The scope chain is a series of lexical environments that are
        linked together and is used to determine the accessibility of variables
        and functions in JavaScript by allowing the JavaScript engine to search
        for variables and functions in the current and parent lexical
        environments.&quot;
      </p>
      <p>
        Imagine that the scope chain is like a ladder. The ladder has a series
        of rungs, each representing a level of the scope chain. At the bottom of
        the ladder is the global scope, which is the foundation upon which all
        other scopes are built. As you climb higher up the ladder, you reach
        local scopes that are nested within the global scope.
      </p>
      <p>
        Just as a ladder provides a way to access higher levels of a structure
        (e.g. a building), the scope chain provides a way for a JavaScript
        program to access variables and functions that are stored at higher
        levels of the lexical environment. When you are at the top of the
        ladder, you can look down and see all of the rungs below you,
        representing the complete scope chain.
      </p>
      <p>
        As you move from one rung to the next on the ladder, you are essentially
        moving from one level of the scope chain to the next. And just as a
        ladder provides a structure for climbing up and down, the scope chain
        provides a structure for accessing variables and functions within a
        JavaScript program.
      </p>
      <p>
        The scope chain is a series of lexical environments that are linked
        together and is used to determine the accessibility of variables and
        functions in JavaScript. When you access a variable or function in your
        code, the JavaScript engine looks for the variable or function in the
        current lexical environment. If it is not found, the engine looks for it
        in the next lexical environment in the scope chain, and so on.
      </p>
      <p>
        Here&apos;s some code that illustrates the concept of the scope chain:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        In this code, the global lexical environment contains a `let` variable
        `x` with the value &quot;global&quot;. When the `foo` function is
        called, a new lexical environment is created for the function and is
        added to the top of the scope chain. This new lexical environment
        contains a `let` variable `y` with the value &quot;local&quot;.
      </p>
      <p>
        When the `console.log` statements inside the `foo` function are
        executed, the JavaScript engine looks for the variables `x` and `y` in
        the current lexical environment (the one created for the `foo`
        function). Since `y` is found in this environment, its value
        &quot;local&quot; is printed to the console. Since `x` is not found in
        the current environment, the engine looks for it in the next lexical
        environment in the scope chain, which is the global lexical environment.
        In the global lexical environment, the variable `x` is found and its
        value &quot;global&quot; is printed to the console.
      </p>
      <p>
        When the `console.log` statements outside of the `foo` function are
        executed, the JavaScript engine looks for the variables `x` and `y` in
        the global lexical environment. Since `x` is found in this environment,
        its value &quot;global&quot; is printed to the console. Since `y` is not
        found in the global lexical environment, a `ReferenceError` is thrown.
      </p>
      <p>
        The scope chain is created when a function is called. When a function is
        called, a new lexical environment is created for the function and is
        added to the top of the scope chain. This new lexical environment
        contains the arguments and variables that are local to the function.
      </p>
      <p>
        The scope chain is used to resolve variable and function references.
        When you access a variable or function in your code, the JavaScript
        engine looks up the reference in the scope chain to find the
        corresponding variable or function.
      </p>
      <p>
        The scope chain can have multiple levels. When a function is called
        inside another function, a new lexical environment is created and added
        to the top of the scope chain. This means that the scope chain can have
        multiple levels, with the innermost lexical environment at the top of
        the chain and the global lexical environment at the bottom.
      </p>
      <p>
        Understanding the scope chain is important because it helps you to
        understand how the JavaScript engine determines the accessibility of
        variables and functions in your code. It can also help you to avoid
        common pitfalls, such as trying to access a variable before it has been
        declared or accidentally overwriting a variable that you did not mean to
        change.
      </p>
    </>
  );
};
