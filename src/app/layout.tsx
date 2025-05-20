import "./globals.css";
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Host For an Hour",
  description: "Experience Kazakh hospitality with locals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 flex flex-col font-sans">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
