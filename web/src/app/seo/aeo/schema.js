export const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://nithesh-kumar.vercel.app/#person",
      name: "Nithesh Kumar R",
      jobTitle: "Full Stack Developer & AI",
      url: "https://nithesh-kumar.vercel.app",
      image: "https://nithesh-kumar.vercel.app/assets/thumbs/cover.png",
      sameAs: [
        "https://github.com/nithesh612",
        "https://www.linkedin.com/in/nitheshkumar",
      ],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Master of Computer Applications (MCA)",
      },
      knowsAbout: [
        "Next.js",
        "React",
        "Node.js",
        "TypeScript",
        "Tailwind CSS",
        "Artificial Intelligence",
        "Full Stack Development",
        "REST APIs",
        "MongoDB",
      ],
      description:
        "Full Stack Developer specializing in Next.js, React, Node.js, and modern AI integrations.",
    },
    {
      "@type": "WebSite",
      "@id": "https://nithesh-kumar.vercel.app/#website",
      url: "https://nithesh-kumar.vercel.app",
      name: "Nithesh Kumar R | Full Stack Developer & AI",
      publisher: {
        "@id": "https://nithesh-kumar.vercel.app/#person",
      },
    },
  ],
};

export const personSchema = schema;
export default schema;
