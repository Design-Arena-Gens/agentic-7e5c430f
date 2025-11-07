import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Stay Tuned: The Tiger — Concept Film Bible',
  description:
    'Immersive concept treatment and prompt-ready scene breakdown for a forthcoming luxury fashion brand film, inspired by Gucci\'s Stay Tuned: THE TIGER.',
  openGraph: {
    title: 'Stay Tuned: The Tiger — Concept Film Bible',
    description:
      'Immersive concept treatment and prompt-ready scene breakdown for a forthcoming luxury fashion brand film, inspired by Gucci\'s Stay Tuned: THE TIGER.',
    url: 'https://agentic-7e5c430f.vercel.app',
    siteName: 'Stay Tuned: The Tiger — Concept Film Bible',
    type: 'website'
  }
};

export const viewport: Viewport = {
  themeColor: '#060606'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
