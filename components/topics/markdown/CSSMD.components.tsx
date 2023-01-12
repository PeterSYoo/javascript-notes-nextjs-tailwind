import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const CSSMD = () => {
  const c1 = ``;

  return (
    <>
      <p>
        CSS stands for Cascading Style Sheets. It is a styling language used to
        describe the presentation of a document written in a markup language.
        With CSS, you can control the layout and appearance of web pages,
        including colors, fonts, and spacing. You can also use CSS to create
        responsive design, which allows a website to adjust its layout based on
        the size of the screen it is being viewed on.
      </p>
      <p>
        CSS styles are typically applied to HTML elements on a web page, and can
        be specified in a separate file with a .css extension, or directly
        within the HTML document using a {`<style>`} element. These styles are
        then interpreted by the web browser and applied to the corresponding
        elements on the page.
      </p>
      <p>
        CSS allows you to apply styles to specific elements on a page, to
        specific classes of elements, or to all elements of a certain type. The
        selectors are used to target the HTML elements on the pages that you
        want to style. Once selected you can then apply styles like colors,
        font-size, padding and many more on it.
      </p>
      <p>
        It&apos;s a powerful tool for controlling the look and feel of a
        website, and it allows you to separate the presentation of a website
        from its structure and content.
      </p>
    </>
  );
};
