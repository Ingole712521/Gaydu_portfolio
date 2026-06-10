import type { Experience, SectionContent } from "@/types/portfolio";

export const experienceContent: SectionContent = {
  label: "Experience",
  title: "Professional journey",
  description:
    "From machine learning and data science internships to building production software as a developer at zCon Solutions.",
};

export const experience: Experience[] = [
  {
    company: "zCon Solutions",
    role: "Software Developer",
    period: "Jan 2024 – Present",
    highlights: [
      "Full-time software development in a hybrid role based in Pune, Maharashtra",
      "Build and maintain web applications and backend systems for client projects",
      "Collaborate with cross-functional teams on feature delivery and production support",
    ],
  },
  {
    company: "LetsGrowMore",
    role: "Data Science Intern",
    period: "Jan 2022 – Feb 2022",
    highlights: [
      "Worked on data analysis, visualization, and exploratory data science tasks",
      "Applied Python and statistical techniques to real-world datasets",
      "Completed a 2-month internship focused on practical data science workflows",
    ],
  },
  {
    company: "Infopillar Solution",
    role: "Machine Learning Intern",
    period: "Dec 2021 – Jan 2022",
    highlights: [
      "Explored machine learning models and training pipelines on structured data",
      "Supported data preprocessing, model evaluation, and experimentation",
      "Gained hands-on experience with ML fundamentals in a professional setting",
    ],
  },
];
