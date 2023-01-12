import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const HTMLMD = () => {
  const c1 = `
  <html>
    <head>
      <title>My Webpage</title>
    </head>
    <body>
      <h1>Welcome to my webpage</h1>
      <p>This is some sample text.</p>
    </body>
  </html>
  `;

  return (
    <>
      <p>
        HTML, or Hypertext Markup Language, is the standard markup language used
        to create web pages. It consists of a series of elements, represented by
        tags, which define the structure and content of a webpage. These tags
        are enclosed in angle brackets, and typically come in pairs, with an
        opening tag and a closing tag.
      </p>

      <p>
        For example, the following HTML code creates a simple webpage with a
        heading and a paragraph of text:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        This code would be displayed in a web browser as: Welcome to my webpage
        This is some sample text.
      </p>

      <p>
        HTML tags can also have attributes, which provide additional information
        about an element, such as the src attribute of an {`<img>`} tag, which
        specifies the URL of the image to be displayed.
      </p>

      <p>
        It is important to note that the HTML is just the structure, the way it
        looks and behaves on the web page will still depends on other
        technologies such as CSS and JavaScript.
      </p>
    </>
  );
};
