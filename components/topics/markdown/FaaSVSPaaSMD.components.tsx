import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const FaaSVSPaaSMD = () => {
  const c1 = `
  def hello_world(event, context):
    return "Hello, World!"
  `;

  const c2 = `
  from flask import Flask
  app = Flask(__name__)
  
  @app.route("/")
  def hello():
      return "Hello World!"
  
  if __name__ == "__main__":
      app.run()  
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        FaaS (Function as a Service) is a cloud computing model in which the
        cloud provider is responsible for executing a piece of code, while PaaS
        (Platform as a Service) provides a platform for the user to deploy, run
        and manage their own applications and services.
      </p>

      <p>
        FaaS can be compared to ordering a meal at a restaurant, where the
        customer simply tells the chef what they want and the chef takes care of
        the rest, from ingredient sourcing to preparation and presentation. PaaS
        can be compared to renting a fully-equipped kitchen, where the customer
        is given the tools, equipment and space to cook their own meal, but the
        facility and infrastructure is still maintained by the provider.
      </p>

      <h2 className="font-semibold">FaaS:</h2>
      <p>
        Here is an example of a simple &quot;Hello World&quot; function written
        in Python using AWS Lambda, a popular FaaS (Function as a Service)
        platform:
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        In this example, the user is only responsible for writing the function,
        and the FaaS provider (AWS Lambda) is responsible for the underlying
        infrastructure and scaling, and the triggers of the function.
      </p>
      <h2 className="font-semibold">PaaS:</h2>
      <p>
        Here is an example of a simple &quot;Hello World&quot; web application
        written in Python using Heroku, a popular PaaS (Platform as a Service)
        platform:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        In this example, the user is responsible for the entire application,
        including writing the code, configuring the runtime and deploying the
        app. The PaaS provider (Heroku) is responsible for providing the
        platform and underlying infrastructure, such as servers, network,
        storage etc.
      </p>
      <p>
        In a PaaS setting, setting up a Node.js server and writing out all the
        Express code imperatively is a common approach, where the user is
        responsible for writing the code that sets up and configures the server,
        routes, and handles requests and responses.
      </p>
      <p>
        On the other hand, in a FaaS setting, the user is typically more
        declarative and focuses on writing small, single-purpose functions that
        are triggered by specific events, such as an HTTP request or a message
        in a queue. The FaaS provider is responsible for scaling, provisioning,
        and managing the underlying infrastructure to run the functions. The
        user does not need to worry about the details of setting up and managing
        the server, and can focus on just writing the code for the function.
      </p>
    </>
  );
};
