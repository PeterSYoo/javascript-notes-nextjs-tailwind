import { Montserrat } from '@next/font/google';
import Head from 'next/head';
import { Footer } from './Footer.components';
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
        <main className="min-w-screen flex min-h-screen flex-col bg-[#ced0d5] font-montserrat">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};
