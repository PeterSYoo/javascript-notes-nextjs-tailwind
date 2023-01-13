import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const SetStateWithNewObjectMD = () => {
  const c1 = `
  import React, { useState } from 'react';

  const MyFunctionalComponent = () => {
    const [state, setState] = useState({
      name: '',
      age: 0
    });

    const handleChange = (event) => {
      setState({
        ...state,
        [event.target.name]: event.target.value
      });
    }

    return (
      <div>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="age" placeholder="Age" onChange={handleChange} />
      </div>
    );
  }
  `;

  return (
    <>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        In this example, the input fields have the `name` attribute set to
        &quot;name&quot; and &quot;age&quot;, respectively. The `handleChange`
        function is called when the user types in either input field, and it
        uses the `event.target.name` and `event.target.value` properties to
        update the state with the new values.
      </p>
    </>
  );
};
