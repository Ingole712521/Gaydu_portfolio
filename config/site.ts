import type { Metadata } from "next";

export const siteConfig = {
  name: "Gayatri Rajopadhye",
  shortName: "Gayatri",
  title: "Gayatri Rajopadhye | Senior  Developer",
  role: "Senior Developer ",
  description:
    "Portfolio of Gayatri Rajopadhye — Senior  Developer with 2+ years of experience in , React, Node.js and scalable web applications.",
  url: "",
  email: "gayatrirajopadhye2002@gmail.com",
  phone: "7721832943",
  phoneDisplay: "+",
  linkedin: "",
  resumePath: "",
} as const;

export const siteMetadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};