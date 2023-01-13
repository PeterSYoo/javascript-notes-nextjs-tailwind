import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const UseCallbackMD = () => {
  const c1 = `
  import React, { useState, useCallback } from 'react';

  function Parent() {
    const [value, setValue] = useState(0);
    const handleClick = useCallback(() => setValue(value + 1), [value]);

    return (
      <Child onClick={handleClick} />
    );
  }

  function Child({ onClick }) {
    return (
      <button onClick={onClick}>Click me</button>
    );
  }
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;In React, the useCallback Hook is a function that returns a
        memoized version of a callback function.&quot;
      </p>
      <p>
        Imagine that you are a teacher responsible for preparing lesson plans
        for your students. To create your lesson plans, you must often refer to
        a set of resources, such as textbooks, worksheets, and videos.
      </p>
      <p>
        To make your job easier, you have a set of &quot;callbacks&quot; that
        you can use to access these resources quickly and efficiently. These
        callbacks are like shortcuts that allow you to quickly retrieve the
        resources you need, without having to search through your entire
        collection.
      </p>
      <p>
        In React, the `useCallback` Hook is similar to the teacher&apos;s
        callbacks in that it allows you to create a memoized version of a
        callback function. The `useCallback` Hook is a function that you can use
        to create a version of a callback function that is only re-created when
        one of its dependencies changes. This can be useful for optimizing the
        performance of your React components, especially when the callback
        function is passed as a prop to a child component.
      </p>
      <p>For example, consider the following code written in React:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        In this code, the `useCallback` Hook is used to create a memoized
        version of the `handleClick` callback function. The `useCallback` Hook
        is called with the `handleClick` function and an array of dependencies,
        which in this case includes the `value` state variable.
      </p>
      <p>
        When the `Child` component is rendered, the `handleClick` callback is
        passed as a prop to the `Child` component. When the button is clicked,
        the `handleClick` callback is called, which updates the `value` state
        variable.
      </p>
      <p>
        Overall, the `useCallback` Hook in React is a function that returns a
        memoized version of a callback function. It is a useful tool for
        optimizing the performance of your React components, especially when the
        callback function is passed as a prop to a child component.
      </p>
    </>
  );
};
