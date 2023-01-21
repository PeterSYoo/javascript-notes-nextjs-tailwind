import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const ClientServerArchitectureMD = () => {
  const c1 = `
  const http = require('http');

  const server = http.createServer((req, res) => {
      res.end("Hello, client!");
  });
  
  server.listen(1234, () => {
      console.log('Server is listening on port 1234');
  });  
  `;
  const c2 = `
  const http = require('http');

  const options = {
      host: 'localhost',
      port: 1234,
      path: '/'
  };
  
  http.get(options, (res) => {
      res.on('data', (data) => {
          console.log(data.toString());
      });
  });  
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        Client-Server architecture is a computing model in which a central
        server manages and distributes data to multiple client devices that
        request access to it.
      </p>
      <p>
        A common analogy for client-server architecture is a restaurant. The
        server (or servers) represents the kitchen and waitstaff, who are
        responsible for preparing and serving meals. The clients (or customers)
        represent the patrons who place orders and consume the food that the
        server provides. In this analogy, the kitchen (server) is the central
        hub for managing and distributing the food (data) to the customers
        (clients) who request it.
      </p>
      <p>
        Here&apos;s an example of a simple client-server architecture using
        JavaScript:
      </p>
      <p>Server:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>Client:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        In the above example, the server listens for incoming connections on
        port 1234 and the client sends a GET request to the server on the same
        port. Once a connection is established, the server sends a message
        &quot;Hello, client!&quot; to the client and the client receives it and
        print it.
      </p>
      <p>
        In this example, the server is responsible for listening for incoming
        connections and handling them, while the client is responsible for
        initiating a connection to the server and receiving data from it.
      </p>
      <p>
        Note: The above example is a basic illustration of client-server
        architecture and is not suitable for production use.
      </p>
      <p>
        Also, it&apos;s worth noting that in JavaScript, you can use different
        libraries like express, socket.io, etc. to create a more complex and
        production ready server, but the basic idea remains the same.
      </p>
    </>
  );
};
