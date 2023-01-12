import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const HTMLFormInputsMD = () => {
  const c1 = ``;

  return (
    <>
      <p>Here is a list of common HTML form input types:</p>
      <ol className="list-decimal ml-5">
        <li>text input</li>
        <li>radio button</li>
        <li>checkbox</li>
        <li>submit button</li>
        <li>reset button</li>
        <li>password input</li>
        <li>textarea</li>
        <li>select (dropdown)</li>
        <li>hidden input</li>
        <li>file input</li>
        <li>label</li>
        <li>button</li>
        <li>date picker</li>
        <li>color picker</li>
        <li>range</li>
        <li>search input</li>
        <li>tel input</li>
        <li>email input</li>
        <li>url input</li>
        <li>number input</li>
        <li>time input</li>
        <li>datetime-local input</li>
        <li>month input</li>
        <li>week input</li>
        <li>datetime input</li>
        <li>button</li>
      </ol>
      <p>
        Note that there are other form elements available, such as the fieldset
        element, which is used to group related form controls together, and the
        legend element, which is used to provide a caption for a fieldset.
      </p>
    </>
  );
};
