export const AreBrowserApisRunningJavascriptMD = () => {
  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        Browser APIs are implemented in the browser and are usually written in a
        lower-level language, such as C++. They provide a interface for
        JavaScript code to access various browser features and functionality,
        such as making network requests, interacting with the DOM, and working
        with multimedia.
      </p>
      <p>
        When JavaScript sends a task to a Browser API for execution, the task is
        passed to the implementation of the API in the browser, which is written
        in a lower-level language. The task is then executed by the browser, and
        the result is passed back to the JavaScript code when it is completed.
        This allows JavaScript to perform complex tasks and access browser
        functionality without having to block the main thread of execution.
      </p>
      <p>
        It&apos;s worth noting that some newer browsers also support
        WebAssembly, which is a low-level language that can be compiled and run
        in the browser. WebAssembly can be used to perform complex tasks and can
        be called from JavaScript code using the same mechanisms as browser
        APIs.
      </p>
      <h2 className="font-semibold">
        Are Event Listeners considered side effects because it&apos;s calling a
        browser API?
      </h2>
      <p>
        Yes, event listeners are considered side effects because they involve an
        interaction with an external system (in this case, the browser). When a
        program sets an event listener, it is causing a callback function to be
        registered with the browser, and the callback function will be executed
        by the browser when the specified event occurs.
      </p>
      <p>
        In general, any interaction with an external resource or system can be
        considered a side effect. This can include reading or writing to a
        database, making an HTTP request, interacting with the filesystem, or
        even modifying the DOM. All of these actions have an impact outside of
        the immediate execution context of the program and are therefore
        considered side effects.
      </p>
      <p>
        It is important to manage side effects carefully in order to ensure that
        a program is predictable and easy to test. In some cases, it may be
        necessary to isolate and clearly identify side effects in order to make
        a program more manageable and maintainable.
      </p>
    </>
  );
};
