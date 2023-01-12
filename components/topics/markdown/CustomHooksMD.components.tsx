import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const CustomHooksMD = () => {
  const c1 = `
  import { useState } from 'react';

  function useCounter(initialCount) {
    const [count, setCount] = useState(initialCount);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return [count, increment, decrement];
  }

  function Counter() {
    const [count, increment, decrement] = useCounter(0);
    return (
      <div>
        <button onClick={decrement}>-</button>
        {count}
        <button onClick={increment}>+</button>
      </div>
    );
  }
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;In React, custom Hooks are functions that allow you to extract and
        reuse logic that is related to state and side effects in a reusable
        way.&quot;
      </p>
      <p>
        Imagine that you are a chef working in a kitchen, and you are
        responsible for preparing a variety of dishes for your customers. To
        help you keep track of your recipes, you have a set of
        &quot;cookbooks&quot; that you use to guide your work, and a set of
        &quot;tools&quot; that you use to cut, chop, and cook the ingredients.
      </p>
      <p>
        As a chef, you have a set of &quot;techniques&quot; that you use to
        prepare the dishes. For example, you might have a technique for
        preparing a sauce, or a technique for frying an egg. These techniques
        are like &quot;recipes&quot; that you use to guide your work in the
        kitchen.
      </p>
      <p>
        In React, custom Hooks are similar to the chef&apos;s techniques in that
        they allow you to extract and reuse logic that is related to state and
        side effects in a reusable way. Custom Hooks are functions that you can
        define and use inside a custom component to extract and reuse logic that
        is related to state and side effects.
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
        In this code, the `useCounter` custom Hook is defined as a function that
        returns an array containing the current count, an `increment` function,
        and a `decrement` function. The `useCounter` custom Hook uses the
        useState Hook to manage the count state, and provides functions for
        incrementing and decrementing the count.
      </p>
      <p>
        The `Counter` component uses the `useCounter` custom Hook to manage the
        count state and provide functions for incrementing and decrementing the
        count. The `Counter` component uses the `useCounter` custom Hook to
        extract and reuse logic related to the count state and
        increment/decrement functions.
      </p>
      <p>
        Overall, custom Hooks in React are functions that allow you to extract
        and reuse logic that is related to state and side effects in a reusable
        way. They are a powerful tool for managing and organizing logic in a
        React application.
      </p>
    </>
  );
};
