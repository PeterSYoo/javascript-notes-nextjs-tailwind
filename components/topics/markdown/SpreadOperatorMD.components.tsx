import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const SpreadOperatorMD = () => {
  const c1 = `
  // with arrays
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const arr3 = [...arr1, ...arr2];
  console.log(arr3); // [1, 2, 3, 4, 5, 6]

  // with strings
  const str1 = 'Hello';
  const str2 = 'World';
  const str3 = str1 + str2
  console.log(str3); // 'Hello World'

  // with objects
  const obj1 = { a: 1, b: 2 };
  const obj2 = { c: 3, d: 4 };
  const obj3 = { ...obj1, ...obj2 };
  console.log(obj3); // { a: 1, b: 2, c: 3, d: 4 }
  `;

  return (
    <>
      <p>
        The spread operator (...) allows an iterable such as an array or string
        to be expanded in places where zero or more arguments (for function
        calls) or elements (for array literals) are expected, or an object
        expression to be expanded in places where zero or more key-value pairs
        (for object literals) are expected.
      </p>

      <p>Here are some examples of the spread operator in use:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        In terms of what happens in memory, the spread operator creates a new
        object or array that contains the elements of the expanded iterable. For
        example, in the first example above, arr3 is a new array that is created
        in memory and contains the elements of arr1 and arr2. arr1 and arr2 are
        not modified.
      </p>

      <p>
        Note that the spread operator only works with iterable data types, such
        as arrays and strings. It cannot be used with non-iterable data types,
        such as numbers or booleans.
      </p>
    </>
  );
};
