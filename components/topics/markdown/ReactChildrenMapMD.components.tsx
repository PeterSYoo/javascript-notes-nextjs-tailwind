import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const ReactChildrenMapMD = () => {
  const c1 = `
  import React from 'react';
  import { Children } from 'react';

  function MyComponent(props) {
    return (
      <div>
        {React.Children.map(props.children, (child) => (
          <div>
            <p>Before</p>
            {child}
            <p>After</p>
          </div>
        ))}
      </div>
    );
  }
  `;
  const c2 = `
  import React from 'react';
  import { Children } from 'react';

  function MyComponent(props) {
    const child = React.Children.only(props.children);
    return <div>{child}</div>;
  }
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;React.Children is a utility module in React that provides tools
        for working with children in a declarative way, including utilities for
        manipulating and iterating over children.&quot;
      </p>
      <p>
        React.Children is a utility module that provides functions for working
        with children in a declarative way, such as mapping children to new
        elements or filtering children by type. It is often used when working
        with higher-order components, which are functions that accept a
        component and return a new component with added functionality. For
        example, a higher-order component might use React.Children to wrap the
        children of a component with additional markup, or to filter out certain
        types of children before rendering them.
      </p>
      <p>
        Here is an example of using React.Children.map to iterate over the
        children of a component and render them with some additional markup:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        In this example, the MyComponent function renders each of its children
        with a {'<p>'} element before and after it.
      </p>
      <p>
        Here is an example of using React.Children.only to ensure that a
        component only has a single child:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        In this example, the MyComponent function will only render its children
        if it has exactly one child. If it has more than one child, or no
        children, it will throw an error.
      </p>
    </>
  );
};
