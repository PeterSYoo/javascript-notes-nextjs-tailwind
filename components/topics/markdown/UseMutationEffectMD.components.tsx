import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const UseMutationEffectMD = () => {
  const c1 = `
  import React, { useMutationEffect } from 'react';

  function Example() {
    useMutationEffect(() => {
      console.log('The component has been added to the DOM');
    }, []);

    return (
      <div>
        Example component
      </div>
    );
  }
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;In React, the useMutationEffect Hook is a function that allows you
        to perform side effects in response to a DOM element being added or
        removed from the DOM.&quot;
      </p>
      <p>
        Imagine that you are a doctor working in a hospital, and you are
        responsible for monitoring patients who have undergone surgery. To help
        you keep track of your patients, you have a set of &quot;records&quot;
        that you use to keep track of important information about each patient,
        such as their medical history, treatment plan, and recovery progress.
      </p>
      <p>
        As a doctor, you have a set of &quot;tools&quot; that you can use to
        monitor and update the patient records as needed. For example, you might
        use a tool that allows you to monitor a patient&apos;s vital signs, or a
        tool that allows you to track the progress of a patient&apos;s recovery.
      </p>
      <p>
        In React, the `useMutationEffect` Hook is similar to the doctor&apos;s
        tools in that it allows you to perform side effects in response to a DOM
        element being added or removed from the DOM. The `useMutationEffect`
        Hook is a function that you can use inside a custom component to perform
        side effects in response to changes in the DOM.
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
        In this code, the `useMutationEffect` Hook is used to perform a side
        effect when the `Example` component is added to the DOM. The
        `useMutationEffect` Hook is called with a function that logs a message
        to the console, and an empty array as the second argument, which
        indicates that the side effect should only be performed when the
        component is added to the DOM.
      </p>
      <p>
        When the `Example` component is rendered, the `useMutationEffect` Hook
        is called, and the function passed as the first argument is executed. In
        this case, the function logs the message &apos;The component has been
        added to the DOM&apos; to the console.
      </p>
      <p>
        Overall, the `useMutationEffect` Hook in React is a function that allows
        you to perform side effects in response to a DOM element being added or
        removed from the DOM. It is a useful tool for performing side effects in
        a React application that involve changes to the DOM.
      </p>
    </>
  );
};
