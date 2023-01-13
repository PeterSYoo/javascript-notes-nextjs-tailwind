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
    </>
  );
};
