import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const PromisesMD = () => {
  const c1 = `
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve('I resolved!');
    }, 1000);
  });
  `;
  const c2 = `
  myPromise.then(
    (resolvedValue) => {
      console.log(resolvedValue);
    },
    (rejectionReason) => {
      console.log(rejectionReason);
    }
  );
  `;
  const c3 = `
  function getData() {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', '/my-data');
      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(xhr.response);
        } else {
          reject(new Error('Request failed with status code: ' + xhr.status));
        }
      };

      xhr.onerror = () => {
        reject(new Error('Network error'));
      };

      xhr.send();
    });
  }
  `;
  const c4 = `
  getData()
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;In JavaScript, a promise is an object that represents the eventual
        completion or failure of an asynchronous operation, and it allows the
        associated asynchronous code to be handled in a synchronous-looking
        way.&quot;
      </p>
      <p>
        Imagine you&apos;re at a party and you&apos;ve just been asked to make a
        speech. You agree to do it, but you&apos;re not quite ready yet, so you
        tell the person who asked you that you&apos;ll let them know when
        you&apos;re ready. In this situation, the person who asked you to give
        the speech is like the JavaScript runtime, and you are like a function
        that returns a promise. When you tell the person that you&apos;ll let
        them know when you&apos;re ready, you&apos;re returning a pending
        promise, just like a function returns a pending promise when it is
        called.
      </p>
      <p>
        Now, let&apos;s say that you need to gather some information from a few
        friends before you can give your speech. You ask your friends for the
        information, and then you tell the person who asked you to give the
        speech that you&apos;ll let them know when you have everything you need.
        In this situation, your friends are like the Web API, and the
        information you&apos;re gathering from them is like a value that is
        returned by a promise.
      </p>
      <p>
        Once you have everything you need, you let the person who asked you to
        give the speech know that you&apos;re ready. They then add you to the
        task queue, just like the JavaScript runtime adds a callback function to
        the task queue when a promise is resolved. The event loop then checks
        the task queue for any pending tasks, and when it finds you (the
        callback function), it moves you to the call stack and you give your
        speech.
      </p>
      <p>
        In JavaScript, a Promise is an object that represents the eventual
        completion or failure of an asynchronous operation. The Promise
        constructor takes a function called an &quot;executor function&quot; as
        an argument. The executor function has two arguments, resolve and
        reject. When the async operation is complete, the executor should call
        the resolve function to resolve the promise. If the async operation
        fails, it should call the reject function instead.
      </p>
      <p>Here&apos;s an example of a Promise that wraps a timer function:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        Once a Promise is resolved or rejected, it can&apos;t be resolved or
        rejected again. This is known as the &quot;immutable&quot; property of
        Promises.
      </p>

      <p>
        A Promise can be consumed by calling its then method, which takes two
        arguments: a callback function to be executed when the Promise is
        resolved, and a callback function to be executed when the Promise is
        rejected.
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        In relation to the event loop, Promises allow async code to be executed
        in a synchronous-like manner. When an async operation is initiated, the
        event loop continues to run, allowing other code to be executed in the
        meantime. When the Promise is resolved or rejected, the event loop can
        process the appropriate callback function, which will be added to the
        call stack. This helps to avoid the use of callback hell and makes async
        code easier to read and debug.
      </p>

      <p>
        A real-world example of a Promise being rejected might be an HTTP
        request that fails due to a network error or a server error. For
        example, suppose you have a function that makes an HTTP GET request to a
        server to retrieve some data. You could use a Promise to handle the
        asynchronous nature of the request, and reject the Promise if the
        request fails:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c3}
      </SyntaxHighlighter>
      <p>
        You could then consume the Promise by calling its then method and
        providing a rejection callback function to handle the error:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c4}
      </SyntaxHighlighter>
    </>
  );
};
