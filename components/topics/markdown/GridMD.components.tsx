import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const GridMD = () => {
  const c1 = `
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 columns, each taking up 1 fraction of the available space */
    grid-template-rows: repeat(2, 100px); /* 2 rows, each 100px tall */
  }  
  `;
  const c2 = `
  <div class="container">
    <div class="item1">Item 1</div>
    <div class="item2">Item 2</div>
    <div class="item3">Item 3</div>
    <div class="item4">Item 4</div>
    <div class="item5">Item 5</div>
    <div class="item6">Item 6</div>
  </div>
  `;
  const c3 = `
  .item1 {
    grid-column: 1 / 2; /* starts at column 1 and ends at column 2 */
    grid-row: 1 / 2; /* starts at row 1 and ends at row 2 */
  }
  
  .item2 {
    grid-column: 2 / 3; /* starts at column 2 and ends at column 3 */
    grid-row: 1 / 2; /* starts at row 1 and ends at row 2 */
  }
  
  .item3 {
    grid-column: 3 / 4; /* starts at column 3 and ends at column 4 */
    grid-row: 1 / 2; /* starts at row 1 and ends at row 2 */
  }
  
  .item4 {
    grid-column: 1 / 2; /* starts at column 1 and ends at column 2 */
    grid-row: 2 / 3; /* starts at row 2 and ends at row 3 */
  }
  
  .item5 {
    grid-column: 2 / 3; /* starts at column 2 and ends at column 3 */
    grid-row: 2 / 3; /* starts at row 2 and ends at row 3 */
  }
  
  .item6 {
    grid-column: 3 / 4; /* starts at column 3 and ends at column 4 */
    grid-row: 2 / 3; /* starts at row 2 and ends at row 3 */
  }  
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        CSS Grid is a layout system for creating grid-based designs using rows
        and columns, which allows for more flexible and responsive web design.
      </p>
      <p>
        CSS Grid is a layout system for creating grid-based designs using rows
        and columns. It allows for more flexible and responsive web design, as
        well as easy alignment and distribution of elements on a web page.
      </p>
      <p>Here&apos;s an example of how to create a basic grid layout:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        You can then place elements inside the container and position them
        within the grid using grid-column and grid-row properties:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        This will create a 2x3 grid with 6 items placed in specific cells of the
        grid.
      </p>
      <p>
        CSS Grid also provides more advanced layout options, such as grid gaps,
        auto-placement, and grid templates areas to make your layout more
        flexible and customizable.
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c3}
      </SyntaxHighlighter>
      <h2 className="font-semibold">
        Differences Between Grid and Flexbox, and the Benefits of Grid over
        Flexbox
      </h2>
      <ul className="list-disc ml-5">
        <li>
          Grid is a two-dimensional layout system, which means that it can
          handle both rows and columns. It allows you to create a grid of items,
          and position and align those items within that grid. Flexbox, on the
          other hand, is a one-dimensional layout system, which means that it
          can only handle a single row or column at a time. It&apos;s mainly
          used for aligning items along a single axis (horizontally or
          vertically).
        </li>
        <li>
          Grid is best suited for creating complex, grid-based layouts, such as
          a layout with a header, a sidebar, and a main content area. Flexbox is
          best suited for creating simple, linear layouts, such as a navigation
          bar or a list of items.
        </li>
        <li>
          Grid provides more advanced layout options, such as grid gaps,
          auto-placement, and grid templates areas to make your layout more
          flexible and customizable. Flexbox provides fewer layout options, but
          it&apos;s generally easier to use and understand.
        </li>
      </ul>
      <h2 className="font-semibold">Benefits of Grid over Flexbox:</h2>
      <ul className="list-disc ml-5">
        <li>
          Grid has more capabilities and more flexibility in terms of layout, it
          allows you to create more complex and advanced layout.
        </li>
        <li>
          Grid can handle both rows and columns, where flexbox can only handle a
          single row or column.
        </li>
        <li>
          Grid allows for overlapping elements and z-axis positioning, which
          flexbox does not offer. Grid provides more advanced layout options
          that make it easier to control the spacing and alignment of items
          within the grid.
        </li>
      </ul>
      <p>
        It&apos;s worth noting that both Grid and Flexbox have their own
        strengths and weaknesses, and the best choice for a particular project
        depends on the specific requirements and layout needs of that project.
      </p>
    </>
  );
};
