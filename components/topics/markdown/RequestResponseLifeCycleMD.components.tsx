import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const RequestResponseLifeCycleMD = () => {
  const c1 = `
  const express = require('express')
  const app = express()
  
  app.get('/get_data', (req, res) => {
      // Retrieve data from the request
      const data = req.query.data
      // Process the data
      const processedData = data.toUpperCase()
      // Return a response to the client
      res.send({ processedData })
  })
  
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });  
  `;
  const c2 = `
  fetch('http://localhost:3000/get_data?data=hello')
    .then(response => response.json())
    .then(data => console.log(data))
  `;
  const c3 = `

  `;
  const c4 = `

  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        The request-response life cycle is the process by which a client sends a
        request to a server and the server returns a response to the client.
      </p>
      <p>
        The request-response life cycle can be compared to a customer ordering a
        meal at a restaurant. The customer (client) sends an order (request) to
        the waiter (server), who then prepares the meal (processes the request)
        and brings it back to the customer (returns a response). The customer
        then receives the meal (response) and can consume it (use the
        information received in the response).
      </p>
      <p>
        Here&apos;s an example of a simple request-response life cycle using
        Node.js and the popular library Express:
      </p>
      <p>Server-side code (using Express):</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        This code creates a simple server using the Express library, which
        listens for incoming GET requests to the &apos;/get_data&apos; endpoint.
        When a request is received, the server retrieves the &apos;data&apos;
        parameter from the request, processes it by converting it to uppercase,
        and then sends a response to the client containing the processed data.
      </p>
      <p>
        The client-side code can make a request to the server using something
        like this
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        This will make a GET request to the server and wait for the response
        which is a json containing the processed data.
      </p>
    </>
  );
};
