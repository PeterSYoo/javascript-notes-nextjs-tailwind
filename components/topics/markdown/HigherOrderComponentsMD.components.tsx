import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const HigherOrderComponentsMD = () => {
  const c1 = `
  import React from 'react';

  const withExtraProp = (WrappedComponent) => {
    return (props) => {
      return <WrappedComponent {...props} extraProp="Hello, I'm an extra prop!" />
    }
  }

  const MyComponent = (props) => {
    return (
      <div>
        {props.extraProp}
        <p>Hello, I'm the wrapped component!</p>
      </div>
    );
  }

  export default withExtraProp(MyComponent);
  `;
  const c2 = `
  import EnhancedMyComponent from './withExtraProp';

  const App = () => {
    return (
      <div>
        <EnhancedMyComponent />
      </div>
    );
  }
  `;
  const c3 = `
  <div>
    Hello, I'm an extra prop!
    <p>Hello, I'm the wrapped component!</p>
  </div>
  `;

  return (
    <>
      <p>
        Higher-order components (HOCs) are a pattern in React that allow you to
        reuse code, logic, and props manipulation across components. They are
        created by taking a function that returns a component, and calling that
        function with an input component.
      </p>

      <p>
        Here&apos;s a simple example of an HOC that adds a prop to a component:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>

      <p>
        Here, the withExtraProp function takes a WrappedComponent as an input,
        and returns a new component that adds the extraProp prop to the
        WrappedComponent when it&apos;s rendered.
      </p>

      <p>
        You can then use this HOC like any other component in your application:
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>

      <p>This will render the MyComponent with the extraProp prop, like so:</p>

      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c3}
      </SyntaxHighlighter>

      <p>
        HOCs are a powerful pattern that can be used to abstract away repetitive
        logic and props manipulation, making your code more reusable and easier
        to maintain. Do you have any more questions about HOCs or functional
        components in React?
      </p>
    </>
  );
};
