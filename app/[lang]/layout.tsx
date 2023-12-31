import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import cn from '@/lib/util';
import { Locale, i18n } from '@/i18n.config';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang ?? 'en'}>
      <body className={cn(inter.className)}>{children}</body>
    </html>
  );
}
