import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const InheritanceMD = () => {
  const c1 = `
  const person = Object.create(Person.prototype);
  `;
  const c2 = `
  person.name = "Alice";
  person.age = 30;
  person.gender = "female";
  `;
  const c3 = `
  function Student() {}
    Student.prototype = Object.create(Person.prototype);
    Student.prototype.constructor = Student;

    Student.prototype.enroll = function(course) {
      console.log('Enrolling in ' + course);
  }
  `;
  const c4 = `
  const student = Object.create(Student.prototype);
  `;
  const c5 = `
  student.name = "Bob";
  student.age = 20;
  student.gender = "male";
  `;
  const c6 = `
  student.speak("Hello, my name is Bob!");
  student.walk();
  student.enroll("Computer Science");
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;Inheritance in JavaScript is a mechanism that allows an object to
        inherit properties and behaviors from a parent object, or prototype, and
        to override or extend those properties and behaviors as needed.&quot;
      </p>
      <p>
        Imagine that you are a carpenter creating a piece of furniture. You
        start by building the basic frame of the furniture using wood and nails.
        Then, you add various features and details to the frame, such as legs,
        drawers, and handles.
      </p>
      <p>
        In the same way, inheritance in JavaScript allows you to create a basic
        object (the frame of the furniture) and then add additional features and
        details to it (the legs, drawers, handles, etc.). You can then use this
        object as a starting point for creating other objects that have similar
        characteristics and behaviors.
      </p>
      <p>
        Just as a carpenter can create multiple pieces of furniture using the
        same basic frame, you can use inheritance in JavaScript to create
        multiple objects that share a common set of characteristics and
        behaviors. And just as a carpenter can make changes and improvements to
        the basic frame as needed, you can modify and extend the base object in
        an inheritance chain to create the final version of an object.
      </p>
      <p>
        Overall, inheritance in JavaScript allows you to create objects that are
        based on other objects, in a way that is similar to a carpenter creating
        a piece of furniture by building upon a basic frame.
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
      <p>
        Now, suppose you want to create a new type of object called
        &quot;Student&quot; that represents students at a school. You can use
        the &quot;Person&quot; prototype as the basis for the
        &quot;Student&quot; prototype, and add any additional properties or
        behaviors that are specific to students. For example:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c3}
      </SyntaxHighlighter>
      <p>
        This creates a new &quot;Student&quot; prototype that has all of the
        properties and behaviors of the &quot;Person&quot; prototype, as well as
        an additional &quot;enroll&quot; behavior that allows students to enroll
        in courses. You can then create a new &quot;Student&quot; object like
        this:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c4}
      </SyntaxHighlighter>
      <p>
        This creates a new object called &quot;student&quot; that has all of the
        properties and behaviors of the &quot;Person&quot; prototype, as well as
        the additional &quot;enroll&quot; behavior of the &quot;Student&quot;
        prototype. You can then use this object to represent a specific student,
        like &quot;Bob&quot;, by setting the object&apos;s properties:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c5}
      </SyntaxHighlighter>
      <p>You can also use the object&apos;s behaviors, like this:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c6}
      </SyntaxHighlighter>
      <p>
        In this way, the &quot;Student&quot; object has inherited properties and
        behaviors from the &quot;Person&quot; prototype, just like a child
        inherits characteristics from their parents. The &quot;Student&quot;
        object can also override or extend the inherited properties and
        behaviors as needed, just like a child may develop their own unique
        characteristics or traits that are different from their parents.
      </p>

      <p>
        In this way, inheritance in JavaScript allows you to create a hierarchy
        of objects, where objects at lower levels inherit properties and
        behaviors from objects at higher levels, and you can override or extend
        those properties and behaviors as needed. This allows you to reuse code
        and avoid duplicating functionality, and to create relationships between
        objects that reflect real-world relationships.
      </p>
    </>
  );
};
