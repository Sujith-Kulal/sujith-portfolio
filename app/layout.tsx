import type { Metadata } from "next";
import { Bricolage_Grotesque, Fraunces } from "next/font/google";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-body",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sujith Kulal | Portfolio",
  description: "Full stack developer portfolio of Sujith Kulal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} ${fraunces.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
