import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const ViewportMD = () => {
  const c1 = `
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  </head>
  `;
  const c2 = `
  <head>
    <meta name="viewport" content="width=600">
  </head>
  `;
  const c3 = `
  <head>
    <meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0, user-scalable=yes">
  </head>
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        The viewport is the visible area of a web page on a device, and is used
        by the browser to adjust the dimensions and scaling of the content to
        fit the screen.
      </p>
      <p>
        A viewport is the visible area of a web page. It is the area of the
        browser window that displays the web page content. The viewport can be
        set using the meta tag with the name &quot;viewport&quot; in the head of
        the HTML document.
      </p>
      <p>
        Here is an example of setting the viewport to the device&apos;s width
        and disabling the user&apos;s ability to zoom:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>You can also set the viewport width to a specific number of pixels:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        It&apos;s also possible to set the initial zoom level of the page, and
        whether or not the user is able to zoom in or out:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c3}
      </SyntaxHighlighter>
      It&apos;s important to note that the viewport meta tag is not standardized
      and may not work consistently across all browsers.
    </>
  );
};
