import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const PureVSImpureFunctionMD = () => {
  const c1 = `
  function calculateTotal(price, tax) {
    return price + (price * tax);
  }
  `;
  const c2 = `
  function fetchUserData(userId) {
    // Make an API call to retrieve user data
    const userData = api.get('URL');
    return userData;
  }
  `;
  const c3 = `
  let counter = 0;
  function addOne(x) {
    counter += 1;
    return x + 1;
  }
  `;
  const c4 = `
  function addOne(x) {
    return x + 1;
  }
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;In React, a pure function is a function that always returns the
        same output for a given set of input values, and does not have any side
        effects, while an impure function is a function that may return
        different outputs for the same set of input values and may have side
        effects.&quot;
      </p>
      <p>
        Imagine that you are a chef in a restaurant, and you are responsible for
        preparing a dish called &quot;Chicken Alfredo.&quot;
      </p>
      <p>
        A pure function in this context would be like a recipe for Chicken
        Alfredo that you follow every time you make the dish. The recipe
        specifies a set of ingredients and steps that you need to follow in
        order to prepare the dish, and as long as you follow the recipe
        correctly, you will always get the same result - a delicious Chicken
        Alfredo. The recipe is a pure function because it always produces the
        same output (Chicken Alfredo) for a given set of input values (the
        ingredients and steps).
      </p>
      <p>
        On the other hand, an impure function in this context could be like a
        cook who improvises while preparing the Chicken Alfredo. The cook may
        decide to add or remove ingredients on a whim, or change the order of
        the steps in the recipe. This could lead to unpredictable results -
        sometimes the Chicken Alfredo will turn out great, but other times it
        may be overcooked or underwhelming. The cook is an impure function
        because they may produce different outputs (various versions of Chicken
        Alfredo) for the same set of input values (the ingredients and steps).
      </p>
      <p>
        In the same way, pure functions in React always return the same output
        for a given set of input values (props and state) and do not have any
        side effects, while impure functions may return different outputs for
        the same set of input values and may have side effects (such as making
        API calls or modifying the DOM). It is generally recommended to use pure
        functions in React components to make them easier to understand and
        debug.
      </p>
      <p>Here is an example of a pure function in React:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
    </>
  );
};
