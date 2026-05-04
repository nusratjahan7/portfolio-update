import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorEffect from "@/CursorEffects";
import SmoothScroll from "@/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nusrat Jahan",
  description: "A passionate and driven frontend developer showcasing projects, skills, and journey in web development.",
  keywords: "portfolio, frontend developer, web development, React, Next.js, JavaScript, HTML, CSS, Bangladesh, Nusrat Jahan",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col !overflow-x-hidden">
        <SmoothScroll />
        <div className="cursor" id="cursor"></div>
        <div className="cursor-follower" id="follower"></div>
        <CursorEffect />
        {children}
      </body>
    </html>
  );
}
