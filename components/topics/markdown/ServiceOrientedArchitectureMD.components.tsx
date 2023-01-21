import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const ServiceOrientedArchitectureMD = () => {
  const c1 = `
  from suds.client import Client

  # create a SOAP client
  url = "http://www.example.com/calculator?wsdl"
  client = Client(url)
  
  # call the add service
  result = client.service.add(2, 3)
  print(result) # 5
  
  # call the divide service
  result = client.service.divide(6, 3)
  print(result) # 2  
  `;
  const c2 = `
  import requests

  # get list of users
  response = requests.get("http://www.example.com/users")
  users = response.json()
  
  # print the first user
  print(users[0])  
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        Service-Oriented Architecture (SOA) is an architectural pattern in which
        application components provide services to other components through a
        communication protocol, typically over a network.
      </p>
      <p>
        A common analogy for Service-Oriented Architecture (SOA) is a
        restaurant. In a restaurant, the kitchen (which represents the back-end
        services) prepares various dishes (services) which are then served to
        customers (the front-end) by waiters (or service providers) through a
        set of menus (or service contracts). Each dish is a standalone service
        that can be ordered and consumed independently, and the kitchen can
        prepare multiple dishes simultaneously to serve multiple customers. The
        restaurant can also add or change menu items (services) without
        affecting the overall operation.
      </p>
      <p>
        Service-Oriented Architecture (SOA) is a way of designing and building
        software systems that allows for loose coupling between the different
        components of the system, typically through the use of service
        interfaces and protocols.
      </p>
      <p>
        One example of a common protocol used in SOA is Simple Object Access
        Protocol (SOAP), which is a messaging protocol for exchanging structured
        data between applications over a network.
      </p>
      <p>
        A simple example of a SOAP service in Python could be a service that
        performs a calculation and returns the result.
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        Another example of a protocol that is used in SOA is Representational
        State Transfer (REST). REST is an architectural style and a set of
        constraints that are often applied when creating web services.
      </p>
      <p>
        A simple example of a REST service in Python could be a service that
        returns a list of users from a database,
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        These are just simple examples to give an idea of how service-oriented
        architecture can be implemented. In practice, SOA systems are often more
        complex and involve the use of service registries, message queues, and
        other technologies to manage communication and data flow between the
        different components of the system.
      </p>
    </>
  );
};
