import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const ExplainHTTPCodesMD = () => {
  return (
    <>
      <p>
        HTTP (Hypertext Transfer Protocol) status codes are three-digit numbers
        that indicate the status of a request made to a server. The codes are
        grouped into five classes:
      </p>
      <ul className="list-disc ml-5">
        <li>
          1xx (Informational): The request was received, and the server is
          continuing to process it. Example: 100 Continue
        </li>
        <li>
          2xx (Successful): The request was successfully received, understood,
          and accepted. Example: 200 OK
        </li>
        <li>
          3xx (Redirection): The request needs further action to be completed,
          such as following a redirect. Example: 301 Moved Permanently
        </li>
        <li>
          4xx (Client Error): The request contains bad syntax or cannot be
          fulfilled by the server. Example: 400 Bad Request
        </li>
        <li>
          5xx (Server Error): The server failed to fulfill a valid request.
          Example: 500 Internal Server Error
        </li>
      </ul>
      <p>
        These are just a few examples of the many different HTTP status codes
        that exist. Some other codes are 201 Created, 204 No Content, 304 Not
        Modified, 401 Unauthorized, 403 Forbidden, 404 Not Found, and 503
        Service Unavailable.
      </p>
    </>
  );
};
