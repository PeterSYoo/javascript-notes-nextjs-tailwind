import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const MetaDataMD = () => {
  const c1 = `
  <meta name="description" content="A short description of the page">
  <meta name="keywords" content="a list of, comma separated, keywords">
  `;

  return (
    <>
      <p>
        Metadata is data that describes other data. In the context of the World
        Wide Web, it is typically used to provide information about a web page,
        such as its title, description, and keywords. This information can be
        used by search engines and other tools to better understand the content
        of the page and to improve its ranking in search results.
      </p>

      <p>
        One common way to include metadata in a web page is to use meta tags.
        Meta tags are HTML tags that can be added to the head of an HTML
        document. They are typically used to provide information about the page,
        such as its title, description, and keywords. The most common types of
        meta tags used for SEO (Search Engine Optimization) are
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        Search engines use this data to better understand the content of the
        page and to determine how it should be ranked in search results. For
        example, if a search query matches a keyword in the metadata of a web
        page, the search engine may return that page in its results. Metadata
        can also be used by social media platforms, such as Facebook and
        Twitter, to generate previews when a web page is shared.
      </p>

      <p>
        In summary, metadata helps Search engines to understand the context of
        the webpage&apos;s content and improve the webpage&apos;s ranking in
        search results, it is important aspect of SEO, but it&apos;s not the
        only one.
      </p>
    </>
  );
};
