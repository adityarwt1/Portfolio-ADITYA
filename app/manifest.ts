import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aditya Rawat - Portfolio",
    short_name: "Aditya Rawat",
    description:
      "Portfolio of Aditya Rawat — MERN stack developer. Experience, certificates, and projects.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#0066ff",
    scope: "/",
    orientation: "portrait-primary",
    categories: ["portfolio", "personal"],
    lang: "en-IN",
    icons: [
      {
        src: "/images/profilephoto.jpg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "any",
      },
      {
        src: "/images/profilephoto.jpg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "maskable",
      },
    ],
  };
}
