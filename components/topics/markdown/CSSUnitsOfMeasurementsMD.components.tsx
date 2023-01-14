import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const CSSUnitsOfMeasurementsMD = () => {
  return (
    <>
      <h2 className="font-semibold -mb-3">Absolute Units</h2>
      <ol className="list-decimal ml-5">
        <li>
          px (pixels) - a unit of measurement in screen-based CSS, equivalent to
          one dot on a computer screen
        </li>
        <li>
          pt (points) - a unit of measurement in print-based CSS, equivalent to
          1/72 of an inch
        </li>
        <li>
          in (inches) - a unit of measurement in print-based CSS, equivalent to
          2.54 cm
        </li>
        <li>
          cm (centimeters) - a unit of measurement in print-based CSS,
          equivalent to 0.39 inches
        </li>
        <li>
          mm (millimeters) - a unit of measurement in print-based CSS,
          equivalent to 0.1 cm
        </li>
        <li>
          pc (picas) - a unit of measurement in print-based CSS, equivalent to
          12 points or 1/6 inch
        </li>
        <li>
          q (quarter-millimeters) - a unit of measurement in print-based CSS,
          equivalent to 1/4 of a millimeter (0.25mm). It is a very small unit of
          measurement, and is not commonly used in web design.
        </li>
      </ol>
      <h2 className="font-semibold -mb-3">Relative Units</h2>
      <ol className="list-decimal ml-5">
        <li>
          em - a unit of measurement relative to the font-size of the parent
          element
        </li>
        <li>
          rem - a unit of measurement relative to the font-size of the root
          element
        </li>
        <li>
          rlh (root line height) - a unit of measurement relative to the
          line-height of the root element
        </li>
        <li>
          lh (line height) - a unit of measurement relative to the font-size of
          the element
        </li>
        <li>
          vw (viewport width) - a unit of measurement relative to the width of
          the viewport
        </li>
        <li>
          vh (viewport height) - a unit of measurement relative to the height of
          the viewport
        </li>
        <li>
          vmin (viewport minimum) - a unit of measurement relative to the
          smaller dimension of the viewport (height or width)
        </li>
        <li>
          vmax (viewport maximum) - a unit of measurement relative to the larger
          dimension of the viewport (height or width)
        </li>
        <li>
          % - a unit of measurement relative to the size of the parent element.
        </li>
        <li>
          ex - a relative unit of measurement that is equal to the x-height of a
          font
        </li>
        <li>
          ch - a relative unit of measurement that is equal to the width of the
          &quot;0&quot; (zero) character of the font in use.
        </li>
      </ol>
    </>
  );
};
