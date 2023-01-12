import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const BundlingMD = () => {
  const c1 = `
  // file1.js
  console.log('This is file 1');

  // file2.js
  console.log('This is file 2');
  `;

  const c2 = `
  // webpack.config.js
  module.exports = {
    entry: ['./file1.js', './file2.js'],
    output: {
      filename: 'bundle.js'
    }
  };
  `;

  const c3 = `
  // bundle.js
  console.log('This is file 1');
  console.log('This is file 2');
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;Bundling in JavaScript refers to the process of combining multiple
        JavaScript files into a single file, or bundle, in order to reduce the
        number of HTTP requests that the browser has to make in order to load a
        web page.&quot;
      </p>
      <p>
        Imagine that you are a retailer who sells a variety of products, and you
        have received an order from a customer for several items. To fulfill the
        order, you need to gather the requested items and package them together
        for shipping. This process of gathering and packaging the items is
        similar to bundling in JavaScript.
      </p>
      <p>
        In JavaScript, bundling refers to the process of combining multiple
        JavaScript files into a single file (also known as a
        &quot;bundle&quot;). This can be useful in situations where a web
        application consists of multiple JavaScript files that need to be loaded
        by the browser in order to run. Instead of loading each file separately,
        the files can be bundled into a single file, which can be loaded more
        efficiently by the browser.
      </p>
      <p>
        For example, let&apos;s say that you have the following two JavaScript
        files:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        To bundle these files into a single file, you can use a bundler tool
        such as Webpack. Using Webpack, you can create a configuration file that
        specifies the files to be bundled, and then run the bundler to generate
        the bundle:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        Running the bundler with this configuration will generate a single file,
        bundle.js, which contains the contents of both file1.js and file2.js:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c3}
      </SyntaxHighlighter>
      <p>
        Overall, bundling is a process that allows developers to combine
        multiple JavaScript files into
      </p>
    </>
  );
};
