import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const EventDrivenArchitectureMD = () => {
  const c1 = `
  const button = document.querySelector("button");

  button.addEventListener("click", function() {
    console.log("Button was clicked!");
  });  
  `;
  const c2 = `
  class EventBus {
    constructor() {
      this.subscribers = {};
    }
    subscribe(event, callback) {
      if (!this.subscribers[event]) {
        this.subscribers[event] = [];
      }
      this.subscribers[event].push(callback);
    }
    publish(event, data) {
      if (!this.subscribers[event]) {
        return;
      }
      this.subscribers[event].forEach(callback => {
        callback(data);
      });
    }
  }
  
  const bus = new EventBus();

  bus.subscribe("user-login", data => {
    console.log('User ' + data.name + ' logged in');
  });
  
  bus.publish("user-login", { name: "John Doe" });  
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        Event-driven architecture is a design pattern in which events, or
        changes in the state of a system, drive the flow of data and trigger
        actions within the system.
      </p>
      <p>
        Event-driven architecture can be thought of as a series of dominoes,
        where each domino represents an event and the falling of one domino
        triggers the next domino, or event, to fall in sequence. This chain
        reaction continues until the final event is reached, resulting in a
        specific outcome or action.
      </p>
      <p>
        Event-driven architecture is a pattern in which events, or changes in
        the state of a system, drive the flow of data and trigger actions within
        the system. These actions can be implemented as functions or methods
        that are executed in response to the event.
      </p>
      <p>
        In JavaScript, for example, you could use the addEventListener method to
        attach an event handler function to an element in the DOM. The event
        handler function would be executed whenever the specified event occurs
        on the element.
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        In this example, the click event is the trigger that causes the event
        handler function, which logs a message to the console, to execute.
      </p>
      <p>
        Another example is using a Pub/Sub pattern, where a publisher sends an
        event, and a subscriber listens for that event and does something when
        it receives it.
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        In this example, a publisher publishes an event with the name
        &quot;user-login&quot; and a subscriber listens for this event, when it
        receives this event it will execute the callback function with the data
        provided by the publisher.
      </p>
      <p>
        These are just a couple of examples of how event-driven architecture can
        be implemented in code. There are many other ways to implement
        event-driven architecture, depending on the specific requirements of a
        project.
      </p>
    </>
  );
};
