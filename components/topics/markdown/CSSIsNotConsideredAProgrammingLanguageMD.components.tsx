import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const CSSIsNotConsideredAProgrammingLanguageMD = () => {
  const c1 = ``;

  return (
    <>
      <p>
        CSS is not considered a programming language because it doesn&apos;t
        have the ability to calculate, make decisions, or perform any type of
        logical operations. It is a markup language, specifically a stylesheet
        language, that is used to describe the presentation of a document
        written in a markup language.
      </p>
      <p>
        CSS is used to apply styles, such as colors, layouts, and spacing, to
        the elements of a document written in a markup language, like HTML or
        XML. These styles are then interpreted by web browsers and applied to
        the corresponding elements on the page. It lacks the ability to do any
        calculations or decision making, making it different from a programming
        language.
      </p>
      <p>
        While it has some concepts that overlap with programming like selectors,
        cascading and inheritance but it lacks the full range of capabilities
        that a programming language has to offer. It&apos;s a tool for styling
        and presentation rather than programming.
      </p>
    </>
  );
};
