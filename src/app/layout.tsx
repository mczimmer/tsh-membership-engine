import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Membership Engine — Valtech × The Social Hub",
  description: "Engagement plan for evolving TSH's AI-powered membership platform from experiment to production.",
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
