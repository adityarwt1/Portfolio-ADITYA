import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots{
    return {
      rules: [
        {
          userAgent: "*",
          allow: ["/", "/experience", "/certificate", "/about", "/projects"],
          disallow: ["/admin"],
        },
        {
          userAgent: "Googlebot",
          allow: ["/", "/experience", "/certificate", "/about", "/projects"],
          disallow: ["/admin"],
        },
      ],
      sitemap: "https://adityarawatportfolio.vercel.app/sitemap.xml",
      host: "https://adityarawatportfolio.vercel.app",
    };
}