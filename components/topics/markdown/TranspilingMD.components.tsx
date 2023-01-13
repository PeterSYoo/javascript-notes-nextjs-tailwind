import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const TranspilingMD = () => {
  const c1 = `
  "I would like to order a coffee, please."
  `;
  const c2 = `
  "Me gustaría pedir un café, por favor."
  `;
  const c3 = `
  function greet(name: string) {
    console.log('Hello' + name + '!');
  }
  `;
  const c4 = `
  function greet(name) {
    console.log('Hello' + name + '!');
  }
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;Transpiling in JavaScript refers to the process of converting code
        written in one programming language into another programming language
        that has a similar level of abstraction, with the goal of making the
        code executable in a specific environment (such as a web browser).&quot;
      </p>
      <p>
        Imagine that you are a student who is studying abroad in a country where
        the primary language is different from your own. To communicate with the
        locals, you use a translation app on your phone to translate words and
        phrases from your native language to the local language, and vice versa.
        This process of translation is similar to transpiling in JavaScript.
      </p>
      <p>
        For example, let&apos;s say that your native language is English, and
        you want to translate the following phrase into Spanish:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        Using a translation app, you can enter this phrase in English and have
        it automatically translated into Spanish:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        In the same way, transpiling in JavaScript involves converting code
        written in one programming language (the &quot;source&quot; language)
        into code written in a different programming language (the
        &quot;target&quot; language). Let&apos;s say that you have the following
        code written in the source language of TypeScript:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c3}
      </SyntaxHighlighter>
      <p>
        To convert this code into the target language of JavaScript, you can use
        a transpiler. The transpiler will take the TypeScript code and convert
        it into equivalent JavaScript code:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c4}
      </SyntaxHighlighter>
      <p>
        Overall, transpiling is a process that allows developers to write code
        in a certain programming language, and then convert that code into a
        different programming language that can be understood and executed by
        other systems. This can be useful in situations where the target system
        is unable to run the source code directly.
      </p>
    </>
  );
};
