import "./globals.css";
import type { Metadata } from "next";

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
      <body className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-100 to-orange-100 flex flex-col font-sans">
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center px-8 py-4 bg-white/80 shadow-md sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-amber-400 w-10 h-10 flex items-center justify-center font-bold text-xl text-white shadow-md">H</div>
            <span className="font-bold text-lg text-amber-700 tracking-wide">Host For an Hour</span>
          </div>
          <div className="flex gap-6 text-amber-700 font-medium">
            <a href="/" className="hover:text-orange-500 transition">Home</a>
            <a href="/become-host" className="hover:text-orange-500 transition">Become a Host</a>
            <a href="/browse" className="hover:text-orange-500 transition">Browse Experiences</a>
            <a href="/about" className="hover:text-orange-500 transition">About</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
