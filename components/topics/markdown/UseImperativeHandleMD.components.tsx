import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const UseImperativeHandleMD = () => {
  const c1 = `
  import React, { useImperativeHandle, forwardRef } from 'react';

  function CustomInput(props, ref) {
    const inputRef = useRef(null);
    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current.focus()
    }));

    return (
      <div>
        <input type="text" ref={inputRef} />
      </div>
    );
  }

  CustomInput = forwardRef(CustomInput);

  function Example() {
    const inputRef = useRef(null);

    return (
      <div>
        <CustomInput ref={inputRef} />
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
        &quot;In React, the useImperativeHandle Hook is a function that allows
        you to customize the instance value of a ref created by a parent
        component.&quot;
      </p>
      <p>
        Imagine that you are a teacher who is responsible for managing a
        classroom of students. To help you stay organized and keep track of your
        students, you have a set of &quot;records&quot; that you use to keep
        track of important information about each student, such as their name,
        age, and performance.
      </p>
      <p>
        As a teacher, you have a set of &quot;tools&quot; that you can use to
        update and manipulate the student records as needed. For example, you
        might use a tool that allows you to update a student&apos;s grade, or a
        tool that allows you to add a note about a student&apos;s behavior.
      </p>
      <p>
        In React, the `useImperativeHandle` Hook is similar to the
        teacher&apos;s tools in that it allows you to customize the instance
        value of a ref created by a parent component. The `useImperativeHandle`
        Hook is a function that you can use inside a custom component to
        customize the instance value of a ref that has been created by a parent
        component.
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
        In this code, the `useImperativeHandle` Hook is used to customize the
        instance value of the `inputRef` ref that has been created by the parent
        `Example` component. The `useImperativeHandle` Hook is called with the
        `inputRef` ref and a function that returns an object with a `focus`
        property that points to the `focus` method of the input element.
      </p>
      <p>
        When the `Example` component is rendered, the `CustomInput` component is
        rendered with the `inputRef` ref passed as a prop. When the button is
        clicked, the `focus` method of the input element is called, using the
        `focus` property of the `inputRef` object.
      </p>
      <p>
        Overall, the `useImperativeHandle` Hook in React is a function that
        allows you to customize the instance value of a ref created by a parent
        component. It is a useful tool for customizing the behavior of refs in a
        React application.
      </p>
    </>
  );
};
