import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const CSSSelectorsAndTheirSpecificityMD = () => {
  const c1 = `
  .my-class {
    color: red;
  }  
  `;
  const c2 = `
  #my-id .my-class {
    color: blue;
  }  
  `;
  const c3 = `
  #my-id .my-class:hover {
    color: blue;
  }  
  `;

  return (
    <>
      <h2 className="font-semibold">What is the CSS Specificity Heirarchy?</h2>
      <p>
        CSS specificity is a mechanism used to determine which CSS rule should
        be applied to an element when multiple rules target the same element.
        The higher the specificity of a rule, the more weight it has and the
        more likely it is to be applied.
      </p>
      <h2 className="font-semibold">
        The specificity hierarchy of CSS rules is typically represented as four
        levels, listed in order of increasing specificity:
      </h2>
      <ol className="list-decimal ml-5">
        <li>
          Type selectors (e.g. p, div, h1) and pseudo-elements (e.g. ::before,
          ::after). These have low specificity and will be overridden by more
          specific selectors.
        </li>
        <li>
          Class selectors (e.g. .my-class), attributes selectors (e.g.
          [type=&apos;text&apos;]) and pseudo-classes (e.g. :hover, :active).
          These have medium specificity and will override type selectors but
          will be overridden by even more specific selectors.
        </li>
        <li>
          ID selectors (e.g. #my-id). These have high specificity and will
          override all other selectors.
        </li>
        <li>
          Inline styles (e.g. style attribute on an HTML element) and the
          !important flag. These have the highest specificity and will override
          all other selectors.
        </li>
      </ol>
      <p>
        It&apos;s worth noting that the specificity of a rule is determined by
        the selectors that make up that rule. A single rule with multiple
        selectors is evaluated based on the most specific selector in that rule.
      </p>
      <p>
        For example, the following CSS rule has a lower specificity than the
        next one since it only uses one class selector:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        While the following CSS rule has a higher specificity because it uses an
        ID selector:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        It is the combination of the selectors that make up the rule that gives
        it its specificity.
      </p>
      <h2 className="font-semibold">How is Specificity Calculated?</h2>
      <p>
        Specificity is calculated by assigning a numerical value to each type of
        selector. The value is determined by counting the number of each type of
        selector in a rule. These values are then combined to create a
        specificity score for the rule.
      </p>

      <h2 className="font-semibold">
        The calculation is typically done as follows:
      </h2>
      <ol className="list-decimal ml-5">
        <li>
          Assign a value of 1 to each element selector or pseudo-element (e.g.
          p, div, ::before)
        </li>
        <li>
          Assign a value of 10 to each class selector, attribute selector or
          pseudo-class (e.g. .my-class, [type=&apos;text&apos;], :hover)
        </li>
        <li>Assign a value of 100 to each ID selector (e.g. #my-id)</li>
        <li>
          Inline styles and the !important flag have a specificity of 1000.
        </li>
      </ol>
      <p>For example, consider the following CSS rule:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c3}
      </SyntaxHighlighter>
      <h2 className="font-semibold">
        The specificity of this rule is calculated as follows:
      </h2>
      <ul className="list-disc ml-5">
        <li>1 for the element selector (0 in this case)</li>
        <li>10 for the class selector</li>
        <li>100 for the ID selector</li>
        <li>1 for the pseudo-class (:hover)</li>
      </ul>
      <p>So the specificity score for this rule is 111.</p>
      <p>
        In case of multiple rules targeting the same element, the browser will
        apply the rule with the highest specificity score. If two or more rules
        have the same specificity score, the last rule defined will be applied.
      </p>
      <p>
        It&apos;s worth noting that CSS specificity is a complex topic and that
        the calculation of specificity can be more complicated in certain
        situations, such as when using !important or in the case of inline-style
        where they are considered to be the most specific.
      </p>
    </>
  );
};
