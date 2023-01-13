import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const PrototypesMD = () => {
  const c1 = ``;
  const c2 = ``;
  const c3 = ``;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;In JavaScript, prototypes are objects that are used as templates
        for creating new objects, and they provide a way to share properties and
        behaviors among objects.&quot;
      </p>
      <p>
        Imagine that you are a fashion designer creating a new clothing line.
        You start by creating a prototype garment, which serves as a sample or
        model for the rest of the line. The prototype garment has all of the
        basic features and characteristics that you want to include in the final
        garments, but it may not be fully finished or polished.
      </p>
      <p>
        In the same way, a prototype in JavaScript is a basic version of an
        object that serves as a model for other objects. It has all of the basic
        features and characteristics that you want to include in the final
        objects, but it may not be fully fleshed out or fully functional.
      </p>
      <p>
        Just as a prototype garment serves as a starting point for creating the
        final garments in a clothing line, a prototype in JavaScript serves as a
        starting point for creating other objects. And just as a fashion
        designer can make changes and improvements to the prototype garment as
        needed, you can modify and extend a prototype in JavaScript to create
        the final version of an object.
      </p>
      <p>
        Overall, prototypes in JavaScript allow you to create objects that have
        a shared set of characteristics and behaviors, in a way that is similar
        to a fashion designer creating a prototype garment as a model for a
        clothing line.
      </p>
      <p>
        For example, consider a &quot;Person&quot; prototype that represents
        people with properties like name, age, and gender, and behaviors like
        speaking and walking. You can create a new &quot;Person&quot; object
        like this:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        This creates a new object called &quot;person&quot; that has the
        properties and behaviors specified in the &quot;Person&quot; prototype.
        You can then use this object to represent a specific person, like
        &quot;Alice&quot;, by setting the object&apos;s properties:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>You can also use the object&apos;s behaviors, like this:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c3}
      </SyntaxHighlighter>
      <p>
        In this way, prototypes in JavaScript allow you to create new objects
        that inherit properties and behaviors from a prototype, and to customize
        those objects as needed.
      </p>
    </>
  );
};
