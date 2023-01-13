import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const RenderPropsMD = () => {
  const c1 = `
  import React from 'react';

  function MousePosition(props) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const handleMouseMove = event => setMousePosition({ x: event.clientX, y: event.clientY });
    return (
      <div onMouseMove={handleMouseMove}>
        {props.render(mousePosition)}
      </div>
    );
  }

  function MousePositionDisplay(props) {
    return (
      <div>
        The mouse position is ({props.x}, {props.y}).
      </div>
    );
  }

  ReactDOM.render(
    <MousePosition render={mousePosition => <MousePositionDisplay {...mousePosition} />} />,
    document.getElementById('root')
  );
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;Render props is a design pattern in React that allows a component
        to share its internal state and functionality with other components, by
        passing a function as a prop to be called by the child component.&quot;
      </p>
      <p>
        Imagine that you are a museum curator, and you are responsible for
        organizing and displaying a collection of artworks for the public. To
        help you manage your collection, you have a set of
        &quot;catalogues&quot; that you use to keep track of the artworks, and a
        set of &quot;tools&quot; that you use to hang, light, and label the
        artworks.
      </p>
      <p>
        As a curator, you have a set of &quot;techniques&quot; that you use to
        organize and display the artworks. For example, you might have a
        technique for grouping similar artworks together, or a technique for
        highlighting the key features of an artwork. These techniques are like
        &quot;recipes&quot; that you use to guide your work as a curator.
      </p>
      <p>
        In React, render props is a design pattern that is similar to the
        curator&apos;s techniques in that it allows a component to share its
        internal state and functionality with other components in a reusable
        way. Render props is a design pattern that allows a component to share
        its internal state and functionality with other components by passing a
        function as a prop to be called by the child component.
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
        In this code, the `MousePosition` component is defined using the render
        props design pattern. The `MousePosition` component has a state value
        called `mousePosition` that is updated whenever the mouse moves inside
        the `div` element. The `MousePosition` component also has a
        `handleMouseMove` function that is called whenever the mouse moves
        inside the `div` element, and updates the `mousePosition` state value.
      </p>
      <p>
        The `MousePosition` component passes a function called `props.render` as
        a prop to the `div` element, which is called with the `mousePosition`
        state value as an argument. The `MousePosition` component also passes
        the `mousePosition` state value to the `MousePositionDisplay` component
        as props.
      </p>
      <p>
        The `MousePositionDisplay` component is defined as a function that
        displays the current mouse position. The `MousePositionDisplay`
        component receives the `x` and `y` values of the mouse position as
        props, and displays them in the `div` element.
      </p>
      <p>
        Overall, render props is a design pattern in React that allows a
        component to share its internal state and functionality with other
        components, by passing a function as a prop to be called by the child
        component. It is a useful tool for sharing and organizing internal state
        and functionality in a reusable way.
      </p>
    </>
  );
};
