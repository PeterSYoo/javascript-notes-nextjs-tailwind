import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const HTMLSemanticTagsMD = () => {
  const c1 = `
  `;

  return (
    <>
      <p>
        HTML semantic tags are tags in HTML that provide meaning to the
        structure of web content. They are used to describe the type of content
        contained within an HTML element. Examples of semantic tags include the{' '}
        {`<header>`} tag, the {`<nav>`} tag, the {`<article>`} tag, and the{' '}
        {`<footer>`} tag.
      </p>

      <p>
        The main reason for using semantic tags is to make the structure of web
        content more meaningful to both users and search engines. By using
        semantic tags, developers can provide context for the content on a page,
        which makes it easier for users to understand and for search engines to
        index.
      </p>

      <p>
        For example, when a search engine crawls a page, it can use the semantic
        tags to understand the different sections of the page and their
        relationships to one another. This can help the search engine to better
        understand the content on the page and provide more relevant results to
        users.
      </p>

      <p>
        In addition to improving the search engine&apos;s understanding of the
        content, semantic tags also improve the accessibility of a website.
        Assistive technologies can use the semantic tags to understand the
        structure of the web page and provide appropriate navigation to users.
      </p>

      <p>
        In summary, semantic tags make web content more meaningful to users and
        search engines, and make websites more accessible to people with
        disabilities by providing context and appropriate navigation.
      </p>

      <p>
        Here is a list of some of the most commonly used HTML semantic tags:
      </p>

      <ol className="list-decimal ml-5">
        <li>{'<header>'}: Defines a header for a document or section.</li>
        <li>{'<nav>'}: Defines navigation links.</li>
        <li>
          {'<article>'}: Defines a self-contained piece of content, such as a
          blog post or forum post.
        </li>
        <li>
          {'<section>'}: Defines a section of a document, such as chapters,
          headings, or blocks of related content.
        </li>
        <li>
          {'<aside>'}: Defines content that is related to the main content, but
          not essential for understanding it.
        </li>
        <li>
          {'<figure>'}: Defines a container for content, such as images or
          diagrams, that can be referred to from the main content.
        </li>
        <li>
          {'<figcaption>'}: Defines a caption for a {'<figure>'} element.
        </li>
        <li>{'<footer>'}: Defines a footer for a document or section.</li>
        <li>{'<main>'}: Defines the main content of a document.</li>
        <li>{'<mark>'}: Defines marked/highlighted text.</li>
        <li>{'<time>'}: Defines a date/time.</li>
        <li>
          {'<address>'}: Defines the contact information for the author/owner of
          a document.
        </li>
      </ol>
      <p>
        There are other semantic tags available in HTML5 such as {`<figure>`},{' '}
        {`<figcaption>`}, {`<mark>`}, {`<time>`}, {`<address>`}, {`<dialog>`}{' '}
        and {`<details>`} which are less widely used but still useful on certain
        cases. It&apos;s worth mentioning that there are also other semantic
        tags like {`<figure>`} and {`<figcaption>`} which could be used to
        provide more context to certain content, like images and diagrams, which
        are related to the main content but not essential for understanding it.
      </p>
    </>
  );
};
