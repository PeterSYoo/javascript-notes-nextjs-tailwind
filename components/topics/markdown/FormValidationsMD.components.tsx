import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const FormValidationsMD = () => {
  const c1 = `
  <form onsubmit="return validateForm()">
    <input type="text" id="name" required>
    <input type="email" id="email" required>
    <input type="submit" value="Submit">
  </form>

  <script>
  function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    if (name == "" || email == "") {
      alert("Name and email must be filled out");
      return false;
    }
    return true;
  }
  </script>
  `;
  const c2 = `
  const express = require("express");
  const bodyParser = require("body-parser");
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));

  app.post("/form", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    if (!name || !email) {
      return res.status(400).send("Name and email are required");
    }
    // form is valid, continue with processing
  });
  `;

  return (
    <>
      <p>Here are some common form validation attributes in HTML:</p>
      <ol className="list-decimal ml-5">
        <li>
          required: specifies that an input field must be filled out before
          submitting the form.
        </li>
        <li>
          pattern: specifies a regular expression that the input field&apos;s
          value must match.
        </li>
        <li>
          minlength: specifies the minimum number of characters that the input
          field&apos;s value must have.
        </li>
        <li>
          maxlength: specifies the maximum number of characters that the input
          field&apos;s value can have.
        </li>
        <li>
          min: specifies the minimum value that the input field&apos;s value can
          have.
        </li>
        <li>
          max: specifies the maximum value that the input field&apos;s value can
          have.
        </li>
        <li>type: specifies the type of input field.</li>
        <li>step: specifies the legal number intervals for an input field.</li>
        <li>
          placeholder: a short hint that describes the expected value of an
          input field.
        </li>
        <li>readonly: makes an input field read-only.</li>
        <li>disabled: disable an input field.</li>
      </ol>
      <p>
        Note that some of these attributes only apply to certain types of input
        fields, such as min and max which only apply to numerical input fields.
      </p>
      <p>
        Client-side form validation refers to the process of validating form
        input on the client (user&apos;s) side, typically using JavaScript. This
        type of validation is done before the form is submitted to the server,
        and allows for immediate feedback to the user if there are any errors in
        the form input.
      </p>
      <p>
        Server-side form validation refers to the process of validating form
        input on the server side, typically using a programming language such as
        PHP or Node.js. This type of validation is done after the form is
        submitted to the server, and can provide an additional layer of security
        as it can&apos;t be bypassed by disabling JavaScript in the browser.
        However, the feedback to the user will be delayed until the form is
        submitted and the server responds.
      </p>
      <p>
        Both client-side and server-side validation are important for ensuring
        the integrity and security of form data. While client-side validation
        improves the user experience by providing immediate feedback,
        server-side validation is necessary to prevent malicious users from
        bypassing the validation on the client side.
      </p>
      <p>Here is an example of client-side form validation using JavaScript:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        This example uses the required attribute for the input fields, and a
        onsubmit attribute for the form element to call the validateForm()
        function when the form is submitted. The function checks if the name and
        email fields are empty, and if they are, it displays an alert message
        and returns false to prevent the form from being submitted.
      </p>
      <p>
        Here is an example of server-side form validation using Node.js and the
        express framework:
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        This example uses the body-parser middleware to parse the form data that
        is sent in the request body. The app.post route listens for a POST
        request on the /form endpoint, and it checks if the name and email
        fields are empty. If they are, it sends a response with a status code of
        400 and an error message. If the fields are not empty, it continues with
        processing the form.
      </p>
      <p>
        Please keep in mind that this is a simple example and in real life
        situation you should use appropriate libraries to validate the input and
        sanitize it before using it.
      </p>
    </>
  );
};
