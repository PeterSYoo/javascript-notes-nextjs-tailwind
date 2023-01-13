import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const ReactMD = () => {
  const c1 = `
  import React from 'react';

  function Button(props) {
    return <button>{props.label}</button>;
  }

  function App() {
    return (
      <div>
        <Button label="Click me" />
        <Button label="Submit" />
      </div>
    );
  }

  ReactDOM.render(<App />, document.getElementById('root'));
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;React is a JavaScript library for building user interfaces.&quot;
      </p>
      <p>
        Imagine that you are a designer who has been hired to create a new
        website for a company. The website will have many pages, each with its
        own design and content. To create the website, you decide to use a
        modular approach, where each page is built using a set of reusable
        components that can be combined in different ways.
      </p>
      <p>
        To create the components, you decide to use React, a JavaScript library
        for building user interfaces. Just like how you are creating a website
        by combining reusable components, React allows developers to build user
        interfaces by combining reusable components. Each component represents a
        piece of the UI, such as a button, a form, or a list.
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
        In this code, the Button component is a reusable component that
        represents a button element in the UI. The App component is the
        top-level component that represents the entire UI, and it is composed of
        multiple instances of the Button component. When the code is executed,
        React will render the UI by creating the necessary HTML elements and
        inserting them into the DOM (the tree-like structure that represents the
        content of a webpage).
      </p>

      <p>
        Overall, React is a JavaScript library that allows developers to build
        user interfaces by combining reusable components. The components
        represent pieces of the UI, and can be combined in different ways to
        create the desired layout and functionality.
      </p>
    </>
  );
};
