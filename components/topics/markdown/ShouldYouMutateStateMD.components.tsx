import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const ShouldYouMutateStateMD = () => {
  const c1 = `
  const [state, setState] = useState({});

  const updateData = newData => {
    setState(prevState => ({ ...prevState, ...newData }));
  };
  `;
  const c2 = `
  const [name, setName] = useState('');

  const updateName = newName => {
    setName(newName);
  };
  `;
  const c3 = `
  setName(currentName => newName);
  `;

  return (
    <>
      <p>
        No, it is generally recommended to use the `setState` function to update
        state in a React component, rather than directly mutating the state
        object. This is because `setState` is designed to manage state updates
        in a way that is predictable and consistent, and it ensures that your
        component re-renders when the state changes.
      </p>
      <p>
        When you call `setState`, React will merge the new state with the old
        state, and re-render the component if necessary. If you try to update
        the state object directly, you may encounter unexpected behavior,
        because the component will not be aware that the state has changed and
        will not re-render.
      </p>
      <p>Here is an example of how you might update state using `setState`:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        In this example, the `updateData` function creates a new object that
        contains the old state and the new data, and passes it to `setState` to
        update the state. This ensures that the component re-renders when the
        state changes, and that the new state is based on the previous state,
        rather than overwriting it.
      </p>
      <p>
        The same principles apply when updating state that is a primitive value,
        such as a string or a number. You should always use the `setState`
        function to update state, rather than trying to mutate the state object
        directly.
      </p>
      <p>
        Here is an example of how you might update a string value in state using
        `setState`:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        In this example, the `updateName` function takes a new name as an
        argument and passes it to `setName` to update the state. This ensures
        that the component re-renders when the state changes, and that the new
        state is based on the previous state, rather than overwriting it.
      </p>
      <p>
        It is important to remember that the `setState` function is
        asynchronous, which means that you cannot rely on the new state being
        available immediately after calling it. If you need to perform an action
        that depends on the updated state, you should use the function form of
        `setState`, which allows you to pass a function that receives the
        current state as an argument, and returns the new state:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c3}
      </SyntaxHighlighter>
    </>
  );
};
