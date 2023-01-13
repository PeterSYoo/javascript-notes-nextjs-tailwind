import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const UpdatingMD = () => {
  const c1 = `
  import React, { useState } from 'react';

  function Example() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;In React, updating is the process of re-rendering a component when
        its state or props have changed.&quot;
      </p>
      <p>
        Imagine that you are a painter responsible for maintaining a large
        mural. The mural is divided into many small sections, each of which is
        painted with a different color.
      </p>
      <p>
        To keep the mural looking fresh and vibrant, you must regularly touch up
        the sections of the mural that have become faded or discolored. This
        involves applying a new coat of paint to the section, using a brush or
        roller to apply the paint evenly.
      </p>
      <p>
        In React, updating is similar to the process of touching up the sections
        of the mural. When a component&apos;s state or props change, the
        component needs to be &quot;updated&quot; to reflect the changes. This
        involves re-rendering the component to apply the changes to the UI.
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
        In this code, the component&apos;s state is represented by the `count`
        variable, which is initialized to 0 using the `useState` hook. The
        component&apos;s UI includes a button that, when clicked, increments the
        `count` variable by 1.
      </p>
      <p>
        When the button is clicked, the component&apos;s state is updated by
        calling the `setCount` function, which sets the new value of the `count`
        variable. This triggers an update of the component, causing it to
        re-render itself with the new value of the `count` variable.
      </p>
      <p>
        Overall, updating in React is the process of re-rendering a component
        when its state or props have changed. This involves applying the changes
        to the component&apos;s UI to reflect the new state or props.
      </p>
    </>
  );
};
