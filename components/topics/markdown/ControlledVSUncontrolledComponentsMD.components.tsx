import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const ControlledVSUncontrolledComponentsMD = () => {
  const c1 = `
  import React, { useState } from 'react';

  function Form() {
    const [value, setValue] = useState('');

    function handleChange(event) {
      setValue(event.target.value);
    }

    return (
      <form>
        <label>
          Name:
          <input
            type="text"
            value={value}
            onChange={handleChange}
          />
        </label>
      </form>
    );
  }
  `;

  const c2 = `
  import React from 'react';

  function Form() {
    return (
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
      </form>
    );
  }
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;In React, controlled components are form elements that are
        controlled by the state of the component, while uncontrolled components
        are form elements that are not controlled by the state of the component
        and maintain their own internal state.&quot;
      </p>
      <p>
        Imagine that you are a manager at a warehouse, and you are responsible
        for keeping track of the inventory of different products. To do this,
        you have set up a system where each product has a corresponding barcode,
        and you use a barcode scanner to scan the barcodes of incoming and
        outgoing products.
      </p>
      <p>
        In this system, the barcode scanner is a controlled component, because
        it is controlled by the warehouse manager (you). You decide when to scan
        the barcodes and what information to input into the system.
      </p>
      <p>
        On the other hand, consider a scenario where you have set up a
        self-checkout kiosk for customers to use when making purchases. The
        kiosk has a screen where customers can input their payment information,
        such as their credit card number and expiration date. In this case, the
        input fields on the screen are uncontrolled components, because they are
        not controlled by the warehouse manager (you). The customers decide when
        to input their payment information and what information to input.
      </p>
      <p>
        In React, controlled components are form elements (such as input fields
        and text areas) that are controlled by the state of the component. The
        component manages the value of the form element, and the form
        element&apos;s value is determined by the component&apos;s state.
      </p>
      <p>
        On the other hand, uncontrolled components are form elements that are
        not controlled by the state of the component. The form element maintains
        its own internal state, and the component does not have direct control
        over the value of the form element.
      </p>
      <p>For example, consider the following code written in React:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        In this code, the input field is a controlled component, because it is
        controlled by the state of the Form component. The value of the input
        field is determined by the value state variable, and the handleChange
        function is used to update the value state variable when the user types
        into the input field.
      </p>
      <p>On the other hand, consider the following code:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        In this code, the input field is an uncontrolled component, because it
        is not controlled by the state of the Form component. The input field
        maintains its own internal state, and the Form component does not have
        direct control over the value
      </p>
    </>
  );
};
