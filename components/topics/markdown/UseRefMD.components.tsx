import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const UseRefMD = () => {
  const c1 = `
  import React, { useRef } from 'react';

  function Example() {
    const inputRef = useRef(null);

    return (
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={() => inputRef.current.focus()}>
          Focus the input
        </button>
      </div>
    );
  }
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;In React, the useRef Hook is a function that returns a mutable
        reference to a DOM element or a value.&quot;
      </p>
      <p>
        Imagine that you are a carpenter working on a construction project, and
        you need to measure the length of a piece of wood. To do this, you use a
        &quot;ref&quot; which is a device that allows you to make precise
        measurements.
      </p>
      <p>
        The ref is a useful tool that you can use to take accurate measurements
        of the wood, and it is also mutable, which means that you can adjust it
        as needed to get the correct measurements.
      </p>
      <p>
        In React, the `useRef` Hook is similar to the carpenter&apos;s ref in
        that it allows you to create a mutable reference to a DOM element or a
        value. The `useRef` Hook is a function that you can use to create a
        mutable reference to a DOM element or a value, and it returns an object
        that has a current property that you can use to access the mutable
        reference.
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
        In this code, the `useRef` Hook is used to create a mutable reference to
        an input element. The `useRef` Hook is called with the initial value
        `null`, and it returns an object with a current property that is set to
        `null`.
      </p>
      <p>
        When the `Example` component is rendered, the `inputRef` variable is
        passed as a ref to the input element. When the button is clicked, the
        `focus` method of the input element is called, using the `current`
        property of the `inputRef` object.
      </p>
      <p>
        Overall, the `useRef` Hook in React is a function that returns a mutable
        reference to a DOM element or a value. It is a useful tool for accessing
        DOM elements or values that need to be updated or manipulated over time
        in a React application.
      </p>
    </>
  );
};
