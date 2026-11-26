export const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://nithesh-kumar.vercel.app/#person",
      name: "Nithesh Kumar R",
      jobTitle: "Python Full Stack Developer & AI",
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
        "Python",
        "Full Stack Development",
        "Next.js",
        "React",
        "Node.js",
        "TypeScript",
        "Tailwind CSS",
        "Artificial Intelligence",
        "REST APIs",
        "MongoDB",
      ],
      description:
        "Python Full Stack Developer specializing in Python, Next.js, React, Node.js, and modern AI integrations.",
    },
    {
      "@type": "WebSite",
      "@id": "https://nithesh-kumar.vercel.app/#website",
      url: "https://nithesh-kumar.vercel.app",
      name: "Nithesh Kumar R | Python Full Stack Developer & AI",
      publisher: {
        "@id": "https://nithesh-kumar.vercel.app/#person",
      },
    },
  ],
};

export const personSchema = schema;
export default schema;
