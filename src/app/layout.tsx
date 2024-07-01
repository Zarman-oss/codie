import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Codie',
  description: 'Code Snippet app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='bg-slate-900'>
      <head>
        <link rel='icon' href='/icon.ico' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
