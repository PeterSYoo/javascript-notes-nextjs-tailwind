import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const ImperativeProgrammingMD = () => {
  const c1 = `
  function calculateArea(width, height) {
    let area = width \* height;
    return area;
  }
    
  const rectangleWidth = 5;
  const rectangleHeight = 10;
  const rectangleArea = calculateArea(rectangleWidth, rectangleHeight);
  console.log('The area of the rectangle is ' + rectangleArea);
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;Imperative programming in JavaScript is a programming paradigm
        that involves describing a series of steps to be followed by the program
        in order to achieve a specific result, using statements that change the
        state of the program or perform actions.&quot;
      </p>

      <p>
        Imperative programming in JavaScript can be thought of as a set of
        instructions for completing a task, like a recipe or a to-do list. When
        you follow a recipe, you are given a set of instructions that describe
        how to combine ingredients and prepare them in a specific way to produce
        a finished dish. Similarly, when you make a to-do list, you write down a
        series of tasks that you need to complete in order to accomplish a goal.
      </p>

      <p>
        In the same way, imperative programming in JavaScript involves
        describing a series of steps for the program to follow in order to
        achieve a specific result. You use statements that change the state of
        the program or perform actions, like assigning values to variables,
        performing calculations, or making decisions based on conditions.
      </p>

      <p>
        For example, consider a program that calculates the area of a rectangle
        given its width and height. In imperative programming, you might write
        this program like this:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        In this example, we are using a series of statements to describe a
        series of steps for the program to follow in order to calculate the area
        of a rectangle. We declare a function called `calculateArea` that takes
        two arguments, `width` and `height`, and uses them to calculate the area
        of a rectangle. We then use variables and the `console.log` function to
        print the result to the console.
      </p>

      <p>
        This is a simple example of imperative programming in JavaScript, but it
        illustrates the basic concept of describing a series of steps for the
        program to follow in order to achieve a specific result. You can use
        this pattern to create more complex and dynamic programs that perform a
        wide variety of tasks and operations.
      </p>
    </>
  );
};
