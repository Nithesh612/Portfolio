const baseUrl = "https://nithesh-kumar.vercel.app";

export default function sitemap() {
  const projects = ["thunder", "bookshelf", "flowai"];

  const projectUrls = projects.map((slug) => ({
    url: `${baseUrl}/Project/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/Project`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...projectUrls,
  ];
}
