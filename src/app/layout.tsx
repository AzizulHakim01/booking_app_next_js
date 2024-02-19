import type { Metadata } from "next";
// app/layout.tsx
import {Providers} from "./providers";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Hydra - Traveller | Your Ultimate Travel Planner',
  description: 'Explore the world with Hydra - Traveller. Plan your trips effortlessly and discover new destinations with our comprehensive travel planner.',
  keywords: 'Hydra, Traveller, travel planner, trip planner, destination discovery, travel organization, vacation planner, travel management, adventure, exploration',
  author: 'Azizul Hakim - Hydra Global Empire',
  robots: 'index, follow',
  canonical: 'https://example.com/hydra-traveller',
  ogTitle: 'Hydra - Traveller | Your Ultimate Travel Planner',
  ogDescription: 'Explore the world with Hydra - Traveller. Plan your trips effortlessly and discover new destinations with our comprehensive travel planner.',
  ogUrl: 'https://example.com/hydra-traveller',
  ogImage: 'https://example.com/images/hydra-traveller-preview.png',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=''>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
