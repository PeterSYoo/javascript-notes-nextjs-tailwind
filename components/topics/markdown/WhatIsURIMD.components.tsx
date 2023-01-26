import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const WhatIsURIMD = () => {
  const c1 = `
  let url = new URL("https://www.example.com/path?query=value#fragment");

  console.log(url);
  `;
  const c2 = `
  let urn = "urn:isbn:096139210x";

  console.log(urn);
  `;

  return (
    <>
      <p>
        A URI (Uniform Resource Identifier) is a string of characters that
        identify a name or a resource on the Internet. URIs can be broken down
        into two types: URLs (Uniform Resource Locators) and URNs (Uniform
        Resource Names). URLs are the web addresses that you typically think of
        when you think of a URI (e.g., &quot;https://www.example.com&quot;), and
        they specify the location of a resource on the Internet. URNs, on the
        other hand, are used to identify resources by their name rather than
        their location, and are often used to identify resources that are not
        available on the Internet.
      </p>
      <p>Here&apos;s an example of creating a URL in JavaScript:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        In this example, the URL
        &quot;https://www.example.com/path?query=value#fragment&quot; is used to
        identify a specific resource on the Internet, it contains the protocol
        (https), domain name (www.example.com), path (/path), query string
        (?query=value) and fragment (#fragment)
      </p>
      <p>
        Also, you can create a URL object by passing the URL as a string to the
        constructor of the URL class. This class provides various methods to
        work with the different parts of the URL, such as .protocol, .hostname,
        .pathname, .search and .hash for accessing the protocol, hostname, path,
        query string, and fragment respectively.
      </p>
      <p>
        Please note that the URL class is only supported in modern web browsers,
        it may not be available in older browsers or in Node.js environment.
      </p>

      <p>Here&apos;s an example of creating a URN in JavaScript:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        In this example, the URN &quot;urn:isbn:096139210x&quot; is used to
        identify a book by its ISBN number. Note that URNs do not specify the
        location of a resource and often used to identify resources that are not
        available on the Internet. URNs are mainly used in the context of
        digital asset management and resource identification within databases,
        rather than on the web.
      </p>
      <p>
        Also, it&apos;s worth noting that JavaScript doesn&apos;t have a
        built-in class or object for working with URNs specifically, you can use
        a string variable as shown above to represent URN.
      </p>
    </>
  );
};
