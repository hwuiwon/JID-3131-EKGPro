import '@/styles/tailwind.css';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'EKG Pro',
  description: 'Making your life easier',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
