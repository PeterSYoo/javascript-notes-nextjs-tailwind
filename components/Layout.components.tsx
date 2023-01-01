import { Montserrat } from '@next/font/google';
import Head from 'next/head';
import { Header } from './Header.components';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={montserrat.variable}>
      <Head>
        <title>Peter&apos;s JavaScript Notes</title>
        <meta name="description" content="Peter's JavaScript Notes" />
      </Head>
      <body>
        <main className="min-w-screen flex min-h-screen flex-col bg-[#BEC1CA] font-montserrat">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
};
