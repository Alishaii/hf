import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "HeadFound - Recruiting Platform",
  description: "AI-powered recruiting platform prototype",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-gradient-to-br from-slate-50 to-purple-50 min-h-screen antialiased">
        <Sidebar />
        <main className="ml-20 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
