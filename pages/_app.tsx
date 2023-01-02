import '../styles/globals.css';
import '../styles/markdown.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout.components';
import { useEffect, useState } from 'react';
import { Router } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const [isHydrate, setIsHydrate] = useState<boolean>(false);

  useEffect(() => {
    setIsHydrate(true);
  }, []);

  if (!isHydrate) return null;
  if (isHydrate) {
    return (
      <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}
