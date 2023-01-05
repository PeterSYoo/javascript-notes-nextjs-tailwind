_"In JavaScript, a promise is an object that represents the eventual completion or failure of an asynchronous operation, and it allows the associated asynchronous code to be handled in a synchronous-looking way."_

<br/>
Imagine you're at a party and you've just been asked to make a speech. You agree to do it, but you're not quite ready yet, so you tell the person who asked you that you'll let them know when you're ready. In this situation, the person who asked you to give the speech is like the JavaScript runtime, and you are like a function that returns a promise. When you tell the person that you'll let them know when you're ready, you're returning a pending promise, just like a function returns a pending promise when it is called.

<br/>
Now, let's say that you need to gather some information from a few friends before you can give your speech. You ask your friends for the information, and then you tell the person who asked you to give the speech that you'll let them know when you have everything you need. In this situation, your friends are like the Web API, and the information you're gathering from them is like a value that is returned by a promise.

<br/>
Once you have everything you need, you let the person who asked you to give the speech know that you're ready. They then add you to the task queue, just like the JavaScript runtime adds a callback function to the task queue when a promise is resolved. The event loop then checks the task queue for any pending tasks, and when it finds you (the callback function), it moves you to the call stack and you give your speech.

<br/>
In JavaScript, a Promise is an object that represents the eventual completion or failure of an asynchronous operation. The Promise constructor takes a function called an "executor function" as an argument. The executor function has two arguments, resolve and reject. When the async operation is complete, the executor should call the resolve function to resolve the promise. If the async operation fails, it should call the reject function instead.

<br/>
Here's an example of a Promise that wraps a timer function:

<Code language='javascript'>

const myPromise = new Promise((resolve, reject) => {
&nbsp;setTimeout(() => {
&nbsp;&nbsp;resolve('I resolved!');
&nbsp;}, 1000);
});
</Code>

Once a Promise is resolved or rejected, it can't be resolved or rejected again. This is known as the "immutable" property of Promises.

<br/>
A Promise can be consumed by calling its then method, which takes two arguments: a callback function to be executed when the Promise is resolved, and a callback function to be executed when the Promise is rejected.

<Code language='javascript'>

myPromise.then(
&nbsp;(resolvedValue) => {
&nbsp;&nbsp;console.log(resolvedValue);
&nbsp;},
&nbsp;(rejectionReason) => {
&nbsp;&nbsp;console.log(rejectionReason);
&nbsp;}
);
</Code>

In relation to the event loop, Promises allow async code to be executed in a synchronous-like manner. When an async operation is initiated, the event loop continues to run, allowing other code to be executed in the meantime. When the Promise is resolved or rejected, the event loop can process the appropriate callback function, which will be added to the call stack. This helps to avoid the use of callback hell and makes async code easier to read and debug.

<br/>
A real-world example of a Promise being rejected might be an HTTP request that fails due to a network error or a server error. For example, suppose you have a function that makes an HTTP GET request to a server to retrieve some data. You could use a Promise to handle the asynchronous nature of the request, and reject the Promise if the request fails:

<Code language='javascript'>

function getData() {
&nbsp;return new Promise((resolve, reject) => {
&nbsp;&nbsp;const xhr = new XMLHttpRequest();
&nbsp;&nbsp;xhr.open('GET', '/my-data');
&nbsp;&nbsp;xhr.onload = () => {
&nbsp;&nbsp;&nbsp;if (xhr.status === 200) {
&nbsp;&nbsp;&nbsp;&nbsp;resolve(xhr.response);
&nbsp;&nbsp;&nbsp;} else {
&nbsp;&nbsp;&nbsp;&nbsp;reject(new Error('Request failed with status code: ' + xhr.status));
&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;};
&nbsp;&nbsp;xhr.onerror = () => {
&nbsp;&nbsp;&nbsp;reject(new Error('Network error'));
&nbsp;&nbsp;};
&nbsp;&nbsp;xhr.send();
&nbsp;});
}
</Code>

You could then consume the Promise by calling its then method and providing a rejection callback function to handle the error:

<Code language='javascript'>

getData()
&nbsp;.then((response) => {
&nbsp;&nbsp;console.log(response);
&nbsp;})
&nbsp;.catch((error) => {
&nbsp;&nbsp;console.error(error);
&nbsp;});
</Code>
