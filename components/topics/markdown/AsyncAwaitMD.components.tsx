import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const AsyncAwaitMD = () => {
  const c1 = `
  fetch('URL')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  `;
  const c2 = `
  async function fetchData() {
    try {
      const response = await fetch('URL');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
    
  fetchData();
  `;
  const c3 = `
  const fetchData = async () => {
    try {
      const response = await fetch('URL');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
    
  fetchData();
  `;
  const c4 = `
  const data = await fetchData();
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;In JavaScript, async/await is a language feature that enables the
        use of asynchronous, non-blocking code by allowing the programmer to
        write asynchronous code using a synchronous-looking syntax.&quot;
      </p>
      <p>
        Imagine that you are a customer at a store, and you want to purchase an
        item that is currently out of stock. The store clerk tells you that the
        item will be restocked the next day, and offers to hold the item for you
        until it becomes available.
      </p>
      <p>
        In the same way, the async/await keywords in JavaScript allow you to
        &quot;hold&quot; the execution of a program until a certain asynchronous
        event (such as a network request) has completed. When you use the async
        keyword to define a function, it tells the program to &quot;hold&quot;
        the execution of that function until the asynchronous event has
        completed. Then, you can use the await keyword to &quot;wait&quot; for
        the asynchronous event to finish before continuing with the rest of the
        function.
      </p>
      <p>
        Just as the store clerk holds the item for you until it becomes
        available, the async/await keywords allow you to pause the execution of
        a program until an asynchronous event has completed. And just as you can
        come back to the store the next day to pick up the item that you have
        held, you can use the async/await keywords to resume the execution of a
        program once the asynchronous event has finished.
      </p>
      <p>
        Overall, the async/await keywords in JavaScript allow you to pause the
        execution of a program and wait for an asynchronous event to complete,
        in a way that is similar to holding an item at a store until it becomes
        available. This can make it easier to write asynchronous code in a way
        that is more synchronous and easier to read and understand.
      </p>
      <p>
        `async`/`await` is a language feature introduced in ECMAScript 2017 that
        allows you to write asynchronous code in a way that looks synchronous.
      </p>
      <p>
        In JavaScript, when you execute a long-running operation, such as making
        an HTTP request, the browser blocks the JavaScript execution thread
        until the operation finishes. This can cause the UI to freeze, making it
        difficult for the user to interact with the page.
      </p>
      <p>
        To avoid this, you can use asynchronous programming techniques, such as
        Promises, which allow you to run long-running operations in the
        background, without blocking the JavaScript execution thread.
      </p>
      <p>
        `async`/`await` is a higher-level syntax built on top of Promises, that
        makes it easier to write asynchronous code.
      </p>
      <p>Here&apos;s an example of using Promises to make an HTTP request:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>Here&apos;s the same example, using `async`/`await`:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        The `async` keyword is used to define an `async` function, and the await
        keyword is used to wait for a Promise to be resolved.
      </p>
      <p>
        Inside an `async` function, you can use await to pause the execution of
        the function until a Promise is resolved. This makes it easy to write
        asynchronous code that looks synchronous.
      </p>
      <p>
        While the `async` function is paused, the browser can continue executing
        other code, such as handling user input or rendering the UI. This makes
        it possible to write asynchronous code that doesn&apos;t block the
        JavaScript execution thread, improving the performance and
        responsiveness of your application.
      </p>
      <p>Here&apos;s an example using arrow functions:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c3}
      </SyntaxHighlighter>
      <p>
        Using `async`/`await` has several benefits over using Promises directly:
      </p>
      <ol className="list-decimal ml-4">
        <li>
          It makes your code easier to read and write, because it looks more
          like synchronous code.
        </li>
        <li>
          It eliminates the need for chaining `.then()` and `.catch()` calls,
          which can make your code more concise.
        </li>
        <li>
          It allows you to use `try`/`catch` statements to handle errors, which
          is more familiar to developers who come from a background in
          synchronous languages.
        </li>
      </ol>
      <p>
        To use `async`/`await`, you need to mark a function as `async` by
        putting the `async` keyword before the function definition. Inside an
        `async` function, you can use the `await` keyword to pause the execution
        of the function and wait for a Promise to be resolved. To call an
        `async` function, you just need to use the `await` keyword in front of
        the function call:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c4}
      </SyntaxHighlighter>
      <p>
        You can only use the `await` keyword inside an async function. If you
        try to use it outside an async function, you will get a syntax error.
      </p>
    </>
  );
};
