import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const KeysMD = () => {
  const c1 = `
  import React from 'react';

  function List({ items }) {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  }
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;In React, keys are used to uniquely identify elements in a list,
        and help React optimize the rendering of lists by minimizing the amount
        of DOM manipulation required.&quot;
      </p>

      <p>
        Imagine that you are a librarian responsible for organizing a large
        collection of books. To keep track of the books and make it easier to
        find them, you decide to assign each book a unique identifier called a
        &quot;key.&quot; The key is a number or string that is written on the
        spine of the book, and it helps you quickly locate a specific book in
        the collection.
      </p>

      <p>
        In React, keys serve a similar purpose. When rendering a list of items,
        React uses keys to uniquely identify each item in the list. This helps
        React optimize the rendering of the list by minimizing the amount of DOM
        manipulation required.
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
        In this code, the `List` component renders a list of items using the
        `map` function. Each item in the list is represented by a `li` element,
        and the `key` attribute is used to assign a unique identifier to each
        element. The value of the `key` attribute is the `id` property of the
        item, which is assumed to be a unique identifier.
      </p>

      <p>
        Overall, keys are used in React to uniquely identify elements in a list,
        and help React optimize the rendering of lists by minimizing the amount
        of DOM manipulation required.
      </p>
    </>
  );
};
