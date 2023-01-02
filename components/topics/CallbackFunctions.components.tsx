import { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';
import { Code } from '../Code.components';
import { IoChevronForwardCircleSharp } from 'react-icons/io5';
import { MdNotes } from 'react-icons/md';

export const CallbackFunctions = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [markdown, setMarkdown] = useState<string>('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const res = await fetch(`/docs/callbackFunctions.md`);
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
            className="flex items-center gap-2 cursor-pointer w-fit group"
          >
            <MdNotes className="mb-[1.5px]" />
            <span className="text-sm">Callback Functions</span>
            <IoChevronForwardCircleSharp className="cursor-pointer text-lg rotate-90 text-[#FFC58E] bg-[#2b2b2b] rounded-full group-hover:text-white ml-1" />
          </div>
        </>
      ) : (
        <div
          onClick={() => setIsClicked(!isClicked)}
          className="flex items-center gap-2 cursor-pointer w-fit group"
        >
          <MdNotes className="mb-[1.5px]" />
          <span className="text-sm">Callback Functions</span>
          <IoChevronForwardCircleSharp className="cursor-pointer text-lg group-hover:text-white group-hover:text-lg group-hover:bg-black bg-black text-[#9b9ea6]  rounded-full ml-1" />
        </div>
      )}
      {isClicked ? (
        <>
          <div className="bg-[#d6d9de] pl-10 pr-8 pt-5 pb-8 rounded-xl transition-all duration-600 ease-in-out font-serif mb-10 mt-1">
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
