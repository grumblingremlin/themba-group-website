import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Themba Group",
  description:
    "Building ventures, creating access and connecting markets across Australia and Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}