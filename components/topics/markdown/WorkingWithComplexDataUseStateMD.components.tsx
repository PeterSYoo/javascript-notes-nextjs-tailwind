import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const WorkingWithComplexDataUseStateMD = () => {
  const c1 = `
  const [state, setState] = useState({});

  const addData = newData => {
    setState({ ...state, ...newData });
  };
  `;
  const c2 = `
  const [state, dispatch] = useReducer(reducer, initialState);

  const addData = newData => {
    dispatch({ type: 'ADD_DATA', payload: newData });
  };
  `;

  return (
    <>
      <p>
        If you are trying to work with complex data in a useState hook in a
        React component, there are a few things you can do:
      </p>

      <p>
        Use the spread operator to create a new object or array that contains
        the existing state and the new data you want to add. For example:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        Use the useReducer hook, which is designed to manage complex state
        updates. It works similarly to the reduce function in functional
        programming, where you can specify a reducer function that takes the
        current state and an action as arguments, and returns a new state.
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        Consider breaking your complex state object into multiple, smaller
        pieces of state. This can make it easier to manage and update your
        component&apos;s state.
      </p>
    </>
  );
};
