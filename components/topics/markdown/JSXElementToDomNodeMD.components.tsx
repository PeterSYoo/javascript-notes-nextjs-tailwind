import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const JSXElementToDomNodeMD = () => {
  const c1 = `
  <div className="my-div">
    <p>Hello, world!</p>
  </div>
  `;
  const c2 = `
  React.createElement("div", { className: "my-div" },
  React.createElement("p", null, "Hello, world!")
  );
  `;

  return (
    <>
      <p>
        Here is a step-by-step description of what happens when a JSX element is
        rendered to a DOM node in a React application:
      </p>

      <p>
        The JSX compiler transforms the JSX element into a call to React&apos;s
        createElement() function. For example, the JSX element:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>might be compiled into something like this:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <ol className="list-decimal ml-5">
        <li>
          The createElement() function creates a virtual DOM element, which is a
          lightweight in-memory representation of the actual DOM element.
        </li>
        <li>
          React compares the virtual DOM element to the previous version of the
          element (if any), and determines the minimal set of changes that need
          to be made to the actual DOM to bring it up to date.
        </li>
        <li>
          React updates the actual DOM with the changes that were determined in
          the previous step.
        </li>
        <li>
          The DOM element is now updated and reflects the changes made to the
          virtual DOM element.
        </li>
      </ol>
    </>
  );
};
