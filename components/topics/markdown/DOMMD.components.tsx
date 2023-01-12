import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const DOMMD = () => {
  const c1 = ``;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;The Document Object Model (DOM) is a tree-like structure that
        represents the structure and content of a web page, and allows programs
        to manipulate the content and structure of the page.&quot;
      </p>
      <p>
        The Document Object Model (DOM) is a programming interface for HTML and
        XML documents. It represents the structure of a document as a tree-like
        hierarchy, with the document&apos;s elements (such as headings,
        paragraphs, and images) organized as nodes in the tree.
      </p>
      <p>
        The DOM allows programs to access and manipulate the content and
        structure of a document. For example, a program might use the DOM to
        change the text of a heading, add a new paragraph to a page, or delete
        an image.
      </p>
      <p>
        The DOM is not specific to a particular programming language or
        platform. Instead, it provides a standard set of APIs (Application
        Programming Interfaces) that can be used by any programming language to
        interact with a document. This means that programs written in different
        languages can all use the DOM to manipulate the same document.
      </p>
      <p>
        The DOM is an important part of how web pages are created and
        interactive. It allows programs to dynamically update the content and
        structure of a page in response to user input or other events, and it
        enables the creation of complex, interactive web applications.
      </p>
    </>
  );
};
