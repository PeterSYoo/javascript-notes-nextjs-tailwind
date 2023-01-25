import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const HowAreRestAPIsStatelessMD = () => {
  const c1 = `
  const express = require('express');
  const app = express();
  const port = 3000;
  
  let todoList = [];
  
  app.use(express.json());
  
  app.get('/todos', (req, res) => {
      res.json(todoList);
  });
  
  app.post('/todos', (req, res) => {
      let newTodo = req.body;
      todoList.push(newTodo);
      res.json(newTodo);
  });
  
  app.put('/todos/:id', (req, res) => {
      let id = req.params.id;
      let updatedTodo = req.body;
      todoList[id] = updatedTodo;
      res.json(updatedTodo);
  });
  
  app.delete('/todos/:id', (req, res) => {
      let id = req.params.id;
      todoList.splice(id, 1);
      res.json({message: 'Todo deleted'});
  });
  
  app.listen(port, () => {
      console.log('API listening on port ' + port);
  });  
  `;

  return (
    <>
      <p>
        REST (Representational State Transfer) APIs are stateless because they
        do not maintain any information about previous requests. Each request is
        treated independently and is handled based on the information that is
        included in the request itself, without reference to any previous
        requests. This means that the server does not keep any information about
        the client&apos;s session, and the client must include all necessary
        information with each request in order for the server to understand and
        process it. This allows for greater flexibility and scalability, as the
        server does not need to maintain any state or context about the
        client&apos;s session, but it also means that the client needs to handle
        any necessary state or context.
      </p>
      <p>
        here&apos;s an example of a simple REST API built with Node.js and the
        Express framework that implements a simple &quot;todo&quot; list:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        This example uses the Express framework to handle routing and HTTP
        requests. The app.get() method handles GET requests to the /todos
        endpoint, and returns the current todo list as a JSON object. The
        app.post() method handles POST requests to the /todos endpoint, and adds
        a new todo to the list based on the data included in the request body.
        The app.put() method handles PUT requests to the /todos/:id endpoint,
        and updates the todo with the specified id based on the data included in
        the request body. Finally, the app.delete() method handles DELETE
        requests to the /todos/:id endpoint, and deletes the todo with the
        specified id.
      </p>
      <p>
        As you can see, the server doesn&apos;t keep any information about the
        client&apos;s session, it&apos;s only handling the requests based on the
        information that is included in the request itself.
      </p>
    </>
  );
};
