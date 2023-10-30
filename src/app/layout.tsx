import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import ThemeSwitcher from '../components/theme-switcher';
import Providers from '../providers/Providers';

import 'mapbox-gl/dist/mapbox-gl.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Censai',
  description: 'An interactive map of the United States.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <body
        className={`${inter.className} relative pt-28 sm:pt-36`}
        // bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <Providers>
          {children}
          <Toaster position="top-right" />
          <ThemeSwitcher />
        </Providers>
      </body>
    </html>
  );
}
