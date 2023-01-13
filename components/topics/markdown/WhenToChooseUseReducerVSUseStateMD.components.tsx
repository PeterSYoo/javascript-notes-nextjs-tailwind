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
      <p className="italic font-serif text-[#2b2b2b]"></p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
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
