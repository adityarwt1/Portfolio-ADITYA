import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavaBar from "@/components/Nav/Navabar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aditya Rawat - Portfolio",
  openGraph: {
    images: ["/images/linkedin.png"],
  },
  description:
    "I’m a true tech enthusiast who began coding back in class 9. I’ve always been fascinated by how real products work behind the scenes. At 17, I even built and cracked my first startup. Today, I’m focused on sharpening my skills further and building production-ready solutions with a strong passion for learning and improving every day.”",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen font-mono`}
      >
        <NavaBar />
        <div className="h-[90%]">{children}</div>
      </body>
    </html>
  );
}
