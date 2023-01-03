import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { RxCopy, RxClipboard } from 'react-icons/rx';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useEffect, useState } from 'react';

export const Code = ({ children, language }: any) => {
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <div className="relative mt-1 mb-5">
      <CopyToClipboard text={children} onCopy={() => setCopied(true)}>
        {copied ? (
          <button className="absolute top-2.5 right-4 z-20 text-white transition-all duration-600 ease-in-out text-lg">
            <RxClipboard />
          </button>
        ) : (
          <button className="absolute top-2.5 right-4 z-20 text-[#FFC58E] hover:text-white transition-all duration-600 ease-in-out text-lg">
            <RxCopy />
          </button>
        )}
      </CopyToClipboard>

      <SyntaxHighlighter language={language} style={darcula}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};
