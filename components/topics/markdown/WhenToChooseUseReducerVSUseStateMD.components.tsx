import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const WhenToChooseUseReducerVSUseStateMD = () => {
  const c1 = `
  const todoReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          todos: [...state.todos, { text: action.text, completed: false }],
          todoCount: state.todoCount + 1
        };
      case 'TOGGLE_TODO':
        return {
          todos: state.todos.map((t, idx) => idx === action.index ? {...t, completed: !t.completed } : t),
          todoCount: state.todoCount
        };
      default:
      return state;
    }
  }
    
  const initialState = { todos: [], todoCount: 0 };
    
  const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    // ...
  }
  `;
  const c2 = `
  const Counter = () => {
    const [count, setCount] = useState(0);
    // ...
  }
  `;

  return (
    <>
      <p>The useState hook is best used on less complex data.</p>
      <p>
        While it&apos;s possible to use any kind of a data structure when
        working with useState, it&apos;s better to use it with primitive data
        types, such as strings, numbers, or booleans.
      </p>
      <p>
        The useReducer hook is best used on more complex data, specifically,
        arrays or objects.
      </p>
      <p>
        While this rule is simple enough, there are situations where you might
        be working with a simple object and still decide to use the useState
        hook.
      </p>
      <p>
        Such a decision might stem from the simple fact that working with
        useState can sometimes feel easier than thinking about how the state is
        controlled when working with useReducer.
      </p>
      <p>
        It might help conceptualizing this dilemma as a gradual scale, on the
        left side of which, there is the useState hook with primitive data types
        and simple use cases, such as toggling a variable on or off.
      </p>
      <p>
        At the end of this spectrum, there is the useReducer hook used to
        control state of large state-holding objects.
      </p>
      <p>
        There&apos;s no clear-cut point on this spectrum, at which point you
        would decide: &quot;If my state object has three or more properties,
        I&apos;ll use the useReducer hook&quot;.
      </p>
      <p>
        Sometimes such a statement might make sense, and other times it might
        not.
      </p>
      <p>
        What&apos;s important to remember is to keep your code simple to
        understand, collaborate on, contribute to, and build from.
      </p>
      <p>
        One negative characteristic of useState is that it often gets hard to
        maintain as the state gets more complex.
      </p>
      <p>
        On the flip side, a negative characteristic of useReducer is that it
        requires more prep work to begin with. There&apos;s more setup involved.
        However, once this setup is completed, it gets easier to extend the code
        based on new requirements.
      </p>
      <p>
        useReducer is usually a better choice than useState when you have
        complex state logic that involves multiple sub-values or when the next
        state depends on the previous one.
      </p>
      <p>Here&apos;s an example of when you might use useReducer:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        In this example, the state has two values: todos and todoCount.
        useReducer allows you to manage them in a single reducer function,
        rather than using multiple useState calls.
      </p>
      <p>
        On the other hand, if your state is a simple value that doesn&apos;t
        depend on any other state values, you can use useState.
      </p>
      <p>Here&apos;s an example:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <h2 className="font-semibold">
        Here are a few more points to consider when deciding between useReducer
        and useState:
      </h2>
      <ul className="list-decimal ml-5">
        <li>
          useReducer allows you to separate your state logic from your
          component, which can make your code easier to test and reuse.
        </li>
        <li>
          useReducer can be slower than useState, because it requires an extra
          function call on each update. However, the performance difference is
          usually small and not noticeable in most cases.
        </li>
        <li>
          useState is generally easier to use and understand than useReducer,
          especially for simple state changes.
        </li>
      </ul>
      <p>
        Ultimately, the choice between useReducer and useState depends on the
        specific needs of your component. If you&apos;re not sure which one to
        use, you can start with useState and switch to useReducer if you find
        that your state logic is becoming too complex.
      </p>
    </>
  );
};
