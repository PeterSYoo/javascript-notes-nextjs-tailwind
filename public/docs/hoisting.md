During the global execution context, hoisting occurs before any code is executed. This means that all declarations of variables and functions are automatically moved to the top of the global scope, regardless of where they are actually defined in the code.
<br/><br/>
For example, consider the following code:

<Code language='javascript'>

console.log(x);
var x = 5;

function foo() {
&nbsp;&nbsp;console.log(y);
&nbsp;&nbsp;var y = 10;
}

foo();
</Code>

Because of hoisting, the code is actually equivalent to the following:

<Code language='javascript'>

var x;

function foo() {
&nbsp;&nbsp;var y;
&nbsp;&nbsp;console.log(y);
&nbsp;&nbsp;y = 10;
}

console.log(x);
x = 5;
foo();

</Code>

This means that the declarations of `x` and `y` are moved to the top of their respective scopes, and the assignments of `5` to `x` and `10` to `y` are left in their original positions.
<br/><br/>
It's important to note that hoisting only affects declarations, not assignments. In the example above, the assignments of `5` to `x` and `10` to `y` still occur at the locations where they are written in the code.
<br/><br/>
Hoisting was implemented in JavaScript to make it easier to write code. By moving declarations to the top of the scope, it allows developers to write code in a more logical order, without having to worry about the order of declarations. While hoisting is a feature of JavaScript that can make it easier to write code, it can also lead to some unexpected behavior if not used carefully. It is generally considered a good practice to write your code in the order of declarations rather than relying on hoisting. This will make your code easier to understand and debug, and will help ensure that your code behaves as expected.
<br/><br/>
By declaring all variables at the top of their respective scopes, you can avoid any confusion or unexpected behavior caused by hoisting. This will make it clear to anyone reading your code which variables are being used and where they are declared, which can be especially important in larger codebases.
<br/><br/>
Of course, there may be times when you want to take advantage of hoisting to simplify your code or make it easier to write. In these cases, it's important to be aware of how hoisting works and to use it carefully to avoid any unexpected behavior.
<br/><br/>
1 example of what happens during JavaScript development is that you might use an editor like VS Code. If you are using a framework like NextJS, NextJS will automatically transpile, parse, and execute the code for you. It uses tools like Babel and Webpack to transpile and parse your code. It will also handle execution of your code, when a user requests a page in your NextJS app the framework will execute the code needed to render the page on the server, and send the resulting HTML to the browser. This allows your app to be server-rendered.
