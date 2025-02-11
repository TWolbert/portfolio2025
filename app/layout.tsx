import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/partials/Navbar";
import Log from "./_components/partials/Log";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Teun Wolbert",
  description: "My portfolio site!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased md:mx-72 h-full`}
      >
        <div className=" h-full w-full min-h-screen">
          <Navbar />
          <Log />
          <div className="md:mx-20 pt-5">
            {children}
          </div>
        </div>

      </body>
    </html>
  );
}
