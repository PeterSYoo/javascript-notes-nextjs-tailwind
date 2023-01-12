import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const EventsMD = () => {
  const c1 = ``;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;In JavaScript, events are occurrences that happen in the browser
        or in the DOM (Document Object Model) that can be detected by the
        program, and can be used to trigger functions or callbacks to respond to
        those events.&quot;
      </p>
      <p>
        In JavaScript, events can be thought of as signals or notifications that
        are sent by the browser or the DOM (Document Object Model) to alert the
        program of something that has happened. Events can be triggered by a
        wide variety of activities, including user input (like clicking a button
        or typing on the keyboard), network responses (like loading a webpage or
        receiving data from a server), and other asynchronous activities (like
        resizing the window or scrolling the page).
      </p>
      <p>
        For example, consider a webpage that displays a form for users to fill
        out. When the user clicks the &quot;Submit&quot; button, the program
        might listen for a &quot;submit&quot; event and execute a callback
        function that processes the form data. This callback function might
        perform tasks like validating the form data, sending the data to a
        server, or displaying an error message.
      </p>
      <p>
        In this way, events in JavaScript allow you to create programs that are
        dynamic and responsive, and that can interact with the user or other
        systems in a meaningful way. You can use events to detect changes in the
        state of the program or the environment, and to trigger functions or
        callbacks to respond to those changes. This allows you to create
        programs that are reactive and adaptable, and that can respond to a wide
        variety of activities and conditions.
      </p>
    </>
  );
};
