import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const SynchronousVSAsynchronousMD = () => {
  const c1 = `
  console.log('Start');

  const result = doSynchronousTask();
  console.log(result);

  console.log('End');
  `;
  const c2 = `
  console.log('Start');

  function doAsynchronousTask() {
    return new Promise((resolve, reject) => {
      // Perform some async operation, like making an HTTP request
      makeHttpRequest((err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  doAsynchronousTask()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.error(err);
    });

  console.log('End');
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;In JavaScript, synchronous code is executed in a blocking manner,
        meaning that the program will stop or block the execution of subsequent
        code until the synchronous code has completed, while asynchronous code
        is executed in a non-blocking manner, allowing other code to be executed
        while waiting for the asynchronous code to finish.&quot;
      </p>
      <p>
        Synchronous programming in JavaScript can be thought of as a group of
        friends having a conversation in person. When one person speaks, the
        other friends have to stop what they are doing and listen until the
        speaker is finished. They cannot interrupt the speaker or have a
        separate conversation until the speaker is done speaking.
      </p>
      <p>
        On the other hand, asynchronous programming in JavaScript can be thought
        of as a group of friends having a conversation over a messaging app.
        While one person is typing and sending messages, the other friends can
        continue to do other things and have separate conversations. They are
        not blocked or held up by the process of one person sending a message.
        When a new message arrives, the friends are notified and can stop what
        they are doing to respond.
      </p>
      <p>
        In JavaScript, when we talk about synchronous and asynchronous code, we
        are generally referring to the way that the code is executed in relation
        to the rest of the program. Synchronous code is executed in a
        &quot;blocking&quot; manner, meaning that the program will pause
        execution of any further code until the synchronous code has completed
        execution. Asynchronous code, on the other hand, is executed in a
        non-blocking manner, meaning that the program will not wait for the
        asynchronous code to finish before moving on to the next block of code.
      </p>
      <p>Here is an example of synchronous code in JavaScript:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        In this example, the program will first log &quot;Start&quot; to the
        console. It will then execute the `doSynchronousTask()` function, which
        might take some time to complete. The program will wait for the function
        to finish before logging the result to the console and then logging
        &quot;End&quot; to the console.
      </p>
      <p>Here is an example of asynchronous code in JavaScript:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        In this code example, the `doAsynchronousTask()` function is an async
        function that returns a promise that represents an asynchronous
        operation. The asynchronous operation is triggered by calling the
        `makeHttpRequest()` function, which makes an HTTP request and takes a
        callback function as an argument.
      </p>
      <p>
        The `doAsynchronousTask()` function returns a promise that is resolved
        with the result of the HTTP request if the request is successful, or
        rejected with an error if the request fails. The caller of the function
        can use the `then()` method of the returned promise to specify a
        callback that should be called when the async operation is complete, and
        the `catch()` method to specify a callback that should be called if the
        async operation fails.
      </p>
      <p>The rest of the code is executed in the following order:</p>
      <p>
        - The program logs &quot;Start&quot; to the console. - The
        `doAsynchronousTask()` function is called. This triggers the
        asynchronous HTTP request, but the program does not wait for the request
        to complete before moving on to the next line of code. - The program
        logs &quot;End&quot; to the console. - At some later point in time, the
        HTTP request completes and the callback function passed to the `then()`
        method of the returned promise is called with the result of the request.
        The program logs the result to the console.
      </p>
      <p>
        The `doAsynchronousTask()` function is considered non-blocking because
        the program does not have to wait for the async operation (the HTTP
        request) to complete before moving on to the next line of code.
      </p>
      <p>
        When a program executes a blocking operation, it must wait for the
        operation to complete before moving on to the next line of code. This
        can cause the program to appear &quot;frozen&quot; or unresponsive if
        the blocking operation takes a long time to complete.
      </p>
      <p>
        On the other hand, when a program executes a non-blocking operation, it
        does not have to wait for the operation to complete before moving on to
        the next line of code. This can make the program more responsive and
        efficient, because it can continue to do other work while the
        non-blocking operation is being performed in the background.
      </p>
      <p>
        In the case of the `doAsynchronousTask()` function, the program makes an
        HTTP request and then logs &quot;End&quot; to the console, while the
        HTTP request is being performed in the background. When the HTTP request
        completes, the program logs the result to the console. This allows the
        program to continue executing and responding to user input while the
        HTTP request is being performed.
      </p>
    </>
  );
};
