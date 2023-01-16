import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const HTTPProtocolMD = () => {
  const c1 = `
  const https = require('https');

  const options = {
    hostname: 'www.example.com',
    port: 443,
    path: '/',
    method: 'GET',
  };
  
  const req = https.request(options, (res) => {
    console.log('statusCode: ' + res.statusCode);
  
    res.on('data', (d) => {
      process.stdout.write(d);
    });
  });
  
  req.on('error', (error) => {
    console.error(error);
  });
  
  req.end();  
  `;
  const c2 = `
  var request = require("request");

  var options = { method: 'GET',
    url: 'https://www.example.com',
    headers: 
     { 'cache-control': 'no-cache' } };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
  
    console.log(body);
  });  
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        HTTP (Hypertext Transfer Protocol) is a set of rules for transferring
        files (text, images, videos, etc) on the World Wide Web, it is the
        foundation of data communication for the web.
      </p>
      <p>
        HTTP can be thought of as a set of rules for a conversation between a
        client (e.g a web browser) and a server (e.g a website). The client
        initiates the conversation by asking for something (e.g a webpage) using
        specific syntax (e.g a request in the form of a URL), and the server
        responds with a message that follows a specific format (e.g HTML code)
        and a status code (e.g 200 OK). The client and server can continue the
        conversation by sending more requests and responses as needed, much like
        how a person can ask for clarification or make another request in a
        conversation.
      </p>
      <p>
        HTTP is a request-response protocol, where a client (such as a web
        browser) sends an HTTP request message to a server (such as a web
        server), and the server sends an HTTP response message back to the
        client.
      </p>
      <p>
        An example of an HTTP request message in Node.js using the popular
        library http or https:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        In the example above, the client sends a GET request to the server at
        &quot;https://www.example.com&quot; and the server sends back a response
        with a status code and data.
      </p>
      <p>
        You can also use library such as &apos;request&apos; which is a
        simplified way of making HTTP requests
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        You can also use other libraries that abstract the http and https module
        such as &apos;axios&apos;, &apos;superagent&apos; and many more.
      </p>
    </>
  );
};
