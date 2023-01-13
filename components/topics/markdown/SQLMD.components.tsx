import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const SQLMD = () => {
  const c1 = ``;

  return (
    <>
      <p>
        SQL (Structured Query Language) is a domain-specific language used for
        managing and manipulating relational databases. It is not a
        general-purpose programming language like C++, Python, or Java, but it
        is a specialized language for managing data in relational databases. SQL
        is used for a variety of tasks such as:
      </p>

      <ul className="list-disc ml-5">
        <li>
          Creating, altering and deleting database objects such as tables,
          views, and indexes
        </li>
        <li>Inserting, updating, and deleting data in tables</li>
        <li>Retrieving data from tables and views</li>
        <li>Managing access to the database</li>
        <li>Controlling data integrity, consistency and security</li>
      </ul>

      <p>
        SQL is not just a single language but it&apos;s a standard, different
        relational databases have slightly different SQL dialects (e.g. MySQL,
        Oracle, MS SQL Server, PostgreSQL) but the core commands and structure
        of the language is similar across them.
      </p>
      <p>
        So, while SQL is not a general-purpose programming language, it is a
        powerful and essential tool for managing data in relational databases
        and is widely used in many applications and industries.
      </p>
      <p>Here is a list of some popular SQL databases:</p>
      <ol className="list-decimal ml-5">
        <li>MySQL: an open-source relational database management system.</li>
        <li>
          PostgreSQL: an open-source relational database management system known
          for its stability, data integrity, and extensibility.
        </li>
        <li>
          Microsoft SQL Server: a proprietary relational database management
          system developed by Microsoft.
        </li>
        <li>
          Oracle Database: a proprietary relational database management system
          developed by Oracle Corporation.
        </li>
        <li>
          SQLite: a self-contained, serverless, zero-configuration,
          transactional SQL database engine.
        </li>
        <li>
          MariaDB: An open-source relational database management system, a fork
          of MySQL.
        </li>
        <li>DB2: a relational database management system developed by IBM.</li>
        <li>
          Sybase: A relational database management system (RDBMS) developed by
          Sybase Inc. and later by SAP AG.
        </li>
      </ol>
      <p>
        These are just a few examples of popular SQL databases. There are many
        more relational databases available, both open-source and proprietary,
        each with their own unique features and capabilities.
      </p>
    </>
  );
};
