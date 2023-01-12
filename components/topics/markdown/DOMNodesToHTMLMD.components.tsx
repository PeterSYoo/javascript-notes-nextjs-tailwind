import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const DOMNodesToHTMLMD = () => {
  const c1 = ``;

  return (
    <>
      <p>
        Here is a general outline of the process of generating HTML from a DOM:
      </p>

      <ol className="list-decimal ml-5">
        <li>
          The application creates a virtual representation of the web page in
          the form of a Document Object Model (DOM). This typically involves
          creating DOM nodes for each element on the page, including elements
          such as div, p, h1, etc.
        </li>
        <li>
          The application populates the DOM with the content and structure of
          the web page. This typically involves creating child nodes for each
          element, and setting attributes on the elements as needed.
        </li>
        <li>
          The application iterates through the nodes of the DOM, starting at the
          root node. For each node in the DOM, it generates the corresponding
          HTML element.
        </li>
        <li>
          For each node, the application generates the opening tag for the HTML
          element, including any attributes that have been set on the node.
        </li>
        <li>
          If the node has any child nodes, the application recursively generates
          the HTML for each of the child nodes, following the same process.
        </li>
        <li>
          Once the HTML for all of the child nodes has been generated, the
          application generates the closing tag for the HTML element.
        </li>
        <li>
          The application continues this process for each node in the DOM, until
          the entire DOM has been converted into HTML.
        </li>
        <li>
          The resulting HTML is then sent to the client, where it is rendered by
          the web browser to display the web page to the user.
        </li>
      </ol>
    </>
  );
};
