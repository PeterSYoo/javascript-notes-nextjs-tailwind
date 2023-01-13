import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const WhatIsACleanUpFunctionMD = () => {
  const c1 = `
  import React, { useEffect } from 'react';

  function MyComponent(props) {
  useEffect(() => {
    const subscription = someAPI.subscribe();

    // Cleanup function
    return () => {
    subscription.unsubscribe();
    };
  });

  return ,[object Object],;
  }
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;A cleanup function in React is a function that is called before
        the component is re-rendered or unmounted, and is used to perform any
        necessary cleanup, such as cancelling network requests or removing event
        listeners.&quot;
      </p>
      <p>
        Imagine that you are hosting a party in a rented event space. You have
        invited a DJ to play music and have set up a table with snacks and
        drinks for your guests. As the party goes on, your guests consume the
        snacks and drinks and leave behind empty cups and plates. If you do not
        clean up these items, the table will become cluttered and the event
        space will become messy.
      </p>
      <p>
        In the same way, when you use resources in a React application, such as
        network connections or event listeners, you need to release these
        resources when they are no longer needed. Otherwise, they can continue
        to consume memory and cause memory leaks, just like the empty cups and
        plates can clutter the table.
      </p>
      <p>
        To prevent memory leaks, you can use a cleanup function in React to
        release resources when they are no longer needed. This is similar to
        cleaning up the event space after the party by throwing away the trash
        and putting away any decorations. Just like you would tidy up the event
        space before leaving, the cleanup function is used to perform any
        necessary cleanup before the component is no longer needed.
      </p>
      <p>
        Here is an example of how you can use a cleanup function in a React
        component to unsubscribe from an event and prevent a memory leak:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        In this example, the useEffect Hook is called after the component is
        rendered and is used to subscribe to an event using someAPI. The cleanup
        function is returned from the useEffect Hook and is called before the
        component is re-rendered or unmounted. It is used to unsubscribe from
        the event by calling unsubscribe() on the subscription object. This
        releases the resources and prevents them from causing memory leaks, just
        like cleaning up the event space after the party prevents it from
        becoming cluttered and messy.
      </p>
    </>
  );
};
