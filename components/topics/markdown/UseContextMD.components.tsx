import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const UseContextMD = () => {
  const c1 = `
  import React, { useContext } from 'react';

  const ThemeContext = React.createContext('light');

  function Example() {
    const theme = useContext(ThemeContext);
    return (
      <div>
        The current theme is: {theme}
      </div>
    );
  }
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;In React, the useContext Hook is a function that allows you to
        access the value of a Context object inside a functional
        component.&quot;
      </p>
      <p>
        Imagine that you are a member of a sports team, and you have a coach who
        is responsible for leading your team and providing guidance. To help you
        stay organized and focused, the coach has created a &quot;context&quot;
        for your team, which is a set of rules and expectations that you must
        follow.
      </p>
      <p>
        As a member of the team, you must be aware of the team&apos;s context at
        all times, and you must follow the rules and expectations that have been
        set by the coach. To do this, you have a set of &quot;tools&quot; that
        you can use to access the team&apos;s context and stay informed about
        what you need to do.
      </p>
      <p>
        In React, the `useContext` Hook is similar to the team&apos;s tools in
        that it allows you to access the value of a Context object inside a
        functional component. The `useContext` Hook is a function that you can
        use inside a functional component to access the value of a Context
        object, which is an object that is created using the
        `React.createContext` function.
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
        In this code, the `useContext` Hook is used to access the value of the
        `ThemeContext` Context object inside the `Example` functional component.
        The `useContext` Hook is called with the `ThemeContext` object, and it
        returns the current value of the Context object, which in this case is
        the string &apos;light&apos;.
      </p>
      <h2 className="font-semibold">
        There are a few potential downsides to using the useContext hook in
        React:
      </h2>
      <ol className="list-decimal ml-5">
        <li>
          It can make your component tree harder to understand, because the
          context is being passed through many components that may not be
          directly using the context themselves. This can make it more difficult
          to see where the context is being used and modified.
        </li>
        <li>
          If the context is being used heavily in your application, it can make
          it more difficult to refactor your code, because changing the context
          would require making changes in multiple components.
        </li>
        <li>
          It can also make it more difficult to test your components in
          isolation, because they may be relying on the context being passed in
          through the component tree.
        </li>
        <li>
          It&apos;s important to note that the useContext hook is designed to be
          used with simple values or objects, and is not suitable for managing
          state that changes frequently. For managing state in a React
          application, you should use the useReducer hook or lift state up to a
          common ancestor component.
        </li>
      </ol>

      <p>
        Overall, `useContext` is a useful hook in React for accessing context
        values in a component, but it is important to use it correctly to avoid
        performance issues and maintain the predictability and reliability of
        the component&apos;s behavior.
      </p>
      <p>
        Overall, the `useContext` Hook in React is a function that allows you to
        access the value of a Context object inside a functional component. It
        is a useful tool for managing state that needs to be shared across
        multiple components in a React application.
      </p>
    </>
  );
};
