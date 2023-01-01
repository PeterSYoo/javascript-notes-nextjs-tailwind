import '../styles/globals.css';
import '../styles/index.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="min-w-screen flex min-h-screen flex-col">
        <Component {...pageProps} />
      </div>
    </>
  );
}
