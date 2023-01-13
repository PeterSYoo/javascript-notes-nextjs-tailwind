import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const MinificationMD = () => {
  const c1 = `
  function greet(name) {
    console.log('Hello' + name + '!');
  }
  `;
  const c2 = `
  function greet(n){console.log('Hello' + n + '!')}
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;Minification in JavaScript refers to the process of removing
        unnecessary characters (such as whitespace, comments, and long variable
        names) from the code in order to reduce its size and improve its loading
        speed.&quot;
      </p>

      <p>
        Imagine that you are a retailer who sells a variety of products, and you
        have received an order from a customer for several items. To fulfill the
        order, you need to gather the requested items and package them together
        for shipping. However, you want to minimize the size of the package as
        much as possible in order to reduce shipping costs. To do this, you
        might remove unnecessary packaging materials and compress the items as
        much as possible. This process of minimizing the size of the package is
        similar to minification in JavaScript.
      </p>

      <p>
        In JavaScript, minification refers to the process of reducing the size
        of a JavaScript file by removing unnecessary characters and optimizing
        the code. This can be useful in situations where a web application
        consists of large JavaScript files that need to be loaded by the
        browser, as smaller files will load more quickly.
      </p>

      <p>For example, consider the following JavaScript code:</p>

      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        To minify this code, you can use a minification tool such as UglifyJS.
        Using UglifyJS, you can run the code through the minifier, which will
        remove unnecessary characters and optimize the code to make it as small
        as possible:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        Overall, minification is a process that allows developers to reduce the
        size of JavaScript files by removing unnecessary characters and
        optimizing the code, which can improve the performance of web
        applications by reducing the time it takes for the files to load.
      </p>
    </>
  );
};
