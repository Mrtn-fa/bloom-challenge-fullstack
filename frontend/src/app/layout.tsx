import type { Metadata } from "next";

import { Geist, Geist_Mono, Nunito_Sans } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Desafío Dev - Bloom Reuse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${nunitoSans.variable}`}>
        <StoreProvider>
          <div className="min-h-screen min-w-screen flex flex-col">
            <Navigation />
              {children}
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
