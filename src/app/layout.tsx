import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZuAi",
  description: "Evaluate your x with a single click",
};

const startWorker = async () => {
    const { worker } = await import('../mocks/browser');
    worker.start();
};

// Only start the worker in development mode
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  startWorker();
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
