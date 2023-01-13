import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const UseReducerMD = () => {
  const c1 = `
  import React, { useReducer } from 'react';

  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }

  function Counter() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
      <>
        Count: {state.count}
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      </>
    );
  }
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;In React, the useReducer Hook is a function that allows you to
        manage state in functional components using a reducer function.&quot;
      </p>
      <p>
        Imagine that you are a cashier at a store, responsible for managing the
        store&apos;s cash register. To do your job, you must keep track of the
        store&apos;s financial transactions, including the amount of money that
        has been received and the amount of change that has been given out.
      </p>
      <p>
        To help you manage these transactions, you have a set of tools that you
        use to &quot;reduce&quot; the transactions to their simplest form. For
        example, you might use a calculator to add up the total amount of money
        received, or use a coin counter to calculate the amount of change to
        give out.
      </p>
      <p>
        In React, the `useReducer` Hook is similar to the cashier&apos;s tools
        in that it allows you to manage state in functional components using a
        &quot;reducer&quot; function. The `useReducer` Hook is a function that
        you can use inside a functional component to manage state using a
        reducer function, which is a pure function that takes the current state
        and an action as arguments and returns a new state.
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
        In this code, the `useReducer` Hook is used to manage the state of a
        counter component. The `useReducer` Hook is called with a reducer
        function and an initial state, and it returns an array with the current
        state and a dispatch function. The dispatch function is used to send
        actions to the reducer function, which updates the state based on the
        action type.
      </p>
      <h2 className="font-semibold">
        There are a few potential downsides to using the useReducer hook in
        React:
      </h2>
      <ol className="list-decimal ml-5">
        <li>
          It can make your code harder to understand, because the reducer
          function is typically located in a separate file, and the code that
          dispatches actions and updates the state is not immediately visible in
          the component.
        </li>
        <li>
          If the reducer function is complex, it can make it more difficult to
          determine how the state is being updated.
        </li>
        <li>
          If the state managed by the reducer is used heavily in your
          application, it can make it more difficult to refactor your code,
          because changing the state would require making changes to the reducer
          function and potentially to the action types and action creators as
          well.
        </li>
        <li>
          It can also make it more difficult to test your components in
          isolation, because they may be relying on the state and dispatch
          function being passed in through the component tree.
        </li>
        <li>
          It&apos;s important to note that the useReducer hook is designed to
          manage state that changes frequently, and is not suitable for managing
          simple values or objects. For managing simple values or objects in a
          React application, you should use the useContext hook or pass the
          values down through the component tree as props.
        </li>
      </ol>
      <p>
        Overall, `useReducer` is a useful hook in React for managing complex
        state logic in a component, but it is important to use it correctly to
        avoid performance issues and maintain the predictability and reliability
        of the component&apos;s behavior.
      </p>
      <p>
        Overall, the `useReducer` Hook in React is a function that allows you to
        manage state in functional components using a reducer function. It is a
        powerful tool that can be used to add complex state management to
        functional components, without having to write class-based components.
      </p>
    </>
  );
};
