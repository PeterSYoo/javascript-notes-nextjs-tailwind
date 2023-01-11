import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const UseEffectMD = () => {
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
        &quot;In React, the useState hook is used to add state to functional
        components.&quot;
      </p>
      <p>
        Imagine that you are a doctor responsible for treating patients at a
        hospital. To keep track of the treatment plans for each patient, you use
        a system of medical records. Each medical record contains information
        about the patient&apos;s symptoms, diagnosis, and treatment plan.
      </p>
      <p>
        In this system, the medical records act as &quot;state&quot; in the same
        way that state works in React. The medical records contain information
        that is specific to each patient and can change over time as the
        patient&apos;s condition changes.
      </p>
      <p>
        To manage the medical records, you use a set of tools called
        &quot;useState.&quot; The useState tools allow you to add, update, and
        delete information from the medical records as needed. For example, if a
        patient&apos;s condition changes, you can use the useState tools to
        update the patient&apos;s medical record to reflect the change.
      </p>
      <p>
        In React, the useState hook works in a similar way. It allows you to add
        state to functional components, and provides tools for updating and
        deleting the state as needed.
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
        In this code, the `useState` hook is used to add state to the `Example`
        component. The `count` state variable is used to store the number of
        times the button has been clicked, and the `setCount` function is used
        to update the value of the `count` state variable when the button is
        clicked.
      </p>
      <p>
        Overall, the useState hook in React allows you to add state to
        functional components, and provides tools for updating and deleting the
        state as needed.
      </p>
      <h2 className="font-semibold">
        There are a few downsides to using the useState hook in React:
      </h2>
      <ol className="list-decimal ml-4">
        <li>
          useState can make the code harder to understand. Because useState
          allows you to add state to functional components, it can make the code
          harder to understand if the state is not managed properly. This can be
          especially true if the state is spread across multiple components, or
          if the state is not used consistently throughout the application.
        </li>
        <li>
          useState can lead to unnecessary re-renders. Because the useState hook
          updates the state and triggers a re-render of the component, it can
          lead to unnecessary re-renders if the state is updated unnecessarily.
          This can impact the performance of the application.
        </li>
        <li>
          useState should be used sparingly. In general, it is recommended to
          minimize the amount of state in an application, and to use props to
          pass data down the component tree whenever possible. Overuse of
          useState can make the application more difficult to understand and
          maintain.
        </li>
      </ol>
    </>
  );
};
