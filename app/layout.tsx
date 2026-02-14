import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vibe Directory - The best things built on vibes",
  description: "Discover amazing projects built by passionate creators. A showcase of vibe-coded apps, games, and tools.",
  openGraph: {
    title: "Vibe Directory",
    description: "Discover amazing projects built by passionate creators",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
