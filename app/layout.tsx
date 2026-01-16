// app/layout.tsx
import './globals.css';
import { Permanent_Marker } from 'next/font/google';

const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-marker',
});

export const metadata = {
  title: 'Resume',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={permanentMarker.variable}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
  