import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const SQLDatabaseRelationshipsMD = () => {
  const c1 = `
  CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(255)
  );

  CREATE TABLE user_details (
    id INT PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
  `;
  const c2 = `
  CREATE TABLE customers (
    id INT PRIMARY KEY,
    name VARCHAR(255)
  );

  CREATE TABLE orders (
    id INT PRIMARY KEY,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
  );
  `;
  const c3 = `
  CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(255)
  );

  CREATE TABLE courses (
    id INT PRIMARY KEY,
    name VARCHAR(255)
  );

  CREATE TABLE student_courses (
    student_id INT,
    course_id INT,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
  );
  `;

  return (
    <>
      <p>
        Here are some examples of how to define and manage relationships in SQL
        databases using SQL commands:
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
        In this example, the user_details table has a foreign key user_id that
        references the primary key id in the users table.
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
        In this example, the orders table has a foreign key customer_id that
        references the primary key id in the customers table. Each customer can
        have multiple orders, but each order is associated with only one
        customer.
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
        In this example, the student_courses table acts as a junction table
        between the students and courses tables, linking many students to many
        courses. The student_courses table has foreign keys student_id and
        course_id that reference the primary keys in the students and courses
        tables, respectively.
      </p>
      <p>
        These are just a few examples of how relationships can be defined and
        managed in SQL databases. The specific syntax and commands may vary
        depending on the type of SQL database you are using.
      </p>
    </>
  );
};
