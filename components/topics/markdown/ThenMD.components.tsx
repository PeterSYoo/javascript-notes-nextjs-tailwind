import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const ThenMD = () => {
  const c1 = `
  asyncFunction()
    .then((result) => {
      // do something with the result
    })
    .catch((error) => {
      // handle the error
    });
  `;
  const c2 = `
  try {
    const result = await asyncFunction();
    // do something with the result
  } catch (error) {
    // handle the error
  }
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;In JavaScript, the .then() method is used to specify what action
        should be taken when a promise is fulfilled, either by returning a value
        or throwing an error. It is usually called on the returned value of a
        promise&apos;s .resolve() method.&quot;
      </p>
      <p>
        Imagine that you are in a restaurant, waiting to be served your meal.
        You place your order with the server, and then you can sit back and
        relax while you wait for the kitchen to prepare your food.
      </p>
      <p>
        In the same way, the .then() method in JavaScript allows you to specify
        a set of actions or tasks that should be performed after a certain event
        has completed. When you call the .then() method, you are essentially
        &quot;ordering&quot; a set of actions to be performed, and then you can
        let the program continue running while those actions are carried out in
        the background.
      </p>
      <p>
        Just as the server brings your food to you when it is ready, the .then()
        method allows you to specify a set of actions that should be performed
        when a certain event is completed. And just as you can enjoy your meal
        while the server takes care of the rest, you can let the program
        continue running while the .then() method takes care of the specified
        actions.
      </p>
      <p>
        Overall, the .then() method in JavaScript allows you to specify a set of
        actions that should be performed after a certain event has completed, in
        a way that is similar to placing an order at a restaurant and then
        waiting for your food to be served.
      </p>
      <p>
        The .then() method is used to specify what should happen after a promise
        is fulfilled. A promise is an object that represents the eventual
        completion or failure of an asynchronous operation. When you make an
        async function call, the function returns a promise that the task will
        be completed. You can use the .then() method to specify what should
        happen when the promise is fulfilled, or in other words, when the async
        operation is completed successfully.
      </p>
      <p>
        Async/await is a syntax that makes it easier to work with promises and
        async function calls. It allows you to write asynchronous code that
        looks and behaves like synchronous code. When you use async/await, you
        can &quot;wait&quot; for a promise to be fulfilled using the
        &quot;await&quot; keyword, instead of using the .then() method.
      </p>
      <p>
        For example, consider the following code that uses the .then() method to
        handle an async function call:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>Here&apos;s the same code using async/await:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        As you can see, the async/await syntax makes it easier to work with
        async function calls and promises, because it allows you to write
        asynchronous code using familiar control flow statements like
        &quot;try&quot; and &quot;catch&quot;. However, both the .then() method
        and async/await are useful tools for handling asynchronous code in
        JavaScript, and they can be used together as needed.
      </p>
    </>
  );
};
