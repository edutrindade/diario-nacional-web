import type { Metadata } from 'next';
import { Barlow_Condensed } from 'next/font/google';
import './globals.css';

const barlowCondensed = Barlow_Condensed({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Diário Nacional',
  description: 'O seu diário de notícias',
  authors: [{ name: 'Eduardo Trindade' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang='en'>
      <body className={barlowCondensed.className}>{children}</body>
    </html>
  );
}
