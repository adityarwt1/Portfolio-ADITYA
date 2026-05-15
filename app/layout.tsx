import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBarv2 from "@/components/NavBarv2/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import StructuredData from "@/components/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://adityarawatportfolio.vercel.app";

const description =
  "Full-stack developer with 3+ years of experience building scalable web applications. Specialized in Node.js backend development and Java enterprise solutions, with proven expertise in designing RESTful APIs and microservices architecture. Joined a production startup at 17, handling everything from system design to deployment. Passionate about writing clean, maintainable code and solving complex technical challenges.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aditya Rawat - Portfolio",
    template: "%s | Aditya Rawat",
  },
  description,
  applicationName: "Aditya Rawat",
  appleWebApp: {
    capable: true,
    title: "Aditya Rawat",
    statusBarStyle: "black-translucent",
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
    },
  },
  authors: {
    name: "Aditya Rawat",
    url: "https://www.linkedin.com/in/aditya-rawat-3862182b0/",
  },
  creator: "Aditya Rawat",
  publisher: "Aditya Rawat",
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Aditya Rawat",
    title: "Aditya Rawat - Portfolio",
    description,
    images: [
      {
        url: "/images/linkedin.png",
        width: 1200,
        height: 630,
        alt: "Aditya Rawat - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Rawat - Portfolio",
    description,
    images: ["/images/linkedin.png"],
  },
  icons: {
    icon: [{ url: "/images/profilephoto.jpg", type: "image/jpeg" }],
    apple: [{ url: "/images/profilephoto.jpg", type: "image/jpeg" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  keywords: [
    "aditya rawat",
    "portfolio aditya rawat",
    "aditya rawat portfolio",
    "Aditya Rawat",
    "Aditya Rawat Portfolio",
    "Full Stack Developer",
    "Node.js Backend Developer",
    "Java Enterprise Solutions",
    "RESTful API Design",
    "Microservices Architecture",
    "System Design Engineer",
    "Scalable Web Applications",
    "Next.js Developer",
    "Software Engineer Portfolio",
    "Clean Code Expert",
    "Aditya Rawat Software Engineer",
    "Web Development Specialist",
    "MERN Stack Developer",
    "Backend System Architect",
    "Aditya Rawat Projects",
    "Technical Problem Solver",
    "JavaScript Developer India",
    "Production Grade App Deployment",
  ],
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
        <StructuredData />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBarv2 />
          <div className="h-[90%]">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
