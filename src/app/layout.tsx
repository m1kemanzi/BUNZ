'use client';

import './globals.css';
import { Inter, Pacifico } from 'next/font/google';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en" className={`${inter.variable} ${pacifico.variable}`}>
      <body className="min-h-screen flex flex-col">
        <AnimatePresence mode="wait">
          <main key={pathname} className="flex-grow">
            {children}
          </main>
        </AnimatePresence>
      </body>
    </html>
  );
} 