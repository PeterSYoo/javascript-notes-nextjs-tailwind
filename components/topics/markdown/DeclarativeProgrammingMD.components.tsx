import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const DeclarativeProgrammingMD = () => {
  const c1 = `
  // Declarative programming example

  // Declare a function that filters an array of numbers and returns
  // a new array containing only the even numbers
  function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
  }

  // Use the function to filter an array of numbers
  const numbers = [1, 2, 3, 4, 5, 6];
  const evenNumbers = filterEvenNumbers(numbers);

  console.log(evenNumbers); // Output: [2, 4, 6]
  `;

  const c2 = `
  // Imperative programming example

  // Declare a function that filters an array of numbers and returns
  // a new array containing only the even numbers
  function filterEvenNumbers(numbers) {
    const evenNumbers = [];
    for (const num of numbers) {
      if (num % 2 === 0) {
      evenNumbers.push(num);
      }
    }
  
  return evenNumbers;
  }

  // Use the function to filter an array of numbers
  const numbers = [1, 2, 3, 4, 5, 6];
  const evenNumbers = filterEvenNumbers(numbers);

  console.log(evenNumbers); // Output: [2, 4, 6]
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;Declarative programming in JavaScript involves writing code that
        describes what a program should do, rather than specifying the steps
        that the program should take to achieve a desired result.&quot;
      </p>
      <p>
        Imagine that you are planning a party. Declarative programming can be
        thought of as a list of instructions that you give to your assistant to
        help them prepare for the party.
      </p>
      <p>
        For example, you might say &quot;please buy some snacks, set up tables
        and chairs, and decorate the room with streamers.&quot; These
        instructions are declarative in nature, as they simply declare what
        needs to be done without specifying exactly how it should be done. Your
        assistant can use their own discretion and expertise to determine the
        most efficient and effective way to carry out these tasks.
      </p>
      <p>
        In the same way, declarative programming involves providing a list of
        instructions or declarations to the computer, without specifying the
        exact steps that should be taken to carry them out. The computer can
        then use its own algorithms and processes to determine the most
        efficient way to execute the code.
      </p>
      <p>
        Overall, declarative programming involves focusing on what needs to be
        done rather than how it should be done, allowing the computer to take
        care of the implementation details.
      </p>
      <p>
        One way to think about the difference between declarative and imperative
        programming is to consider the difference between telling someone what
        you want them to do and telling them how to do it. For example, if you
        wanted someone to make a sandwich, you could give them a list of
        declarative instructions, such as &quot;spread peanut butter on one
        slice of bread, spread jelly on the other slice of bread, and then put
        the slices together.&quot; These instructions describe the final result
        that you want (a peanut butter and jelly sandwich), but they don&apos;t
        specify the exact steps that the person should take to achieve that
        result (e.g., &quot;pick up the knife, hold it in your right hand, use a
        sawing motion to spread the peanut butter on the bread&quot;). In this
        way, declarative programming involves describing what you want the
        program to do, rather than specifying how the program should do it.
      </p>
      <p>
        On the other hand, imperative programming involves writing code that
        explicitly specifies the steps that a program should take to achieve a
        desired result. For example, you could give someone a list of imperative
        instructions to make a sandwich, such as &quot;pick up the knife, hold
        it in your right hand, spread peanut butter on one slice of bread, put
        the knife down, pick up the jelly, hold it in your left hand, spread
        jelly on the other slice of bread, put the jelly down, and then put the
        slices together.&quot; These instructions specify exactly how the person
        should make the sandwich, step by step. In this way, imperative
        programming involves specifying how the program should do something,
        rather than just describing what you want it to do.
      </p>
      <p>Here is an example of declarative programming in JavaScript:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        In this example, the `filterEvenNumbers` function uses the `filter`
        method to declaratively specify that we want to create a new array
        containing only the even numbers from the input array. The `filter`
        method handles the imperative details of how to accomplish this task
        (e.g., iterating over the elements of the array, determining which
        elements are even, and adding them to the new array).
      </p>
      <p>
        Here is an example of imperative programming in JavaScript that achieves
        the same result as the declarative example above:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        In this example, the `filterEvenNumbers` function uses a loop and an if
        statement to imperatively specify the steps that the program should take
        to filter the input array and create a new array containing only the
        even numbers. The program specifies exactly how the task should be
        accomplished, rather than just describing the desired result (as in the
        declarative example).
      </p>
    </>
  );
};
