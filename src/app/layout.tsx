import './globals.scss';
import type { Metadata } from 'next';
import BackBtn from '@/components/backBtn';

export const metadata: Metadata = {
  title: 'Micro-projects',
  description: 'Micro-projects creted by ekzis',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
