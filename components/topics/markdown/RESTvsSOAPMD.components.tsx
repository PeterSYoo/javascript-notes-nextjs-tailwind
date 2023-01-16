import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const RESTvsSOAPMD = () => {
  const c1 = `
  GET https://api.example.com/users/123
  `;
  const c2 = `
  HTTP/1.1 200 OK
  Content-Type: application/json
  
  {
      "id": 123,
      "name": "John Doe",
      "email": "johndoe@example.com"
  }  
  `;
  const c3 = `
  <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
    <soap:Header>
        <m:auth xmlns:m="https://api.example.com/authentication">
            <m:username>johndoe</m:username>
            <m:password>secretpassword</m:password>
        </m:auth>
    </soap:Header>
    <soap:Body>
        <m:GetUser xmlns:m="https://api.example.com/users">
            <m:id>123</m:id>
        </m:GetUser>
    </soap:Body>
  </soap:Envelope>
  `;
  const c4 = `
  <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
    <soap:Header/>
    <soap:Body>
        <m:GetUserResponse xmlns:m="https://api.example.com/users">
            <m:User>
                <m:id>123</m:id>
                <m:name>John Doe</m:name>
                <m:email>johndoe@example.com</m:email>
            </m:User>
        </m:GetUserResponse>
    </soap:Body>
  </soap:Envelope>
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        REST (Representational State Transfer) API&apos;s are based on HTTP
        requests and responses, while SOAP (Simple Object Access Protocol)
        API&apos;s use a protocol for exchanging structured information in the
        implementation of web services.
      </p>
      <p>
        REST API&apos;s can be thought of as a menu in a restaurant, where the
        menu lists all of the options available (the endpoints) and the customer
        (the client) can make requests (GET, POST, PUT, DELETE) to order
        something (retrieve, update or delete data) and the kitchen (the server)
        will respond with their order (the data requested). On the other hand,
        SOAP API&apos;s can be thought of as an old-fashioned letter-writing
        system, where the client writes a letter (the request) with specific
        instructions, seals it in an envelope (the SOAP envelope) and sends it
        to the server, which reads the letter (the request) and sends back a
        response in another sealed envelope (the SOAP envelope). Both systems
        will get the job done, but REST is generally easier to work with and
        less verbose.
      </p>
      <p>Here&apos;s an example of a REST API:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        This is a GET request to the endpoint
        &quot;https://api.example.com/users/123&quot;, which is requesting data
        for user with ID 123.
      </p>
      <p>Here&apos;s an example of a response from a REST API:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        This is a JSON response containing the information for the user with ID
        123.
      </p>
      <p>Now, here&apos;s an example of a SOAP API request:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c3}
      </SyntaxHighlighter>
      <p>
        This is an XML-formatted request that is wrapped in a SOAP envelope. The
        request is authenticating with a username and password and requesting
        data for user with ID 123.
      </p>
      <p>And here&apos;s an example of a SOAP API response:</p>

      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c4}
      </SyntaxHighlighter>
      <p>
        This is an XML-formatted response that is also wrapped in a SOAP
        envelope. It contains the information for the user with ID 123.
      </p>
      <p>
        As you can see, REST APIs use simple HTTP requests and responses and can
        return data in various formats like JSON, XML, and plain text, while
        SOAP APIs use XML format and have a more complex structure with an
        envelope that wraps the actual request and response, also SOAP APIs have
        more security features like built-in authentication, encryption and
        signing.
      </p>
    </>
  );
};
