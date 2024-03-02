import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TheFooter from "./components/TheFooter";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KP | Project",
  description: "Membuat project untuk kerja praktek",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <TheFooter />
      </body>
    </html>
  );
}
