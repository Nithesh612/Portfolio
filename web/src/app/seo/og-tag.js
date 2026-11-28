export const siteMetadata = {
    metadataBase: new URL("https://nithesh-kumar.vercel.app/"),
    title: {
        default: "Nithesh Kumar R | Python Full Stack Developer & AI",
        template: "%s | Nithesh Kumar R",
    },
    description:
        "Nithesh Kumar R - MCA - Official Portfolio Website of Python Full Stack Developer & AI Engineer. Crafting modern web apps and AI-powered digital experiences.",
    keywords: [
        "Nithesh Kumar",
        "Nithesh Kumar R",
        "Nithesh Kumar portfolio",
        "Nithesh Kumar portfolio website",
        "Nithesh Kumar developer",
        "Python Full Stack Developer",
        "AI Developer",
        "Next.js Developer",
        "React Developer",
        "MCA Nithesh Kumar",
        "nithesh-kumar.vercel.app",
    ],
    authors: [{ name: "Nithesh Kumar R", url: "https://nithesh-kumar.vercel.app" }],
    creator: "Nithesh Kumar R",
    publisher: "Nithesh Kumar R",
    alternates: {
        canonical: "https://nithesh-kumar.vercel.app/",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/favicon.ico",
    },
    openGraph: {
        title: "Nithesh Kumar R | Python Full Stack Developer & AI",
        description: "Official Portfolio of Nithesh Kumar R — Python Full Stack Developer & AI Engineer.",
        url: "https://nithesh-kumar.vercel.app/",
        siteName: "Nithesh Kumar Portfolio",
        images: [
            {
                url: "/assets/thumbs/cover.png",
                width: 1200,
                height: 630,
                alt: "Nithesh Kumar R Portfolio Preview",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Nithesh Kumar R | Python Full Stack Developer & AI",
        description: "Official Portfolio of Nithesh Kumar R — Python Full Stack Developer & AI Engineer.",
        images: ["/assets/thumbs/cover.png"],
    },
};