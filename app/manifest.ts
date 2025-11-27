import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aditya Rawat - Portfolio",
    short_name: "aditya portfolio",
    description:
      "Aditya rawat mern stack portfolio, Experience, certificate, projects included.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0066ff",
    scope:"portfolio",
    orientation: "portrait-primary",
    categories: ["portfolio" , "personal information" , "aditya rawat potfolio"],
    lang: "en-IN", // English (India)
  };
}
