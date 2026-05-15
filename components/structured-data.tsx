const siteUrl = "https://adityarawatportfolio.vercel.app";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Aditya Rawat",
      alternateName: "Aditya Rawat Portfolio",
      description:
        "Portfolio of Aditya Rawat — full-stack developer specializing in Node.js, Java, and scalable web applications.",
      publisher: { "@id": `${siteUrl}/#person` },
      inLanguage: "en-IN",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Aditya Rawat",
      url: siteUrl,
      image: `${siteUrl}/images/profilephoto.jpg`,
      jobTitle: "Full Stack Developer",
      sameAs: [
        "https://www.linkedin.com/in/aditya-rawat-3862182b0/",
      ],
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
