import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const BestPracticeURIRESTfulServicesMD = () => {
  const c1 = `
  const express = require('express');
  const app = express();
  
  // Create a route for the root URI
  app.get('/', (req, res) => {
      res.send('Welcome to the RESTful API');
  });
  
  // Create a route for the /users URI
  app.get('/users', (req, res) => {
      // Code to retrieve a list of users from the database goes here
      const users = [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}];
      res.json(users);
  });
  
  // Create a route for the /users/:id URI
  app.get('/users/:id', (req, res) => {
      // Code to retrieve a specific user from the database goes here
      const user = {id: req.params.id, name: 'John'};
      res.json(user);
  });
  
  app.listen(3000, () => {
      console.log('Server started on port 3000');
  });
  `;

  return (
    <>
      <p>
        Some best practices for designing URIs for RESTful web services include:
      </p>
      <ol className="list-decimal ml-5">
        <li>
          Use nouns, not verbs: URIs should refer to resources, not actions. For
          example, use &quot;/users&quot; instead of &quot;/getUsers&quot;.
        </li>
        <li>
          Use a hierarchical structure: URIs should reflect the hierarchical
          structure of the resources they refer to. For example, use
          &quot;/users/123&quot; to refer to a specific user, rather than
          &quot;/user?id=123&quot;.
        </li>
        <li>
          Use a consistent structure: All URIs should have a consistent
          structure, making it easier for developers to understand and use the
          API.
        </li>
        <li>
          Use a version number: A version number in the URI can help prevent
          breaking changes when the API is updated. For example, use
          &quot;/v1/users&quot; instead of &quot;/users&quot;.
        </li>
      </ol>
      <p>
        Here&apos;s an example of how to implement a RESTful web service in
        Node.js using the Express.js framework:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        This example creates a simple RESTful API with two routes: one for
        retrieving a list of users, and another for retrieving a specific user
        by ID. The req.params object is used to access the value of the :id
        parameter in the URI.
      </p>
    </>
  );
};
