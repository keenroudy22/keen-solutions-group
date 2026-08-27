import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://keensolutionsgroup.com'),
  title: 'Keen Solutions Group | Business Internet & Phone Solutions',
  description: 'Keen Solutions Group helps Central Indiana businesses compare, coordinate, and deploy reliable internet and phone services.',
  openGraph: {
    title: 'Keen Solutions Group',
    description: 'Business connectivity, made simple. Internet, voice, and connectivity guidance for Central Indiana businesses.',
    url: '/',
    siteName: 'Keen Solutions Group',
    images: [{ url: '/og.png', width: 1729, height: 910, alt: 'Keen Solutions Group — Business connectivity, made simple.' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keen Solutions Group',
    description: 'Business connectivity, made simple.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
