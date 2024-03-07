import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ButtonAppBar from "./components/Layout/ButtonAppBar";
import TheFooter from "./components/Layout/TheFooter";
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
        <ButtonAppBar />
        {children}
        <TheFooter />
      </body>
    </html>
  );
}
