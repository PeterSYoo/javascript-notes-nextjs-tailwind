import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const ReactCloneElementMD = () => {
  const c1 = `
  import React from 'react';
  import { cloneElement } from 'react';

  function MyComponent(props) {
    const newElement = React.cloneElement(props.element, {
      newProp: 'value',
    });
    return <div>{newElement}</div>;
  }
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;React.cloneElement is a function that creates a new element that
        is a copy of an existing element, with additional props merged in.&quot;
      </p>
      <p>
        React.cloneElement is used to clone an existing element and pass it new
        props. It is often used when creating higher-order components, which are
        functions that accept a component and return a new component with added
        functionality. For example, a higher-order component might use
        React.cloneElement to add additional props to a wrapped component before
        rendering it.
      </p>
      <p>
        Here is an example of using React.cloneElement to add a new prop to an
        element:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        In this example, the MyComponent function creates a new element that is
        a copy of the props.element element, with a new prop called newProp
        added. The new element is then rendered inside a {`<div>`}.
      </p>
    </>
  );
};
