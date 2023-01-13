import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const JSXMD = () => {
  const c1 = `
  import React from 'react';

  function Hello(props) {
    return (
      <div>
        <h1>Hello, {props.name}!</h1>
        <p>Welcome to my website.</p>
      </div>
    );
  }

  ReactDOM.render(
    <Hello name="Alice" />,
    document.getElementById('root')
  );
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;JSX is a syntax extension for JavaScript that allows you to write
        HTML-like code in your JavaScript files, which is then transformed into
        regular JavaScript code by a transpiler, such as Babel, before being run
        in the browser.&quot;
      </p>

      <p>
        Imagine that you are a writer working on a novel, and you are
        responsible for creating the characters, plot, and dialogue for your
        story. To help you organize your work, you have a set of
        &quot;notebooks&quot; that you use to jot down ideas, and a set of
        &quot;tools&quot; that you use to write, revise, and edit your work.
      </p>

      <p>
        As a writer, you have a set of &quot;techniques&quot; that you use to
        create the characters, plot, and dialogue for your story. For example,
        you might have a technique for developing a character&apos;s backstory,
        or a technique for crafting a compelling dialogue. These techniques are
        like &quot;recipes&quot; that you use to guide your work as a writer.
      </p>

      <p>
        In React, JSX is similar to the writer&apos;s techniques in that it
        allows you to create and organize the elements, components, and layout
        of your user interface in a reusable way. JSX is a syntax extension for
        JavaScript that allows you to write HTML-like code in your JavaScript
        files, which is then transformed into regular JavaScript code by a
        transpiler, such as Babel, before being run in the browser.
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
        In this code, the `Hello` component is defined using JSX, which allows
        you to write HTML-like code in your JavaScript file. The `Hello`
        component returns a `div` element containing a `h1` element and a `p`
        element. The `props` object is passed to the `Hello` component as an
        argument, and is used to interpolate the `name` property into the `h1`
        element.
      </p>

      <p>
        The `ReactDOM.render` function is used to render the `Hello` component
        in the DOM, and is called with the `Hello` component and the root
        element as arguments. When the `Hello` component is rendered, the JSX
        code is transformed into regular JavaScript code by a transpiler, such
        as Babel, and is run in the browser.
      </p>

      <p>
        Overall, JSX in React is a syntax extension for JavaScript that allows
        you to write HTML-like code in your JavaScript files, which is then
        transformed into regular JavaScript code by a transpiler, such as Babel,
        before being run in the browser. It is a useful tool for creating and
        organizing the elements, components, and layout of your user interface
        in a reusable way.
      </p>
    </>
  );
};
