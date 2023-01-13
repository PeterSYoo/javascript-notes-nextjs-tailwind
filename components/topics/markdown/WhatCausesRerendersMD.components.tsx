import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const WhatCausesRerendersMD = () => {
  return (
    <>
      <ul className="list-disc ml-5">
        <li>
          Updating the component&apos;s state: When a component&apos;s state is
          updated using the setState function, the component will re-render.
        </li>
        <li>
          Updating the component&apos;s props: If a component receives new props
          from its parent component, it will re-render.
        </li>
        <li>
          The component&apos;s parent component re-renders: If a
          component&apos;s parent component re-renders, the component will also
          re-render.
        </li>
        <li>
          A hook changes: If a component is using a hook that depends on a value
          that changes, the component will re-render.
        </li>
      </ul>
      <p>
        It&apos;s important to note that React aims to minimize unnecessary
        re-renders, and will only re-render a component if it determines that
        the component&apos;s output has actually changed. This means that
        calling setState with the same state as the current state, or passing
        the same props to a component, will not cause it to re-render.
      </p>
    </>
  );
};
