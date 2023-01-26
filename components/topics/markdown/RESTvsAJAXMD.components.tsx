import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const RESTvsAJAXMD = () => {
  const c1 = `
  GET /books/:id
  `;
  const c2 = `
  const request = require('request');

  request.get('http://example.com/books/123', function(error, response, body) {
      console.log(body);
  });  
  `;
  const c3 = `
  var xhr = new XMLHttpRequest();

  xhr.open('GET', '/books', true);

  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var books = JSON.parse(xhr.responseText);
          for (var i = 0; i < books.length; i++) {
              console.log(books[i].title);
          }
      }
  };

  xhr.send();  
  `;

  return (
    <>
      <p>
        REST (Representational State Transfer) is an architectural style for
        building web services, while AJAX (Asynchronous JavaScript and XML) is a
        technique for creating fast and dynamic web pages.
      </p>
      <p>
        REST is typically used to build web services that can be consumed by a
        variety of clients, such as web browsers, mobile apps, and other
        servers. A RESTful web service typically exposes a set of URLs, or
        endpoints, that clients can interact with using standard HTTP methods
        like GET, POST, PUT, and DELETE. For example, a RESTful web service that
        provides information about books might have an endpoint like this:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        This endpoint can be called using the fetch API in JavaScript, or using
        the request library in Node.js:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        AJAX, on the other hand, is typically used to build dynamic web pages
        that can update their content without requiring a full page refresh.
        AJAX requests are typically made using JavaScript and the XMLHttpRequest
        object, and they can be used to retrieve or send data to a server. For
        example, an AJAX request might be used to retrieve a list of books from
        a server and display them on a web page:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c3}
      </SyntaxHighlighter>
      <p>
        In summary, REST is a architectural style for building web services,
        while AJAX is a technique for creating fast and dynamic web pages. Both
        can be used together to build web applications that can update their
        content without requiring a full page refresh.
      </p>
    </>
  );
};
