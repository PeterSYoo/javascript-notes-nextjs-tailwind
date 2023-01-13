import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const VirtualDOMMD = () => {
  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;The virtual DOM is a lightweight in-memory representation of the
        actual DOM in a web page, which is used by React to optimize the
        rendering performance of components by minimizing the number of DOM
        manipulation operations required.&quot;
      </p>
      <p>
        Imagine that you are an artist, and you are working on a painting that
        depicts a beautiful landscape. You are using a canvas and a set of
        paints to create the painting. As you work on the painting, you are
        constantly making small changes to the canvas, such as adding new brush
        strokes or blending different colors together.
      </p>
      <p>
        As you work on the painting, you also have a &quot;preview&quot; of the
        painting that you can look at to see how the painting is coming along.
        This preview is like the virtual DOM in React. It is a lightweight
        in-memory representation of the actual painting that you are working on,
        which you can use to see how the painting is coming along as you make
        changes to it.
      </p>
      <p>
        Like the preview of the painting, the virtual DOM in React is a
        lightweight in-memory representation of the actual DOM in a web page. It
        is used by React to optimize the rendering performance of components by
        minimizing the number of DOM manipulation operations required.
      </p>
      <h2 className="font-semibold">
        Here&apos;s how the virtual DOM works in React:
      </h2>
      <ol className="list-decimal ml-5">
        <li>
          When a component is rendered, React creates a virtual DOM
          representation of the component&apos;s UI.
        </li>
        <li>
          When the component&apos;s state or props change, React re-renders the
          component and creates a new virtual DOM representation of the
          component&apos;s UI.
        </li>
        <li>
          React compares the new virtual DOM representation with the previous
          one, and calculates the minimal set of DOM manipulation operations
          required to update the actual DOM to match the new virtual DOM
          representation.
        </li>
        <li>
          React applies the calculated DOM manipulation operations to the actual
          DOM, updating the UI of the component in the web page.
        </li>
      </ol>
      <p>
        Overall, the virtual DOM is a useful tool in React for optimizing the
        rendering performance of components by minimizing the number of DOM
        manipulation operations required. It is a lightweight in-memory
        representation of the actual DOM in a web page that is used to optimize
        the rendering performance of components.
      </p>
    </>
  );
};
