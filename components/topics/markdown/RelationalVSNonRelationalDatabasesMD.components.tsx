import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const RelationalVSNonRelationalDatabasesMD = () => {
  return (
    <>
      <p>
        A relational database can be thought of as a collection of tables in a
        spreadsheet, where each table has a unique name and a set of rows and
        columns. The rows in each table represent individual records, and the
        columns represent the fields or attributes of those records. The tables
        can be related to one another through the use of keys, which connect
        related data across tables.
      </p>
      <p>
        A non-relational database, on the other hand, can be thought of as a
        collection of loose documents, like a file cabinet, where each document
        may have a different structure and does not have a fixed schema. Each
        document represents an individual record, and the fields within each
        document may vary from document to document. There is no clear way to
        connect related data across documents.
      </p>
      <p>
        Relational databases have several benefits over non-relational
        databases:
      </p>
      <ol className="list-decimal ml-5">
        <li>
          Structure: Relational databases have a well-defined structure, with
          tables and columns, which makes it easy to organize and access data.
        </li>
        <li>
          Data Integrity: Relational databases have built-in mechanisms to
          maintain data integrity, such as primary keys, foreign keys, and
          constraints, which help to ensure that data is accurate and
          consistent.
        </li>
        <li>
          Query capabilities: Relational databases have a powerful query
          language, SQL, that allows for complex and flexible data retrieval.
        </li>
        <li>
          Scalability: Relational databases can handle large amounts of data and
          can be scaled horizontally by adding more machines to a database
          cluster.
        </li>
        <li>
          ACID Compliance: Most relational databases are ACID compliant, which
          means they provide Atomicity, Consistency, Isolation, Durability
          guarantees for transactions
        </li>
      </ol>
      <p>
        Non-relational databases have some benefits over relational databases:
      </p>
      <ol className="list-decimal ml-5">
        <li>
          Flexibility: Non-relational databases do not have a fixed schema,
          which allows for more flexible data structures and the ability to
          easily accommodate new fields or data types.
        </li>
        <li>
          Scalability: Non-relational databases are often more scalable than
          relational databases, as they can handle a large number of reads and
          writes without a performance degradation.
        </li>
        <li>
          Document-based data model: Non-relational databases like MongoDB or
          Couchbase has a document-based data model which is more natural for
          some use cases.
        </li>
        <li>
          NoSQL databases are designed to handle big data, where scalability and
          performance are important factors.
        </li>
        <li>
          NoSQL databases are more suitable for distributed systems and cloud
          computing environments, where data is spread across multiple machines.
        </li>
      </ol>
      <p>
        In summary, it depends on the use case, data size, and performance
        requirements of the application. Relational databases are better for
        structured data and complex querying, while non-relational databases are
        more suitable for unstructured or semi-structured data and horizontal
        scalability.
      </p>
      <p>
        A real-world example of choosing a relational database over a
        non-relational database would be an online retail store. The store would
        have several related entities such as customers, orders, products, and
        inventory. Each of these entities would have a specific set of
        attributes and a clear relationship with one another. For example, a
        customer can have multiple orders, and an order can have multiple
        products. In this case, a relational database would be the best choice
        because it allows for the clear and organized structure of the data, and
        provides the capability to easily run complex queries to retrieve the
        data needed for business analysis, such as sales by product, customer
        demographics, etc.
      </p>
      <p>
        On the other hand, a real-world example of choosing a non-relational
        database over a relational database would be a social media platform. A
        social media platform generates a huge amount of unstructured data such
        as text, images, videos, and comments. This data can be highly varied,
        and the relationships between the data may not be clear. In this case, a
        non-relational database would be the best choice because it allows for
        the flexible storage of this data and can handle a large number of reads
        and writes. Additionally, a non-relational database is well suited for
        storing semi-structured data, like JSON, which can easily accommodate
        new fields or data types, and can handle data that does not fit well in
        a traditional table-based relational database.
      </p>
    </>
  );
};
