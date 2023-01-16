import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const RESTvsGraphQLMD = () => {
  const c1 = `
  GET /books - Retrieve a list of books
  GET /books/123 - Retrieve details for book with ID 123
  POST /books - Add a new book
  PUT /books/123 - Update book with ID 123
  DELETE /books/123 - Delete book with ID 123  
  `;
  const c2 = `
  query {
    book(id: 123) {
      title
      author
      publicationDate
    }
  }  
  `;
  const c3 = `
  {
    "data": {
      "book": {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "publicationDate": "1925-04-10"
      }
    }
  }  
  `;
  const c4 = `

  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        REST is an architectural style for building web services that uses a
        fixed set of endpoints for retrieving and manipulating resources, while
        GraphQL is a query language and runtime for building APIs that allows
        clients to request exactly the data they need and nothing more.
      </p>
      <p>
        REST can be thought of as a fixed buffet menu at a restaurant where you
        can only choose from the pre-determined options and dishes that are laid
        out for you, while GraphQL can be thought of as a custom ordering system
        where you can select specific ingredients and preparations to create
        your own dish tailored to your preferences.
      </p>
      <p>
        REST (Representational State Transfer) is an architectural style for
        building web services. In REST, the server exposes a fixed set of
        endpoints that the client can interact with to retrieve and manipulate
        resources. For example, a RESTful API for a library might have endpoints
        such as:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        Each endpoint represents a specific resource, and the client can use the
        standard HTTP methods (GET, POST, PUT, DELETE) to interact with the
        resource. The response from the server is typically in JSON format.
      </p>
      <p>
        On the other hand, GraphQL is a query language and runtime for building
        APIs. In GraphQL, the client makes a request specifying exactly the data
        they need, and the server returns only that data. For example, a GraphQL
        query to retrieve details for a book with ID 123 might look like this:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>The server then returns the requested data in JSON format:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c3}
      </SyntaxHighlighter>
      <p>
        In this example, the client is able to specify exactly the fields of the
        book that they want to retrieve, and the server only returns those
        fields. This allows for more efficient and flexible communication
        between the client and server.
      </p>
    </>
  );
};
