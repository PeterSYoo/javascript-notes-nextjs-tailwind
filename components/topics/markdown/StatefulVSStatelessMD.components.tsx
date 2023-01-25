import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const StatefulVSStatelessMD = () => {
  const c1 = `
  let counter = {
    count: 0,
    increment: function() {
      this.count++;
    },
    decrement: function() {
      this.count--;
    }
  };
  
  counter.increment();
  console.log(counter.count); // 1
  counter.increment();
  console.log(counter.count); // 2  
  `;
  const c2 = `
  function add(a, b) {
    return a + b;
  }

  console.log(add(1, 2)); // 3
  console.log(add(3, 4)); // 7  
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        Stateful refers to when a program or function maintains a current state
        or memory of previous actions, while stateless refers to when a program
        or function does not maintain any memory or state and processes each
        request independently.
      </p>
      <p>
        A stateful program can be compared to a person with a memory, who can
        remember past events and use them to make decisions in the present. A
        stateless program can be compared to a person without a memory, who
        cannot remember past events and must make decisions based solely on the
        current situation.
      </p>
      <p>
        In programming, a stateful system is one in which the system&apos;s
        state is affected by previous interactions or events. This means that
        the system maintains some kind of memory of past events or interactions,
        and this memory can be used to affect the current or future behavior of
        the system.
      </p>
      <p>
        A stateless system, on the other hand, does not maintain any memory of
        past events or interactions, and the current behavior of the system is
        solely determined by the current input.
      </p>
      <p>Here is an example of a stateful object in JavaScript:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        In the above example, the counter object maintains a count, and the
        increment and decrement functions change the count based on the previous
        state.
      </p>
      <p>Here is an example of a stateless function in JavaScript:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        In this example, the add function takes two arguments and returns their
        sum, without maintaining any memory of past calls.
      </p>
      <p>
        Note that it is also possible to have a stateless object and stateful
        function, depending on the implementation.
      </p>
    </>
  );
};
