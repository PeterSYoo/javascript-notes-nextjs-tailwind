import { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';
import { Code } from '../Code.components';
import { IoChevronForwardCircleSharp } from 'react-icons/io5';
import { MdNotes } from 'react-icons/md';

export const GlobalLexicalEnvironment = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [markdown, setMarkdown] = useState<string>('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const res = await fetch(`/docs/globalLexicalEnvironment.md`);
        const markdownString = await res.text();
        setMarkdown(markdownString);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMarkdown();
  }, []);

  return (
    <>
      {isClicked ? (
        <>
          <div
            onClick={() => setIsClicked(!isClicked)}
            className="isClicked-true"
          >
            <div className="flex items-center gap-5">
              <MdNotes className="mb-[1.5px]" />
              <span className="text-sm">Global Lexical Environment</span>
            </div>
            <IoChevronForwardCircleSharp className="chevron-down" />
          </div>
        </>
      ) : (
        <div
          onClick={() => setIsClicked(!isClicked)}
          className="isClicked-false"
        >
          <div className="flex items-center gap-5">
            <MdNotes className="mb-[1.5px]" />
            <span className="text-sm">Global Lexical Environment</span>
          </div>
          <IoChevronForwardCircleSharp className="chevron-right" />
        </div>
      )}
      {isClicked ? (
        <>
          <div className="markdown-container">
            <Markdown
              options={{
                overrides: {
                  Code: {
                    component: Code,
                  },
                },
              }}
              className="markdown"
            >
              {markdown}
            </Markdown>
            <div className="flex mt-10">
              <button
                onClick={() => setIsClicked(!isClicked)}
                className="font-montserrat border py-3 rounded-lg border-[#787878] hover:bg-[#2b2b2b] hover:text-[#FFC58E] transition-all duration-100 ease-in-out text-sm hover:border-transparent w-full text-[#2b2b2b]"
              >
                Close
              </button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
