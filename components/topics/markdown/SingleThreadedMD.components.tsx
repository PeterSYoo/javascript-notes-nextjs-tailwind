import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const SingleThreadedMD = () => {
  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;JavaScript is single threaded, meaning it can only execute one
        task at a time in a sequential order.&quot;
      </p>
      <p>
        Imagine a customer service representative at a front desk. The
        representative can only deal with one customer at a time, just as a
        single threaded JavaScript program can only execute one task at a time.
        The customers (or tasks) are added to a queue, and the representative
        (or JavaScript program) works through them one by one. Just as the
        representative can only focus on one customer at a time, the single
        threaded JavaScript program can only execute one task at a time.
      </p>
      <p>
        JavaScript is a single-threaded programming language, which means that
        it can only execute one task at a time. This is in contrast to
        multi-threaded programming languages, which can execute multiple tasks
        concurrently.
      </p>
      <p>
        In general, a single-threaded program will only use a single CPU core at
        a time, and JavaScript is no exception. However, it&apos;s important to
        note that JavaScript is a high-level language, and it does not execute
        tasks directly on the CPU. Instead, the JavaScript engine interprets and
        executes the JavaScript code. Some JavaScript engines may use multiple
        threads internally to optimize the execution of JavaScript code, but
        from the perspective of the JavaScript programmer, the language is still
        single-threaded.
      </p>
      <p>
        Since JavaScript can only execute one task at a time, it is considered a
        synchronous language. This means that tasks are executed in the order in
        which they are encountered, and the program will block until a task is
        completed before moving on to the next one. The call stack is a data
        structure that is used to keep track of the execution context of a
        program, and in JavaScript, it reflects the single-threaded nature of
        the language by allowing only one task to be at the top of the stack at
        a time.
      </p>
    </>
  );
};
