import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const CompilationProcessMD = () => {
  const c1 = `
  function greet(name) {
    const greeting = 'Hello' + name + '!';
    document.querySelector("#greeting").innerHTML = greeting;
  }
    
  greet("Alice");
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;The compilation process in JavaScript involves writing code,
        transpiling it to a version that is compatible with the target web
        browser, bundling it into a single file, and minifying it to make it as
        small and efficient as possible.&quot;
      </p>
      <p>
        Imagine that you are visiting a foreign country where you don&apos;t
        speak the language. You might carry a phrasebook or a translation app to
        help you communicate with the locals. When you want to say something,
        you look up the phrase in your phrasebook or app and translate it into
        the local language. Similarly, when someone speaks to you in the local
        language, you use your phrasebook or app to translate what they are
        saying into a language that you understand.
      </p>
      <p>
        In the same way, the compilation process in JavaScript for the browser
        involves taking source code written in JavaScript and translating it
        into machine code that can be understood and executed by a computer, and
        then displaying the results in a web browser. The JavaScript compiler
        reads the source code, analyzes it, and generates machine code that
        represents the same instructions and operations. The web browser then
        executes the machine code and displays the results to the user.
      </p>
      <p>
        For example, consider the following simple JavaScript program that
        displays a message in a web page:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        When this program is compiled and run in a web browser, the compiler
        translates the source code into machine code that is executed by the
        browser. The browser then displays the message &quot;Hello, Alice!&quot;
        on the web page, by updating the HTML element with the ID
        &quot;greeting&quot;.
      </p>
      <p>
        In this way, the compilation process in JavaScript for the browser
        involves translating source code written in JavaScript into machine code
        that can be understood and executed by a computer, and then displaying
        the results in a web browser. This allows you to write programs in a
        high-level language like JavaScript, and have them run and display the
        results
      </p>
    </>
  );
};
