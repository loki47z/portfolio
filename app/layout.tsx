import type { Metadata } from "next";
// @ts-expect-error: side-effect import of CSS without type declarations
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Thom's Portfolio",
  description: "Star Wars Themed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
