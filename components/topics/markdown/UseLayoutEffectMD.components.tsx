import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const UseLayoutEffectMD = () => {
  const c1 = `
  import React, { useLayoutEffect } from 'react';

  function Example() {
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
      setHeight(ref.current.clientHeight);
    }, []);

    return (
      <div ref={ref}>
        Example component
      </div>
    );
  }
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;In React, the useLayoutEffect Hook is a function that allows you
        to perform side effects that require the DOM to be in its final state
        after a component has updated.&quot;
      </p>
      <p>
        Imagine that you are a carpenter working on a construction project, and
        you are responsible for building and installing a set of custom cabinets
        in a kitchen. To help you keep track of your progress, you have a set of
        &quot;plans&quot; that you use to guide your work, and a set of
        &quot;tools&quot; that you use to cut, shape, and assemble the cabinets.
      </p>
      <p>
        As a carpenter, you have a set of &quot;checks&quot; that you can use to
        verify that the cabinets are being installed correctly. For example, you
        might use a check to verify that the cabinets are level, or a check to
        verify that the cabinets are properly aligned with the walls of the
        kitchen.
      </p>
      <p>
        In React, the `useLayoutEffect` Hook is similar to the carpenter&apos;s
        checks in that it allows you to perform side effects that require the
        DOM to be in its final state after a component has updated. The
        `useLayoutEffect` Hook is a function that you can use inside a custom
        component to perform side effects that require the DOM to be in its
        final state after a component has updated.
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
        In this code, the `useLayoutEffect` Hook is used to perform a side
        effect that requires the DOM to be in its final state after the
        `Example` component has updated. The `useLayoutEffect` Hook is called
        with a function that sets the value of the `height` state variable to
        the client height of the `div` element, and an empty array as the second
        argument, which indicates that the side effect should only be performed
        after the component has updated.
      </p>
      <p>
        When the `Example` component is rendered, the `useLayoutEffect` Hook is
        called, and the function passed as the first argument is executed. In
        this case, the function sets the value of the `height` state variable to
        the client height of the `div` element.
      </p>
      <p>
        Overall, the `useLayoutEffect` Hook in React is a function that allows
        you to perform side effects that require the DOM to be in its final
        state after a component has updated. It is a useful tool for performing
        side effects in a React application that require the DOM to be in its
        final state after a component has updated.
      </p>
    </>
  );
};
