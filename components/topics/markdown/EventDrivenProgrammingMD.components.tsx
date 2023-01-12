import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const EventDrivenProgrammingMD = () => {
  const c1 = `
  // Select the "Submit" button in the form
  const submitButton = document.querySelector("#submit-button");

  // Add an event listener to the button
  submitButton.addEventListener("click", () => {
    // When the button is clicked, execute this callback function
    console.log("Button clicked!");
  });
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;Event-driven programming in JavaScript is a programming paradigm
        in which the flow of the program is determined by events, or changes in
        state, that are triggered by user input, network responses, or other
        asynchronous activities.&quot;
      </p>
      <p>
        Imagine that you are running a carnival game. The game follows an
        event-driven structure, as the various actions and outcomes are
        triggered by specific events (e.g. a player throwing a ball, the ball
        hitting a target).
      </p>
      <p>
        In the same way, event-driven programming in JavaScript involves
        creating a program that responds to specific events or triggers. For
        example, in a JavaScript program that runs in a web browser, events
        might include a user clicking a button, hovering over an element, or
        scrolling the page. The program can be designed to respond to these
        events by executing certain actions or functions.
      </p>
      <p>
        In JavaScript, events are typically handled using event listeners, which
        are functions that are set up to listen for specific events and execute
        code when those events occur. This allows the program to be more dynamic
        and interactive, as it can respond to user input or changes in the
        environment in real-time.
      </p>
      <p>
        Overall, event-driven programming in JavaScript involves creating a
        program that is structured around reacting to specific events or
        triggers, rather than following a predetermined sequence of steps. This
        allows the program to be more responsive and interactive.
      </p>
      <p>
        Here is an example of event-driven programming in JavaScript using the
        DOM (Document Object Model) API:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        In this example, we are selecting the &quot;Submit&quot; button in the
        form using the `querySelector` function. We then use the
        `addEventListener` function to attach an event listener to the button.
        This event listener listens for &quot;click&quot; events, which are
        triggered when the button is clicked by the user. When a
        &quot;click&quot; event occurs, the event listener executes the callback
        function that is provided as an argument. In this case, the callback
        function simply logs a message to the console.
      </p>
      <p>
        This is a simple example of event-driven programming in JavaScript, but
        it illustrates the basic concept of listening for events and executing a
        callback function when an event occurs. You can use this pattern to
        create more complex and dynamic programs that respond to a wide variety
        of events, including user input, network responses, and other
        asynchronous activities.
      </p>
    </>
  );
};
