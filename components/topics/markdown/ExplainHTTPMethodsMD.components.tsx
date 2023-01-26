import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const ExplainHTTPMethodsMD = () => {
  const c1 = `
  const http = require('http');
  
  const options = {
    hostname: 'www.example.com',
    path: '/resource'
  };

  const req = http.get(options, (res) => {
    console.log(res.statusCode);
  });

  req.end();  
  `;
  const c2 = `
  const http = require('http');

  const options = {
    hostname: 'www.example.com',
    path: '/resource',
    method: 'POST'
  };

  const req = http.request(options, (res) => {
    console.log(res.statusCode);
  });

  req.write(JSON.stringify({ name: 'John Doe' }));
  req.end();
  `;
  const c3 = `
  const http = require('http');

  const options = {
    hostname: 'www.example.com',
    path: '/resource',
    method: 'PUT'
  };

  const req = http.request(options, (res) => {
    console.log(res.statusCode);
  });

  req.write(JSON.stringify({ name: 'Jane Doe' }));
  req.end();  
  `;
  const c4 = `
  const http = require('http');

  const options = {
    hostname: 'www.example.com',
    path: '/resource',
    method: 'DELETE'
  };

  const req = http.request(options, (res) => {
    console.js(res.statusCode);
  });

  req.end();
  `;
  const c5 = `
  const http = require('http');

  const options = {
    hostname: 'www.example.com',
    path: '/resource',
    method: 'HEAD'
  };

  const req = http.request(options, (res) => {
    console.log(res.headers);
  });

  req.end();  
  `;
  const c6 = `
  const http = require('http');

  const options = {
    hostname: 'www.example.com',
    path: '/resource',
    method: 'OPTIONS'
  };

  const req = http.request(options, (res) => {
    console.log(res.headers);
  });

  req.end();
  `;
  const c7 = `
  const http = require('http');

  const options = {
    hostname: 'www.example.com',
    path: '/resource',
    method: 'PATCH'
  };

  const req = http.request(options, (res) => {
    console.log(res.statusCode);
  });

  req.write(JSON.stringify({ name: 'Jane Doe' }));
  req.end();
  `;

  return (
    <>
      <p>
        HTTP methods, also known as HTTP verbs, specify the action to be
        performed on a resource in an HTTP request. The most common HTTP methods
        are GET, POST, PUT, and DELETE.
      </p>
      <ol className="list-decimal ml-5">
        <li>
          <p>
            GET: Retrieves a resource from the server. Example in Node.js using
            the http module:
          </p>
          <SyntaxHighlighter
            language="javascript"
            style={darcula}
            className="text-[12px] rounded-xl"
          >
            {c1}
          </SyntaxHighlighter>
        </li>
        <li>
          <p>
            POST: Submits a resource to the server for processing. Example in
            Node.js using the http module:
          </p>
          <SyntaxHighlighter
            language="javascript"
            style={darcula}
            className="text-[12px] rounded-xl"
          >
            {c2}
          </SyntaxHighlighter>
        </li>
        <li>
          <p>
            PUT: Updates a resource on the server. Example in Node.js using the
            http module:
          </p>
          <SyntaxHighlighter
            language="javascript"
            style={darcula}
            className="text-[12px] rounded-xl"
          >
            {c3}
          </SyntaxHighlighter>
        </li>
        <li>
          <p>
            DELETE: Deletes a resource from the server. Example in Node.js using
            the http module:
          </p>
          <SyntaxHighlighter
            language="javascript"
            style={darcula}
            className="text-[12px] rounded-xl"
          >
            {c4}
          </SyntaxHighlighter>
        </li>
      </ol>
      <p>
        Here are some examples of using the less common HTTP methods in Node.js
        using the http module:
      </p>
      <ol className="list-decimal ml-5">
        <li>
          <p>
            HEAD: Retrieves the headers of a resource from the server, without
            the body of the resource. This can be used to check if a resource
            has changed without downloading the entire resource:
          </p>
          <SyntaxHighlighter
            language="javascript"
            style={darcula}
            className="text-[12px] rounded-xl"
          >
            {c5}
          </SyntaxHighlighter>
        </li>
        <li>
          <p>
            OPTIONS: Retrieves the supported methods of a resource from the
            server. This can be used to determine which methods are allowed for
            a resource before making a request:
          </p>
          <SyntaxHighlighter
            language="javascript"
            style={darcula}
            className="text-[12px] rounded-xl"
          >
            {c6}
          </SyntaxHighlighter>
        </li>
        <li>
          <p>
            PATCH: Partially updates a resource on the server. This allows for
            updating specific fields of a resource, rather than replacing the
            entire resource with a PUT request:
          </p>
          <SyntaxHighlighter
            language="javascript"
            style={darcula}
            className="text-[12px] rounded-xl"
          >
            {c7}
          </SyntaxHighlighter>
        </li>
      </ol>
      <p>
        Note: The above examples are very basic and don&apos;t handle error or
        redirects and other http codes. You should use libraries like request or
        axios for more robust handling.
      </p>
    </>
  );
};
