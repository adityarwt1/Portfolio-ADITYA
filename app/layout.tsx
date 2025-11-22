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
  description:
    "I’m a true tech enthusiast who began coding back in class 9. I’ve always been fascinated by how real products work behind the scenes. At 17, I even built and cracked my first startup. Today, I’m focused on sharpening my skills further and building production-ready solutions with a strong passion for learning and improving every day.”",
  abstract:
    "This page showcases all my certificates, their details, and verification links.",
  appleWebApp: {
    capable: true,
    startupImage: "/vercel.svg",
    statusBarStyle: "black",
    title: "Aditya Rawat",
  },
  applicationName: "Aditya Rawat - Portfolio",
  alternates: {
    canonical: "https://adityarawatportfolio.vercel.app/",
    languages: {
      "eng-US": "https://adityarawatportfolio.vercel.app/",
    },
  },
  assets: "/images",
  authors: {
    name: "Aditya Rawat",
    url: "https://www.linkedin.com/in/aditya-rawat-3862182b0/",
    
  },
  openGraph: {
    images: ["/images/linkedin.png"],
  },
  category: "tech",
  creator: "Aditya Rawat",
  icons: "/images/profilephoto.jpg",
  generator: "Aditya Rawat",
  keywords: [
    "aditya rawat",
    "portfolio aditya rawat",
    "aditya rawat portfolio",
    "https://adityarawatportfolio.vercel.app/",
  ],
  manifest: "/manifest.json",
  publisher: "Aditya Rawat",
  robots: {
    index: true,
    follow: true,
  },
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
