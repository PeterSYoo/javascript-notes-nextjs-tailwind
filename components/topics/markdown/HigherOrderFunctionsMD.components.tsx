import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const HigherOrderFunctionsMD = () => {
  const c1 = `
  // This is a higher-order function that takes a function and an argument,
  // and returns a new function that is the result of applying the original
  // function to the argument.
  const applyFunction = (fn, arg) => (() => fn(arg));

  // This is a higher-order function that takes a function and returns a new
  // function that is the result of applying the original function to its
  // arguments reversed.
  const reverseArgs = fn => (...args) => fn(...args.reverse());

  // This is a higher-order function that takes a function and returns a new
  // function that caches the result of calling the original function.
  const cacheFunction = fn => {
    let cache = new Map();

    return (...args) => {
      const key = JSON.stringify(args);
      if (!cache.has(key)) {
        cache.set(key, fn(...args));
      }

      return cache.get(key);
    };
  };
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;In JavaScript, higher-order functions are functions that take
        other functions as arguments or return them as output, allowing for the
        creation of more flexible and reusable code.&quot;
      </p>
      <p>
        Imagine that you are a personal assistant to a busy executive. Your job
        is to handle a variety of tasks and projects for the executive, and to
        delegate tasks to other team members as needed.
      </p>
      <p>
        Higher order functions in JavaScript can be thought of as similar to a
        personal assistant. Just as a personal assistant takes on tasks and
        projects and delegates them to others as needed, a higher order function
        takes one or more functions as arguments and returns a new function that
        combines the behavior of those functions in some way.
      </p>
      <p>
        For example, a higher order function might take two functions as
        arguments and return a new function that combines the behavior of those
        two functions. Or, it might take a function and a value as arguments,
        and return a new function that modifies the behavior of the original
        function using the value.
      </p>
      <p>
        Just as a personal assistant helps the executive to manage and
        coordinate various tasks and projects, a higher order function helps to
        manage and coordinate the behavior of other functions in a program.
      </p>
      <p>
        Overall, higher order functions in JavaScript are functions that take
        one or more functions as arguments and return a new function that
        combines or modifies the behavior of those functions, in a way that is
        similar to a personal assistant handling tasks and delegating them to
        others as needed.
      </p>
      <p>
        One way to define higher-order functions in JavaScript is using arrow
        functions. Arrow functions are a concise way to define anonymous
        functions, and they allow you to omit the function keyword and the curly
        braces.
      </p>
      <p>
        Here are some examples of higher-order functions using arrow functions:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
    </>
  );
};
