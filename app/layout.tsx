import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBarv2 from "@/components/NavBarv2/Navbar"
import { ThemeProvider } from "@/components/theme-provider";
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
  description:"Full-stack developer with 3+ years of experience building scalable web applications. Specialized in Node.js backend development and Java enterprise solutions, with proven expertise in designing RESTful APIs and microservices architecture. Joined a production startup at 17, handling everything from system design to deployment. Passionate about writing clean, maintainable code and solving complex technical challenges.", 
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
  twitter:{
    images:['/images/linkedin.png']
  }
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen font-mono w-full overflow-x-hidden`}
      >
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
          <NavBarv2  />
          <div className="h-[90%]">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
