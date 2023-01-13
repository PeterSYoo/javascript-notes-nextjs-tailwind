import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const SideEffectsCallStackMD = () => {
  const c1 = ``;

  return (
    <>
      <p>
        Yes, that is a good way to think about it. A side effect is any action
        that has an impact outside of the immediate execution context of a
        program. This can include interactions with external systems or
        resources, such as reading or writing to a database, making an HTTP
        request, interacting with the filesystem, or even modifying the DOM.
        These actions are considered side effects because they are not part of
        the program&apos;s call stack and are instead handled by external
        systems or resources.
      </p>

      <p>
        In general, it is often recommended to minimize side effects and to
        clearly identify and isolate them in order to make a program more
        predictable and easier to test. This is especially important in
        functional programming, where the focus is on pure functions that have
        no side effects and can be easily composed and combined to perform more
        complex tasks.
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
    </>
  );
};
