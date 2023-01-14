import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const FlexboxMD = () => {
  const c1 = `
  <div class="navbar">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </div>
  `;
  const c2 = `
  .navbar {
    display: flex; /* activates flexbox layout */
    justify-content: space-between; /* aligns items along the main axis (horizontally) */
  }  
  `;
  const c3 = `
  <ul class="list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  `;
  const c4 = `
  .list {
    display: flex; /* activates flexbox layout */
    flex-direction: column; /* aligns items along the cross axis (vertically) */
    align-items: center; /* aligns items along the cross axis */
  }  
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        Flexbox is a layout module in CSS that allows elements to be aligned and
        laid out in flexible ways, such as responsive design.
      </p>
      <p>
        Flexbox is a layout module in CSS that allows elements to be aligned and
        laid out in flexible ways, such as responsive design. It provides a
        flexible container, in which elements can be aligned in any direction,
        and adapt to the available space. Here is an example of using Flexbox to
        create a horizontal navigation bar:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        In this example, the navbar element is made a flex container by setting
        its display property to flex. The justify-content property is then used
        to align the child elements (the links) along the main axis, with equal
        space between them.
      </p>
      <p>
        Another example could be creating a vertical list of items, where the
        items will adjust based on the available space:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c3}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c4}
      </SyntaxHighlighter>
      <p>
        In this example, the list element is made a flex container by setting
        its display property to flex. The flex-direction property is set to
        column, which aligns the child elements (the list items) along the cross
        axis, and align-items is set to center, so the child elements will be
        aligned at the center of the parent element.
      </p>
      <p>
        Note that there are many other properties and values you can use with
        flexbox, such as align-content, flex-wrap, and flex-grow, to create more
        complex and flexible layouts.
      </p>
      <h2 className="font-semibold">
        Differences Between Flexbox and Grid, and the Benefits of Flexbox Over
        Grid
      </h2>
      <p>
        Flexbox and CSS Grid Layout are both layout modules in CSS that allow
        elements to be aligned and laid out in flexible ways, but they have
        different use cases and advantages.
      </p>
      <p>
        Flexbox is a one-dimensional layout module, which means that it is best
        suited for aligning elements in a single direction, either horizontally
        or vertically. It is best for small-scale layouts, such as navigation
        bars, form controls, and small grid structures. It is also useful for
        creating responsive designs, as elements can be easily reordered and
        aligned based on the available space.
      </p>
      <p>
        CSS Grid Layout, on the other hand, is a two-dimensional layout module,
        which means that it is best suited for creating complex grid structures,
        such as website layouts, image galleries, and data tables. It allows
        elements to be aligned both horizontally and vertically in a grid of
        rows and columns. Grid also allows for explicit placement of items,
        meaning you can specify exactly where an element should be placed in the
        grid, whereas in flexbox the items are automatically placed in the order
        they appear in the HTML.
      </p>
      <h2 className="font-semibold">
        Flexbox has some benefits over Grid Layout:
      </h2>
      <ul className="list-disc ml-5">
        <li>
          Flexbox is simpler and easier to use for small-scale layouts, as it
          only deals with one dimension.
        </li>
        <li>
          Flexbox can be useful for creating responsive designs, as elements can
          be easily reordered and aligned based on the available space.
        </li>
        <li>
          Flexbox is more suited for aligning elements in a single direction,
          either horizontally or vertically, whereas Grid Layout is better for
          creating complex grid structures.
        </li>
        <li>
          Flexbox has better browser support, as it has been around for longer
          and is more widely supported.
        </li>
      </ul>
      <p>
        In general, you can use both flexbox and grid layout together to create
        complex and flexible layouts that adapt to different screen sizes and
        orientations. The choice between flexbox and grid will depend on the
        specific requirements of your layout and the level of control you need
        over the positioning of elements.
      </p>
    </>
  );
};
