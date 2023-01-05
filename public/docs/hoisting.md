_"In JavaScript, hoisting is the behavior of moving declarations to the top of the current scope, which means that declarations of variables and functions can be used before they are actually defined in the code."_

<br/>
Imagine that hoisting is like a stagehand setting up props and scenery before a play. The stagehand brings all of the necessary elements onto the stage and arranges them in the appropriate places before the play begins.

<br/>
In the same way, hoisting in JavaScript involves bringing variables and functions to the top of their respective scope and making them available before the code is executed. Just as the stagehand makes sure that everything is in place and ready to go before the play begins, hoisting ensures that variables and functions are available and ready to be used when the code is executed.

<br/>
However, just as the stagehand does not actually perform any actions during the play (that is the job of the actors), variables and functions that are hoisted are not actually executed until the code reaches their respective declarations. Hoisting simply makes them available and ready to be used when the time comes.

<br/>
During the global execution context, hoisting occurs before any code is executed. This means that all declarations of variables and functions are automatically moved to the top of the global scope, regardless of where they are actually defined in the code.
<br/><br/>
For example, consider the following code:

<Code language='javascript'>

console.log(x);
var x = 5;

function foo() {
&nbsp;console.log(y);
&nbsp;var y = 10;
}

foo();
</Code>

Because of hoisting, the code is actually equivalent to the following:

<Code language='javascript'>

var x;

function foo() {
&nbsp;var y;
&nbsp;console.log(y);
&nbsp;y = 10;
}

console.log(x);
x = 5;
foo();

</Code>

This means that the declarations of `x` and `y` are moved to the top of their respective scopes, and the assignments of `5` to `x` and `10` to `y` are left in their original positions.

<br/>
It's important to note that hoisting only affects declarations, not assignments. In the example above, the assignments of `5` to `x` and `10` to `y` still occur at the locations where they are written in the code.

<br/>
It's also important to note that `let` and `const` declarations are block-scoped and are not hoisted in JavaScript. This means that they are only accessible within the block in which they are defined, and you cannot use a `let` or `const` variable before declaring it. In contrast, `var` declarations are function-scoped and are hoisted, so they can be accessed throughout the entire function in which they are defined.

<br/>
When you declare a `let` or `const` variable in the global execution context (i.e. outside of any functions or blocks), the JavaScript engine creates a new lexical environment for the variable. This lexical environment is essentially a new block that surrounds the variable declaration, and the variable is only accessible within this block.

<br/>
Here's an example that illustrates what is happening in the background when you declare a `let` variable in the global execution context:

<Code language='javascript'>

let x = 5;

// Behind the scenes, the JavaScript engine creates a new lexical environment for the variable:
{
&nbsp;let x = 5;
}
</Code>

In this example, the `let` variable `x` is declared in the global execution context, but behind the scenes, the JavaScript engine creates a new lexical environment for the variable that acts as a new block surrounding the variable declaration. As a result, the `let` variable `x` is only accessible within this block and is not accessible from outside of the block.

<br/>
Hoisting was implemented in JavaScript to make it easier to write code. By moving declarations to the top of the scope, it allows developers to write code in a more logical order, without having to worry about the order of declarations. While hoisting is a feature of JavaScript that can make it easier to write code, it can also lead to some unexpected behavior if not used carefully. It is generally considered a good practice to write your code in the order of declarations rather than relying on hoisting. This will make your code easier to understand and debug, and will help ensure that your code behaves as expected.
