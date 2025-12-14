import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";
import PageTransition from "./_components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yashwant Habib",
  description: "Yashwant Habib, a fullstack developer",
  icons: { icon: "/letter-y.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-[#0d0d0d] min-h-screen p-8 pb-20 sm:p-20 sm:px-[28%] font-[family-name:var(--font-geist-mono)] overflow-hidden">
          <Navbar />

          {/* 👇 Client animation wrapper */}
          <PageTransition>{children}</PageTransition>
        </div>
      </body>
    </html>
  );
}
