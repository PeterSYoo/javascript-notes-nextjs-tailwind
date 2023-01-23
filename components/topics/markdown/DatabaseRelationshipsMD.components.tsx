import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const DatabaseRelationshipsMD = () => {
  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        A database relationship refers to the association between two or more
        tables in a database, which can be used to define how data is linked and
        retrieved.
      </p>
      <p>
        There are several types of relationships that can exist between tables
        in a database:
      </p>
      <ol className="list-decimal ml-5">
        <li>
          One-to-One: a relationship where one record in a table is associated
          with one and only one record in another table.
        </li>
        <li>
          One-to-Many: a relationship where one record in a table is associated
          with multiple records in another table.
        </li>
        <li>
          Many-to-Many: a relationship where multiple records in a table are
          associated with multiple records in another table. This type of
          relationship is typically resolved by creating a third
          &quot;junction&quot; table.
        </li>
        <li>
          Self-Referencing: a relationship where a table has a foreign key that
          references its own primary key.
        </li>
        <li>
          Hierarchical: a relationship where a parent table has multiple child
          tables, each of which may have their own child tables.
        </li>
        <li>
          Network: a relationship where multiple tables can have multiple
          parents and children.
        </li>
        <li>
          Recursive : a relationship where a table has a foreign key that
          references its own primary key.
        </li>
      </ol>
      <p>
        Note that these are all logical/conceptual relationships, and how
        they&apos;re implemented physically in a database depends on the
        database management system (DBMS) and the data model that you&apos;re
        using.
      </p>
      <p>
        The basic concepts of database relationships are the same for both SQL
        and NoSQL databases. However, the way in which relationships are
        implemented and managed can be quite different between the two types of
        databases.
      </p>
      <p>
        In SQL databases, relationships are typically defined using foreign key
        constraints, which establish a link between a column in one table and a
        primary key column in another table. This allows the database management
        system to enforce the integrity of the data and ensure that changes to
        one table are reflected in the other.
      </p>
      <p>
        In contrast, NoSQL databases do not have the same kind of rigid table
        structure and schema that SQL databases do. As a result, relationships
        in NoSQL databases are often established through denormalization, where
        related data is duplicated across multiple documents or collections.
        This approach allows for more flexibility in how the data is stored and
        queried, but it also means that maintaining consistency and integrity
        across the data can be more challenging.
      </p>
      <p>
        Overall, the way you handle relationships in a SQL and NoSQL databases
        is different but the concepts are similar.
      </p>
    </>
  );
};
