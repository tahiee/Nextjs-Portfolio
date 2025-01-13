import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const castistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});
export const metadata: Metadata = {
  title: "Tahir Khan Portfolio",
  description: "Tahir khan niazi portfolio the best one in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add favicon link */}
        <link
          rel="icon"
          href="/my-portfolio/src/app/favicon.ico"
          type="image/x-icon"
        />
      </head>

      <body
        className={twMerge(
          inter.variable,
          castistoga.variable,
          `antialiased bg-gray-900 text-white font-sans`
        )}
      >
        {children}
      </body>
    </html>
  );
}
