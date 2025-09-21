import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'TipOnLike - Turn your likes into tips',
  description: 'A Base MiniApp that allows content creators to earn tips through like interactions on their posts.',
  openGraph: {
    title: 'TipOnLike',
    description: 'Turn your likes into tips – effortlessly.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TipOnLike',
    description: 'Turn your likes into tips – effortlessly.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="gradient-bg min-h-screen">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
