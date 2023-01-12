import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const FunctionalProgrammingMD = () => {
  const c1 = `
  const numbers = [1, 2, 3, 4, 5];
  const squaredNumbers = map(numbers, (n) => n \* n);
  // squaredNumbers is [1, 4, 9, 16, 25]
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;Functional programming is a programming paradigm that treats
        computation as the evaluation of mathematical functions and promotes
        immutability, first-class functions, and higher-order functions.&quot;
      </p>
      <p>
        Imagine that you are in a kitchen preparing a meal. You have a list of
        ingredients and a set of recipes that you will use to transform those
        ingredients into the final dishes.
      </p>
      <p>
        Functional programming in JavaScript can be thought of as a similar
        process, where you have a set of input data (the ingredients) and a set
        of functions (the recipes) that you use to transform that data into the
        desired output (the finished dishes).
      </p>
      <p>
        Just as a recipe is a set of instructions for preparing a specific dish,
        a function in functional programming is a set of instructions for
        performing a specific task or transformation on a piece of data. And
        just as a recipe can be reused to prepare multiple dishes, a function in
        functional programming can be reused to perform the same task on
        multiple pieces of data.
      </p>
      <p>
        Overall, functional programming involves organizing code into small,
        reusable functions that can be combined to perform complex tasks, in a
        way that is similar to preparing a meal using a set of recipes.
      </p>
      <p>
        For example, consider a &quot;map&quot; function that takes an array of
        values and a function, and applies the function to each value in the
        array to produce a new array of results. Here&apos;s how you might use
        the &quot;map&quot; function:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        In this example, the &quot;map&quot; function is a higher-order function
        that takes an array and a function as input, and applies the function to
        each value in the array to produce a new array of results. This is a
        common pattern in functional programming, where you use higher-order
        functions to abstract common patterns and operations.
      </p>
      <p>
        In this way, functional programming in JavaScript involves creating and
        using functions to perform specific tasks and produce a result, and
        promoting the use of pure functions, first-class functions, and
        higher-order functions to create reusable and composable code.
      </p>
    </>
  );
};
