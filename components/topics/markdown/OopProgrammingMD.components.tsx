import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const OopProgrammingMD = () => {
  const c1 = `
  const person = new Person();
  `;
  const c2 = `
  person.name = "Alice";
  person.age = 30;
  person.gender = "female";
  `;
  const c3 = `
  person.speak("Hello, my name is Alice!");
  person.walk();
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;Object-oriented programming (OOP) in JavaScript is a programming
        paradigm that allows you to model real-world entities as objects with
        properties and behaviors, and to manage and manipulate those objects in
        a structured and organized way.&quot;
      </p>
      <p>
        Imagine that you are an architect designing a building. You start by
        creating a blueprint that outlines the overall structure and layout of
        the building. Then, you break the building down into smaller components,
        such as walls, doors, windows, and so on.
      </p>
      <p>
        Object-oriented programming in JavaScript can be thought of as a similar
        process, where you start by defining the overall structure and behavior
        of an object (the building). Then, you break the object down into
        smaller components or properties (the walls, doors, windows, etc.), each
        of which has its own specific characteristics and behaviors.
      </p>
      <p>
        Just as an architect uses blueprints and building components to create a
        complex structure (a building), you can use objects and object
        properties to create complex programs in JavaScript. And just as an
        architect can reuse building components (e.g. doors, windows) in
        multiple buildings, you can reuse objects and object properties in
        multiple programs in JavaScript.
      </p>
      <p>
        Overall, object-oriented programming involves organizing code into
        small, modular units (objects) that can be combined to create more
        complex programs, in a way that is similar to an architect using
        building components to create a structure.
      </p>
      <p>
        In object-oriented programming, you can create &quot;classes&quot; that
        define the plans or specifications for different types of objects. A
        class is a template or blueprint that specifies the properties and
        behaviors that an object should have. You can then
        &quot;instantiate&quot; objects from a class, which means creating new
        objects based on the class&apos;s plans or specifications.
      </p>
      <p>
        For example, consider a &quot;Person&quot; class that represents people
        with properties like name, age, and gender, and behaviors like speaking
        and walking. You can create a new &quot;Person&quot; object like this:
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
        properties and behaviors specified in the &quot;Person&quot; class. You
        can then use this object to represent a specific person, like
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
        In this way, object-oriented programming in JavaScript allows you to
        create objects that represent real-world entities or concepts, and to
        manage their properties and behaviors in a structured and organized way.
      </p>
    </>
  );
};
