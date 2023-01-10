Higher-order components (HOCs) are a pattern in React that allow you to reuse code, logic, and props manipulation across components. They are created by taking a function that returns a component, and calling that function with an input component.

<br/>
Here's a simple example of an HOC that adds a prop to a component:

```

  import React from 'react';

  const withExtraProp = (WrappedComponent) => {
    return (props) => {
      return <WrappedComponent {...props} extraProp="Hello, I'm an extra prop!" />
    }
  }

  const MyComponent = (props) => {
    return (
      <div>
        {props.extraProp}
        <p>Hello, I'm the wrapped component!</p>
      </div>
    );
  }

  export default withExtraProp(MyComponent);

```

<br/>
Here, the withExtraProp function takes a WrappedComponent as an input, and returns a new component that adds the extraProp prop to the WrappedComponent when it's rendered.

<br/>
You can then use this HOC like any other component in your application:

```

  import EnhancedMyComponent from './withExtraProp';

  const App = () => {
    return (
      <div>
        <EnhancedMyComponent />
      </div>
    );
  }

```

<br/>
This will render the MyComponent with the extraProp prop, like so:

```

  <div>
    Hello, I'm an extra prop!
    <p>Hello, I'm the wrapped component!</p>
  </div>

```

<br/>
HOCs are a powerful pattern that can be used to abstract away repetitive logic and props manipulation, making your code more reusable and easier to maintain. Do you have any more questions about HOCs or functional components in React?
