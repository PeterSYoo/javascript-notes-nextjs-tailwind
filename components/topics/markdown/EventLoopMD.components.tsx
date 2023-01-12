import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const EventLoopMD = () => {
  const c1 = `
  console.log('Start');

  setTimeout(function() {
    console.log('Timeout 1');
  }, 0);

  console.log('End');
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;In JavaScript, the event loop is a process that helps the program
        to perform asynchronous tasks by continuously checking for and executing
        any pending events or callbacks.&quot;
      </p>
      <p>
        Imagine that you are the host of a party. As the host, it is your job to
        keep track of all of the different activities and events that are
        happening at the party, and to make sure that everything runs smoothly.
      </p>
      <p>
        The event loop in JavaScript can be thought of as similar to the role of
        a party host. Just as the party host keeps track of all of the different
        activities and events that are happening at the party, the event loop
        keeps track of all of the tasks and events that are occurring in a
        JavaScript program.
      </p>
      <p>
        The event loop is responsible for monitoring the program and executing
        tasks and events in the correct order. It continually checks a queue of
        tasks and events that need to be processed, and executes them one by one
        as they become ready.
      </p>
      <p>
        Just as a party host ensures that everything runs smoothly and that all
        of the activities and events are coordinated, the event loop ensures
        that all of the tasks and events in a JavaScript program are executed in
        the correct order and at the appropriate time.
      </p>
      <p>
        Overall, the event loop in JavaScript is a mechanism that helps to
        coordinate and execute tasks and events in a program, in a way that is
        similar to the role of a party host in coordinating and managing
        activities at a party.
      </p>
      <p>
        Web API&apos;s, such as setTimeout, are interfaces that provide access
        to various features of the browser, such as the DOM (Document Object
        Model), the network stack, and the user&apos;s local storage. These
        API&apos;s are implemented by the browser and are made available to
        JavaScript code through the global scope. When a task is added to the
        queue via a Web API, the API will execute the task and return control to
        the event loop.
      </p>
      <p>
        For example, the following code uses the setTimeout function from the
        Web API to schedule a task to be executed after a certain amount of time
        has passed:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        The event loop will allow the `setTimeout` task to be executed
        asynchronously, after the `console.log(&apos;End&apos;)` statement has
        been executed. This allows the browser to remain responsive to the user,
        even when it is executing long-running tasks. It also allows JavaScript
        code to run asynchronously, which can make it easier to write programs
        that perform multiple tasks concurrently.
      </p>
    </>
  );
};
