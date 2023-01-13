import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const UnmountingMD = () => {
  const c1 = `
  import React from 'react';
  import { unmountComponentAtNode } from 'react-dom';

  function App() {
    return <h1>Hello, world!</h1>;
  }

  const root = document.getElementById('root');

  unmountComponentAtNode(root);
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;In React, unmounting is the process of removing a component from
        the DOM.&quot;
      </p>
      <p>
        Imagine that you are a carpenter responsible for building and installing
        cabinets in a kitchen. To build a cabinet, you must first gather the
        materials and tools that you need, such as wood, nails, screws, and a
        hammer. You then use these materials and tools to construct the various
        parts of the cabinet, such as the doors, drawers, and shelves.
      </p>
      <p>
        Once the cabinet is built, you must then &quot;mount&quot; it to the
        wall by attaching it to the studs with screws. However, there may come a
        time when the cabinet needs to be removed, either because it is being
        replaced with a new cabinet or because the kitchen is being remodeled.
      </p>
      <p>
        To remove the cabinet, you must &quot;unmount&quot; it from the wall by
        removing the screws that hold it in place. This involves carefully
        taking the cabinet down from the wall, being careful not to damage the
        cabinet or the wall in the process.
      </p>
      <p>
        In React, unmounting is similar to the process of removing a cabinet
        from the wall. When a component is unmounted, it is removed from the
        DOM, along with any of its child components. This is typically done when
        a component is no longer needed or when the parent component is being
        unmounted.
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
        In this code, the `App` component is unmounted by calling the
        `unmountComponentAtNode` function, which removes the component from the
        DOM element with the `id` of &quot;root.&quot;
      </p>

      <p>
        Overall, unmounting in React is the process of removing a component from
        the DOM. It involves taking the component down from the DOM tree and
        removing it, along with any of its child components, from the page.
      </p>
    </>
  );
};
