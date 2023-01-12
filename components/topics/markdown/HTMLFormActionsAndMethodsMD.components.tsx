import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const HTMLFormActionsAndMethodsMD = () => {
  const c1 = `
  <form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <input type="submit" value="Submit">
  </form>
  `;
  const c2 = `
  <form action="/submit" method="get">
    <label for="gender">Gender:</label>
    <input type="radio" id="gender" name="gender" value="male"> Male
    <input type="radio" id="gender" name="gender" value="female"> Female
    <input type="submit" value="Submit">
  </form>
  `;

  return (
    <>
      <p>
        In HTML, a form element is used to create an area where a user can
        interact with the web page and enter data. The action attribute is used
        to specify the URL where the form data should be sent when the form is
        submitted. The method attribute is used to specify the HTTP method that
        should be used to submit the form data.
      </p>
      <p>
        The action attribute is a required attribute of the form element and its
        value should be the URL of the server-side script or page that will
        process the form data. For example, if you have a PHP script that will
        process the form data, the action attribute should be set to the URL of
        that script.
      </p>
      <p>
        The method attribute is also a required attribute of the form element
        and its value should be either &quot;get&quot; or &quot;post&quot;.
      </p>
      <ul className="list-disc ml-5">
        <li>
          The &quot;get&quot; method sends the form data as part of the URL,
          appending it to the action URL as query parameters. This method is
          typically used for simple forms that do not include sensitive data.
        </li>
        <li>
          The &quot;post&quot; method sends the form data in the body of the
          HTTP request, which is typically used for forms that include sensitive
          data or large amounts of data. It&apos;s important to note that the
          &quot;get&quot; method is less secure than the &quot;post&quot; method
          as the form data is visible in the URL. So, it&apos;s recommended to
          use &quot;post&quot; when sending sensitive data.
        </li>
      </ul>
      <p>
        Here&apos;s an example of a simple HTML form with a text input field and
        a submit button:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        In this example, the form will be sent to the URL &quot;/submit&quot;
        when the submit button is clicked, and the form data will be sent using
        the &quot;post&quot; method.
      </p>
      <p>
        Here&apos;s another example, this time using the &quot;get&quot; method
        and with radio input fields:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        In this case, the form will be sent to the URL &quot;/submit&quot; when
        the submit button is clicked, and the form data will be sent using the
        &quot;get&quot; method.
      </p>
      <p>
        You can also add more input fields, like textarea, checkboxes, select,
        etc. Please note that, In order to use the data sent by the form in a
        server-side script or page, you will need to use a server-side
        programming language like PHP, Node.js or python to process the form
        data and do something with it.
      </p>
    </>
  );
};
