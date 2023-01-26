import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const ProsConsRESTMD = () => {
  const c1 = `
  const express = require('express');
  const app = express();
  
  app.get('/users', (req, res) => {
    res.send([{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }]);
  });
  
  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });  
  `;

  return (
    <>
      <p>RESTful web services have several advantages:</p>
      <ol className="list-decimal ml-5">
        <li>
          They are lightweight, meaning they use minimal bandwidth and
          resources.
        </li>
        <li>
          They are platform-independent, meaning they can be easily consumed by
          any client that can make HTTP requests.
        </li>
        <li>
          They are easy to implement and test, as they rely on standard HTTP
          methods like GET, POST, PUT, and DELETE.
        </li>
      </ol>
      <p>Code example in Node.js:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>However, RESTful web services also have some limitations:</p>
      <ol className="list-decimal ml-5">
        <li>
          They are not well-suited for real-time applications, as they rely on
          request-response cycles.
        </li>
        <li>
          They can be less secure than other types of web services, as they rely
          on HTTP for transport and do not include built-in security features.
        </li>
        <li>
          They can be less efficient than other types of web services, as they
          rely on HTTP for transport and can generate a large number of
          round-trip requests.
        </li>
      </ol>
      <p>
        It&apos;s also important to note that REST is just an architectural
        style and not a standard, so not all RESTful APIs are the same and might
        have different implementation details.
      </p>
    </>
  );
};
