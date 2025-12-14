import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "カナタのホームページ",
  description: "カナタさんのことが色々書いてあります",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
