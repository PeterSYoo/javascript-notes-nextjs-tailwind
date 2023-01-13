import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const WhatHappensInAReactAppMD = () => {
  return (
    <>
      <ul className="list-decimal ml-5">
        <li>
          The app is loaded in the browser, and the root React component is
          rendered to the DOM.
        </li>
        <li>
          When the root component is rendered, it may also render other child
          components, depending on the logic in its render() function.
        </li>
        <li>
          If a child component needs to retrieve data or perform some logic, it
          can do so in its useEffect hook, which is a function that runs when
          the component is rendered or re-rendered.
        </li>
        <li>
          The useEffect hook can make HTTP requests or perform other side
          effects, and then update the component&apos;s state using the setState
          function.
        </li>
        <li>
          Once the component&apos;s state has been updated, the component will
          re-render, and the process repeats from step 2.
        </li>
        <li>
          As the component re-renders, it will update the DOM to reflect the
          changes in its state.
        </li>
      </ul>
      <p>
        This process continues as the user interacts with the app, triggering
        updates to the component state and re-renders as necessary.
      </p>
    </>
  );
};
