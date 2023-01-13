import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const NoSQLMD = () => {
  return (
    <>
      <p>
        NoSQL is not a programming language. It is a term used to describe a
        type of non-relational database management system that does not rely on
        a fixed schema, and does not use SQL as a query language.
      </p>
      <p>
        NoSQL databases are often designed to handle large amounts of
        unstructured or semi-structured data, and can scale horizontally across
        multiple machines. They can be used in a variety of use cases, such as:
      </p>
      <ul className="list-disc ml-5">
        <li>Real-time web and mobile applications</li>
        <li>Big data analytics</li>
        <li>Content management and delivery</li>
        <li>Internet of Things (IoT)</li>
        <li>Social media</li>
      </ul>
      <p>
        These databases have different data models, such as document-based,
        key-value, graph, and columnar and different ways of interacting with
        them, some of them have their own query language, some of them use
        RESTful API or other mechanisms to interact with the data.
      </p>
      <p>
        So, NoSQL is not a programming language, it&apos;s a term used to
        describe a category of non-relational databases that are optimized for
        handling large amounts of unstructured data and provide high performance
        and scalability.
      </p>
      <p>Here is a list of some popular NoSQL databases:</p>
      <ol className="list-decimal ml-5">
        <li>MongoDB: a popular open-source, document-based NoSQL database.</li>
        <li>
          Apache Cassandra: a highly scalable, distributed, and fault-tolerant
          NoSQL database.
        </li>
        <li>Redis: an open-source, in-memory key-value data store.</li>
        <li>
          Couchbase: a document-based NoSQL database that also supports
          key-value and graph data models.
        </li>
        <li>
          Amazon DynamoDB: a proprietary, fully managed NoSQL database service
          provided by Amazon Web Services (AWS).
        </li>
        <li>Riak: an open-source, distributed NoSQL key-value data store.</li>
        <li>Neo4j: a popular open-source graph database.</li>
        <li>
          Hbase: an open-source, distributed, column-family NoSQL data store.
        </li>
        <li>
          Elasticsearch: an open-source search and analytics engine that can
          also store and process JSON documents
        </li>
      </ol>
      <p>
        These are just a few examples of popular NoSQL databases. There are many
        more NoSQL databases available, both open-source and proprietary, each
        with their own unique features and capabilities. Each of these databases
        has its own use cases and benefits, it&apos;s important to evaluate the
        needs of the application and choose the most appropriate one.
      </p>
    </>
  );
};
