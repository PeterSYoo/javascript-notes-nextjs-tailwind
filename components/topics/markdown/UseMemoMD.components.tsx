import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const UseMemoMD = () => {
  const c1 = `
  import React, { useState, useMemo } from 'react';

  function Example() {
    const [value, setValue] = useState(0);
    const memoizedValue = useMemo(() => computeExpensiveValue(value), [value]);

    return (
      <div>
        <p>Value: {memoizedValue}</p>
        <button onClick={() => setValue(value + 1)}>
          Click me
        </button>
      </div>
    );
  }

  function computeExpensiveValue(value) {
    // expensive computation here
  }
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;In React, the useMemo Hook is a function that returns a memoized
        value.&quot;
      </p>
      <p>
        Imagine that you are a student preparing for a test. To study for the
        test, you must review a large amount of material, such as notes,
        textbooks, and practice problems.
      </p>
      <p>
        To help you manage this material, you have a set of &quot;memos&quot;
        that you use to summarize the most important information. These memos
        are like notes that you write to yourself, containing the key points and
        concepts that you need to remember.
      </p>
      <p>
        In React, the useMemo Hook is similar to the student&apos;s memos in
        that it allows you to create a memoized value. The useMemo Hook is a
        function that you can use to create a version of a value that is only
        re-computed when one of its dependencies changes. This can be useful for
        optimizing the performance of your React components, especially when the
        value is expensive to compute.
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
        In this code, the `useMemo` Hook is used to create a memoized version of
        the `computeExpensiveValue` function. The `useMemo` Hook is called with
        the `computeExpensiveValue` function and an array of dependencies, which
        in this case includes the `value` state variable.
      </p>
      <p>
        When the `Example` component is rendered, the `memoizedValue` variable
        is set to the result of calling the `computeExpensiveValue` function
        with the current value of the `value` state variable. If the `value`
        state variable does not change, the `computeExpensiveValue` function is
        not called again, and the `memoizedValue` variable retains its previous
        value.
      </p>
      <p>
        Overall, the `useMemo` Hook in React is a function that returns a
        memoized value. It is a useful tool for optimizing the performance of
        your React components, especially when the value is expensive to
        compute.
      </p>
    </>
  );
};
