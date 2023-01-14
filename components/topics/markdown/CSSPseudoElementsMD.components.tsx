import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const CSSPseudoElementsMD = () => {
  return (
    <>
      <h2 className="font-semibold">
        Here is a list of CSS Pseudo-elements along with brief descriptions:
      </h2>
      <ol className="list-decimal ml-5">
        <li>::before - Inserts content before the selected element</li>
        <li>::after - Inserts content after the selected element</li>
        <li>
          ::first-letter - Selects the first letter of the element&apos;s
          content
        </li>
        <li>
          ::first-line - Selects the first line of the element&apos;s content
        </li>
        <li>
          ::selection - Selects the portion of an element that is selected by a
          user
        </li>
        <li>::placeholder - Selects the placeholder text of a form element</li>
        <li>::marker - Selects the marker of a list item</li>
        <li>::spelling-error - Selects a misspelled word</li>
        <li>::grammar-error - Selects a grammatically incorrect word</li>
        <li>
          ::backdrop - Selects the backdrop of an element, such as the area
          behind a modal dialog.
        </li>

        <li>::value - Selects the value of a form element</li>
        <li>::repeat-item - Selects a specific item in a repeating element</li>
        <li>
          ::repeat-index - Selects the index of a specific item in a repeating
          element
        </li>
        <li>::content - Selects the content of a pseudo-element</li>
      </ol>
      <p>
        Please note that not all of these are widely supported across all
        browsers and some may have limited support.
      </p>
    </>
  );
};
