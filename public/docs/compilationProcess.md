_"In JavaScript, the compilation process involves converting the source code written in JavaScript into machine code that can be executed by the computer's processor."_

<br/>
The compilation process typically involves the following steps:

<br/>
1. **Transpiling**: Before a JavaScript program is run, it may go through a transpilation process if it uses features that are not supported by the web browser or runtime environment in which it will be executed. For example, the program might use a syntax or feature that is only available in the latest version of JavaScript, but the user's web browser only supports an older version. In this case, the program would be transpiled (i.e., converted) into a version of JavaScript that is compatible with the user's browser.
2. **Parsing**: Once the JavaScript code has been transpiled (if necessary), it is passed through a parser, which analyzes the code and generates an abstract syntax tree (AST) representation of its structure. The AST is a tree-like structure that represents the program's code in a way that is easier for the computer to process.
3. **Executing**: After the JavaScript program has been parsed and an AST has been generated, it can be executed by the web browser or runtime environment. This involves carrying out the instructions written in the program, in the order that they are written. The results of the program's execution can be seen by the user through the program's output (e.g., changes to the web page, user interactions, etc.).

<br/>
For this example, let's use Next.js, the framework that this app is using.

<br/>
Next.js is a framework for building server-rendered or statically exported React applications. One of the key features of Next.js is that it handles the transpiling, parsing, and execution of your code for you, so you can focus on writing your application.

<br/>
When you create a Next.js app, the framework will automatically transpile and parse your code using tools like Babel and Webpack. This allows you to use the latest features of JavaScript (or other languages) and still have your code work in older browsers or runtime environments.

<br/>
Next.js also handles the execution of your code for you. When a user requests a page in your Next.js app, the framework will execute the code needed to render the page on the server, and send the resulting HTML to the browser. This allows your app to be server-rendered, which can improve the performance and SEO of your app.

<br/>
Next.js also provides features for statically exporting your app, which allows you to pre-render the HTML of your pages and serve them directly from a CDN. This can be useful for increasing the performance and scalability of your app.
