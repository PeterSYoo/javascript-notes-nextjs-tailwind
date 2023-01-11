import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const BlockingVSNonBlockingMD = () => {
  const c1 = `
  function blockingFunction() {
    // This function takes a long time to execute, so it will block the execution of other code
    for (let i = 0; i < 1000000000; i++) {
      // do something
    }
  }
    
  console.log("Before calling blocking function");
  blockingFunction(); // This function call will block the execution of other code until it finishes
  console.log("After calling blocking function");
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;Blocking refers to code that stops or blocks the execution of
        subsequent code, while non-blocking code allows other code to be
        executed while waiting for the non-blocking code to finish.&quot;
      </p>
      <p>
        Imagine that you are a customer at a restaurant, and you have placed an
        order for food. Blocking operations in JavaScript can be thought of as
        similar to waiting for your food to be prepared and served in a linear,
        step-by-step manner. You might start by ordering your food, then wait
        for the chef to prepare it, then wait for the server to bring it to your
        table, and so on. Each step must be completed before you can move on to
        the next step.
      </p>
      <p>
        On the other hand, non-blocking operations in JavaScript can be thought
        of as similar to ordering food from a food delivery service. In this
        case, you are free to do other things while you wait for your food to be
        prepared and delivered. You are not &quot;blocked&quot; from doing other
        things while you wait.
      </p>
      <p>
        In the same way, blocking operations in JavaScript involve executing
        code in a way that stops or &quot;blocks&quot; the program from
        continuing until the operation has completed. Non-blocking operations,
        on the other hand, involve executing code in a way that allows the
        program to continue running while the operation is performed in the
        background.
      </p>
      <p>
        Overall, the difference between blocking and non-blocking operations in
        JavaScript is the way in which the program handles waiting for certain
        tasks to complete. Blocking operations stop or &quot;block&quot; the
        program from continuing until the operation has completed, while
        non-blocking operations allow the program to continue running while the
        operation is performed in the background.
      </p>
      <p>
        One of the key aspects of JavaScript that affects how blocking and
        non-blocking code behaves is the fact that it is a single-threaded
        language. This means that JavaScript can only execute one task at a
        time, and all tasks are executed in the order that they are received.
        This can be contrasted with multi-threaded languages, which are able to
        execute multiple tasks concurrently by dividing the tasks among
        different threads.
      </p>
      <p>
        In a single-threaded language like JavaScript, blocking code can have a
        significant impact on the performance of a program, as it can cause
        other tasks to be delayed or &quot;stuck&quot; until the blocking code
        has finished running. On the other hand, non-blocking code can allow a
        program to make better use of available resources and can improve its
        overall performance.
      </p>
      <p></p>
      Here is an example of blocking code:
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
