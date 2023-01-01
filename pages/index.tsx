import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import { Header } from '../components/Header.components';

const Home = () => {
  const [markdown, setMarkdown] = useState<string>('');
  const [appUrl] = useState<string>(process.env.NEXT_PUBLIC_APP_URL || '');

  useEffect(() => {
    const fetchMarkdown = async () => {
      const res = await fetch(`${appUrl}/docs/hello-world.md`);
      const markdownString = await res.text();
      setMarkdown(markdownString);
    };

    fetchMarkdown();
  }, []);

  console.log(markdown);

  return (
    <>
      <div className="flex-grow">
        <Header />
        <div className="flex flex-col max-w-[75%] w-full mx-auto">
          {/* eslint-disable-next-line */}
          <ReactMarkdown children={markdown} className="markdown" />
        </div>
      </div>
    </>
  );
};

export default Home;
