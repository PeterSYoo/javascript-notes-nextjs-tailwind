import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const MountingMD = () => {
  const c1 = `
  import React from 'react';
  import { render } from 'react-dom';

  function App() {
    return <h1>Hello, world!</h1>;
  }

  render(<App />, document.getElementById('root'));
  `;
  const c2 = `
  import React from 'react';
  import { render } from 'react-dom';

  function App() {
    return <h1>Hello, world!</h1>;
  }

  render(<App />, document.getElementById('root'));
  `;
  const c3 = `
  import React from 'react';
  import { render } from 'react-dom';

  class App extends React.Component {
    render() {
      return <h1>Hello, world!</h1>;
    }
  }

  render(<App />, document.getElementById('root'));
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;In React, mounting is the process of creating a component and
        rendering it to the DOM.&quot;
      </p>
      <p>
        Imagine that you are a builder responsible for constructing a house. To
        build the house, you must first gather the materials and tools that you
        need, such as bricks, wood, nails, and a hammer. You then use these
        materials and tools to create the various parts of the house, such as
        the walls, roof, and doors.
      </p>
      <p>
        Once the various parts of the house are constructed, you must then
        &quot;mount&quot; them to the foundation of the house. This involves
        attaching the walls to the foundation, placing the roof on top of the
        walls, and installing the doors in the appropriate openings.
      </p>
      <p>
        In React, mounting is similar to the process of constructing and
        mounting a house. To create a component, you must first gather the
        materials and tools that you need (such as JSX, CSS, and JavaScript).
        You then use these materials and tools to create the various parts of
        the component, such as the UI and logic.
      </p>
      <p>
        Once the component is created, it must then be &quot;mounted&quot; to
        the DOM. This involves creating a DOM element for the component,
        rendering the component&apos;s UI to the DOM element, and attaching the
        DOM element to the appropriate location in the page.
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
        In this code, the `App` functional component mounts when it is called
        for the first time and its rendered output is added to the DOM. The
        `render` function is used to mount the component to the DOM element with
        the `id` of &quot;root,&quot; which is located in the HTML page.
      </p>
      <p>
        On the other hand, if the `App` component was a class-based component,
        it would mount when an instance of the `App` class is created and its
        `render` method is called for the first time.
      </p>
      <p>For example:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        In this code, the `App` class-based component mounts when an instance of
        the `App` class is created and its `render` method is called for the
        first time. The `render` function is used to mount the component to the
        DOM element with the `id` of &quot;root,&quot; which is located in the
        HTML page.
      </p>
      <p>
        Overall, a component mounts in React when it is created and rendered to
        the DOM for the first time. This can happen when a functional component
        is called for the first time, or when an instance of a class-based
        component is created and its `render` method is called for the first
        time.
      </p>
    </>
  );
};
