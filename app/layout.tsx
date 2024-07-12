import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shrikant Ramani",
  description: "A Passionate Full stack dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-neutral-900 text-neutral-400 min-h-screen flex flex-col items-center`}
      >
        <Header />
        <main className="flex mt-[13rem] flex-1 items-center justify-center w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
