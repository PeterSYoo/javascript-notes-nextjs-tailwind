import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const NoSQLDatabaseRelationshipsMD = () => {
  const c1 = `
  {
    "_id": "user_1",
    "name": "John",
    "details": {
        "address": "123 Main St",
        "phone": "555-555-5555"
    }
  }
  `;
  const c2 = `
  {
    "_id": "customer_1",
    "name": "Jane",
    "order_ids": ["order_1", "order_2", "order_3"]
  }

  {
    "_id": "order_1",
    "product": "book",
    "customer_id": "customer_1"
  }
  `;
  const c3 = `
  {
    "_id": "student_1",
    "name": "Mike",
    "course_ids": ["course_1", "course_2"]
  }

  {
    "_id": "course_1",
    "name": "Math",
    "student_ids": ["student_1", "student_2"]
  }
  `;

  return (
    <>
      <p>
        Here are some examples of how relationships can be managed in NoSQL
        databases:
      </p>
      <p>1. One-to-One Relationship:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        In this example, the user&apos;s details are embedded within the
        user&apos;s document.
      </p>
      <p>2. One-to-Many Relationship:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        In this example, the customer&apos;s document has an order_ids field
        that contains an array of the ids of the related orders, and each order
        document has a customer_id field that references the id of the
        associated customer.
      </p>
      <p>3. Many-to-Many Relationship:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c3}
      </SyntaxHighlighter>
      <p>
        In this example, each student document contains an array of course_ids
        that references the courses they are enrolled in, and each course
        document contains an array of student_ids that references the students
        that are enrolled in the course.
      </p>
      <p>
        It&apos;s important to note that in NoSQL databases, relationships are
        often established through denormalization, which can make it more
        challenging to maintain consistency and integrity across the data. Also,
        these are just examples, the specific syntax and commands may vary
        depending on the type of NoSQL database you are using.
      </p>
    </>
  );
};
