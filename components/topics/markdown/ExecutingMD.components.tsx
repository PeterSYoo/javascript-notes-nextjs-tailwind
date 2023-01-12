import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const ExecutingMD = () => {
  const c1 = `
  function greet(name) {
    console.log('Hello' + name + '!');
  }
    
  greet('John');
  `;

  const c2 = `
  Hello, John!
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;Executing JavaScript in a web browser refers to the process of
        interpreting and running the code in order to perform the tasks or
        operations specified by the code.&quot;
      </p>
      <p>
        Imagine that you are a chef at a restaurant, and you have received an
        order for a meal from a customer. To prepare the meal, you need to
        follow a recipe that lists the ingredients and instructions for cooking
        the dish. To execute the recipe, you follow the instructions step by
        step, starting with the first instruction and working your way down the
        list until the meal is complete. This process of following the
        instructions and completing the task is similar to executing JavaScript
        code.
      </p>
      <p>
        In JavaScript, executing code refers to the process of running the code
        and performing the tasks that it specifies. For example, consider the
        following JavaScript code:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        To execute this code, the JavaScript interpreter will start at the top
        of the file and work its way down, performing the tasks that are
        specified by the code. In this case, the code defines a function called
        `greet` that takes a name as an argument and logs a greeting to the
        console. The code then calls the `greet` function, passing it the string
        `&apos;John&apos;` as an argument. When the interpreter reaches this
        line of code, it will execute the `greet` function, which will log the
        following message to the console:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        Overall, executing JavaScript code involves running the code and
        performing the tasks that it specifies. The JavaScript interpreter reads
        the code and follows the instructions, starting at the top of the file
        and working its way down until all tasks have been completed.
      </p>
    </>
  );
};
