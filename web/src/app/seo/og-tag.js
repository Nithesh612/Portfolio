export const siteMetadata = {
    metadataBase: new URL("https://nithesh-kumar.vercel.app/"),
    title: "Nithesh Kumar R | Python Full Stack Developer & AI",
    description:
        "Nithesh Kumar R - MCA - Personal Portfolio & Python Full Stack Developer & AI. Fully responsive, creative design.",
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
            { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        ],
        apple: [
            { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
    },
    openGraph: {
        title: "Nithesh Kumar R | Python Full Stack Developer & AI",
        description: "Crafting modern web apps and AI-powered digital experiences.",
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
        description: "Crafting modern web apps and AI-powered digital experiences.",
        images: ["/assets/thumbs/cover.png"],
    },
};