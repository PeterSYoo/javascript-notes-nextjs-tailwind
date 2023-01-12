import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const CallbackFunctionsMD = () => {
  const c1 = `
  function greet() {
    console.log('Hello, World!');
  }
    
  setTimeout(greet, 1000); // Outputs "Hello, World!" after 1 second
  `;

  const c2 = `
  [1, 2, 3].map((x) => x \* x); // Outputs [1, 4, 9]
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;In JavaScript, a callback function is a function that is passed as
        an argument to another function and is executed after the outer function
        has completed, typically as a way to handle asynchrony.&quot;
      </p>
      <p>
        Imagine that you are a customer at a store, and you want to purchase an
        item that is currently out of stock. The store clerk tells you that the
        item will be restocked the next day, and offers to call you when the
        item becomes available.
      </p>
      <p>
        In the same way, a callback function in JavaScript is a function that is
        passed as an argument to another function, and is called by that
        function when a certain event has occurred. When you pass a callback
        function to another function, you are essentially providing the function
        with a &quot;phone number&quot; (the callback function) to call when the
        event has completed.
      </p>
      <p>
        Just as the store clerk calls you when the item becomes available, the
        function calls the callback function when the event has occurred. And
        just as you can then come to the store to pick up the item, the callback
        function can execute code or perform actions in response to the event.
      </p>
      <p>
        Overall, callback functions in JavaScript allow you to specify a set of
        actions that should be performed after a certain event has occurred, in
        a way that is similar to providing a phone number to be called when an
        item becomes available at a store.
      </p>
      <p>
        A callback function is a function that is passed as an argument to
        another function, and is executed after some kind of event. For example,
        you might have a function that reads a file from the filesystem, and you
        want to specify a callback function to be executed when the file has
        been read. This is a common pattern in JavaScript, and is often used in
        conjunction with higher-order functions.
      </p>
      <p>
        Here is an example of a callback function being passed to the
        `setTimeout` function, which executes a function after a specified
        number of milliseconds:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        In the example above, the `greet` function is the callback function. It
        is passed as an argument to the `setTimeout` function, and is executed
        after 1 second.
      </p>
      <p>
        Here is an example of using an arrow function as a callback function:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        In the example above, the arrow function `(x) =&gt; x * x` is passed as
        a callback function to the `map` method. The `map` method calls the
        callback function for each element in the array, and returns a new array
        with the results.
      </p>
    </>
  );
};
