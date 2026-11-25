export const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            name: "Nithesh Kumar R",
            jobTitle: "Full Stack Developer & AI",
            url: "https://nithesh-kumar.vercel.app",
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
            ],
        },
    ],
};