import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const APIMD = () => {
  const c1 = `
  import requests

  # Make an API call to the OpenWeatherMap API to get the current weather for London
  response = requests.get("http://api.openweathermap.org/data/2.5/weather?q=London&appid={YOUR_API_KEY}")
  
  # Print the response
  print(response.json())  
  `;
  const c2 = `
  class Calculator:
  def add(self,x,y):
      return x+y

  def sub(self,x,y):
      return x-y

  def mul(self,x,y):
      return x*y

  def div(self,x,y):
      return x/y

  calc = Calculator()
  print(calc.add(5,5))
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        An API, or Application Programming Interface, is a set of protocols,
        routines, and tools for building software and applications, allowing
        communication between different systems.
      </p>
      <p>
        An API can be thought of as a waiter at a restaurant. Just as a customer
        (the software) uses the menu (the API) to place an order (the function
        call), the kitchen (the system or program) receives the order and
        prepares the food (the data) for the customer to consume. The waiter
        (the API) acts as an intermediary, allowing the customer to interact
        with the kitchen without needing to know the inner workings of the
        kitchen.
      </p>
      <p>
        An API can be thought of as a set of rules and protocols for building
        and interacting with software. It specifies how software components
        should interact, and allows for communication between different systems.
        In most cases, an API is accessed over the Internet using the HTTP
        protocol. Here is an example of a basic API call using the popular
        Python library, requests:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        In this example, the requests.get() function is used to make an API call
        to the OpenWeatherMap API, and the response.json() function is used to
        print the response in a readable format.
      </p>
      <p>
        Another example, A simple example of an API, could be this code snippet
        in Python which defines a simple calculator class that has four methods
        which are add,sub,mul and div which performs basic mathematical
        operations :
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        This calculator class with its methods can be considered as an API which
        can be used by other parts of an application or even by other
        applications to perform basic mathematical operations.
      </p>
    </>
  );
};
