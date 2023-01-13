import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const SideEffectsMD = () => {
  const c1 = `
  import React, { useState, useEffect } from 'react';

  function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      document.title = 'You clicked ' + count + ' times';
    });

    return (
      <div>
        <p>You clicked {count} times</p>
        <button
          onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;In React, side effects are actions that are performed when a
        component mounts or updates, such as making an HTTP request or setting
        up an event listener.&quot;
      </p>
      <p>
        Imagine that you are a mechanic responsible for maintaining a fleet of
        vehicles. To keep the vehicles in good working order, you perform
        regular maintenance tasks, such as changing the oil, rotating the tires,
        and replacing the brake pads.
      </p>
      <p>
        In this scenario, the maintenance tasks that you perform are &quot;side
        effects.&quot; They are actions that are performed when a vehicle is
        serviced, but are not directly related to the main purpose of the
        vehicle (which is to transport people or goods).
      </p>
      <p>
        In React, side effects are similar to the maintenance tasks that you
        perform as a mechanic. They are actions that are performed when a
        component mounts or updates, but are not directly related to the main
        purpose of the component (which is to render UI). Examples of side
        effects in React include making an HTTP request, setting up an event
        listener, or updating the component&apos;s state.
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
        In this code, the useEffect hook is used to perform a side effect when
        the component mounts or updates. The side effect is setting the document
        title to reflect the number of times the button has been clicked.
      </p>

      <p>
        Overall, side effects in React are actions that are performed when a
        component mounts or updates, but are not directly related to the main
        purpose of the component. Examples of side effects include making an
        HTTP request, setting up an event listener.
      </p>
      <h2 className="font-semibold">
        Are Event Listeners considered side effects because it&apos;s calling a
        browser API?
      </h2>
      <p>
        Yes, event listeners are considered side effects because they involve an
        interaction with an external system (in this case, the browser). When a
        program sets an event listener, it is causing a callback function to be
        registered with the browser, and the callback function will be executed
        by the browser when the specified event occurs.
      </p>
      <p>
        In general, any interaction with an external resource or system can be
        considered a side effect. This can include reading or writing to a
        database, making an HTTP request, interacting with the filesystem, or
        even modifying the DOM. All of these actions have an impact outside of
        the immediate execution context of the program and are therefore
        considered side effects.
      </p>
      <p>
        It is important to manage side effects carefully in order to ensure that
        a program is predictable and easy to test. In some cases, it may be
        necessary to isolate and clearly identify side effects in order to make
        a program more manageable and maintainable.
      </p>
    </>
  );
};
