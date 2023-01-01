import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { IoChevronForwardCircleSharp } from 'react-icons/io5';
import { MdNotes } from 'react-icons/md';

export const GlobalExecutionContext = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [markdown, setMarkdown] = useState<string>('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      const res = await fetch(`/docs/globalExecutionContext.md`);
      const markdownString = await res.text();
      setMarkdown(markdownString);
    };

    fetchMarkdown();
  }, []);

  return (
    <>
      {isClicked ? (
        <div
          onClick={() => setIsClicked(!isClicked)}
          className="flex items-center gap-3 cursor-pointer w-fit group"
        >
          <MdNotes className="text-lg mb-[1.5px]" /> Global Execution Context
          <IoChevronForwardCircleSharp className="cursor-pointer text-lg rotate-90 transition-all duration-600 ease-in-out text-[#ff7751] bg-black rounded-full group-hover:text-white" />
        </div>
      ) : (
        <div
          onClick={() => setIsClicked(!isClicked)}
          className="flex items-center gap-3 cursor-pointer w-fit group"
        >
          <MdNotes className="text-lg mb-[1.5px]" /> Global Execution Context
          <IoChevronForwardCircleSharp className="cursor-pointer text-xl transition-all duration-600 ease-in-out group-hover:text-white group-hover:text-lg group-hover:bg-black rounded-full" />
        </div>
      )}
      {isClicked ? (
        <>
          <div className="bg-gradient-to-b from-[#BEC1CA] to-white px-8 my-2 pt-5 pb-8 rounded-xl transition-all duration-600 ease-in-out">
            {/* eslint-disable-next-line */}
            <ReactMarkdown children={markdown} className="markdown" />
          </div>
        </>
      ) : null}
    </>
  );
};
