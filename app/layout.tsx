import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Bot Generator | Build Your Bot in 30 Seconds',
  description: 'Create your own AI bot without coding. Collect contacts for early access to our AI bot generator.',
  openGraph: {
    title: 'AI Bot Generator | Build Your Bot in 30 Seconds',
    description: 'Test the AI bot generator and build your own bot without code.',
    url: 'https://example.com',
    siteName: 'AI Bot Generator',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
        width: 1200,
        height: 630,
        alt: 'AI bot generator hero'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Bot Generator',
    description: 'Create your own AI bot in 30 seconds without coding.',
    images: ['https://images.unsplash.com/photo-1504384308090-c894fdcc538d']
  },
  keywords: ['AI bot', 'no-code bot builder', 'chatbot generator', 'landing page'],
  metadataBase: new URL('https://example.com')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-midnight text-white">
      <body>
        <div className="fixed inset-0 -z-10 bg-grid-glow bg-[length:120px_120px] opacity-40" aria-hidden />
        {children}
      </body>
    </html>
  );
}
