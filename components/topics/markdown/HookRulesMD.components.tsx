import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const HookRulesMD = () => {
  return (
    <>
      <ul className="list-disc ml-5">
        <li>
          Only call hooks at the top level. Don&apos;t call hooks inside loops,
          conditions, or nested functions.
        </li>

        <li>
          Only call hooks from React function components or from custom hooks.
          Don&apos;t call hooks from regular JavaScript functions.
        </li>

        <li>
          Don&apos;t call two or more hooks with the same name from the same
          component.
        </li>

        <li>
          Don&apos;t call hooks from inside a normal function. Instead, call
          them from React function components or from custom hooks.
        </li>

        <li>
          Don&apos;t call hooks from a class component. Instead, use React
          function components and hooks to write your component logic.
        </li>

        <li>
          Don&apos;t forget the dependencies array when using the useEffect
          hook. The dependencies array tells React which values to watch for
          changes, and if any of those values change, the effect will be re-run.
          If you forget the dependencies array, your effect will run on every
          render, which can cause performance issues.
        </li>

        <li>
          Don&apos;t forget to return a cleanup function from the useEffect hook
          if you need to. The cleanup function will be run when the component is
          unmounted or the effect is re-run. This is useful for performing tasks
          like canceling network requests or removing event listeners.
        </li>

        <li>
          Use the useCallback hook to memoize functions. The useCallback hook
          returns a memoized version of the callback function that only changes
          if one of the dependencies has changed. This can be helpful for
          improving performance by avoiding unnecessary re-renders.
        </li>

        <li>
          Use the useMemo hook to memoize values. The useMemo hook returns a
          memoized value that only changes if one of the dependencies has
          changed. This can be helpful for improving performance by avoiding
          unnecessary calculations.
        </li>

        <li>
          Use the useDebugValue hook to display a label for custom hooks in the
          React Developer Tools. This can make it easier to understand the
          purpose of the hook when debugging your application.
        </li>
      </ul>
    </>
  );
};
