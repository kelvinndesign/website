import type { Metadata } from "next";
import { Familjen_Grotesk } from "next/font/google";
import "./globals.css";

const PrimaryFont = Familjen_Grotesk({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Kelvin Nguyen",
  description: "Kelvin's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="klv_Logo.svg"/>
      </head>
      <body className={PrimaryFont.className}>
        {children}
      </body>
    </html>
  );
}
