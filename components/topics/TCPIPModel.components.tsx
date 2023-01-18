import { useEffect, useState } from 'react';
import { IoChevronForwardCircleSharp } from 'react-icons/io5';
import { MdNotes } from 'react-icons/md';
import { TCPIPModelMD } from './markdown/TCPIPModelMD.components';

export const TCPIPModel = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

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
              <span className="text-sm">TCP/IP Model</span>
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
            <span className="text-sm">TCP/IP Model</span>
          </div>
          <IoChevronForwardCircleSharp className="chevron-right" />
        </div>
      )}
      {isClicked ? (
        <>
          <div className="markdown-container flex flex-col gap-4 text-[16px]">
            <TCPIPModelMD />
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
