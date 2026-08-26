import ProjectDetailPage from "../Project-details";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const decoded = decodeURIComponent(slug).replace(/-/g, " ");
  return {
    title: `${decoded.charAt(0).toUpperCase() + decoded.slice(1)} - Nithesh Kumar`,
    description: "Detailed project case study and overview",
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <ProjectDetailPage slug={slug} />;
}
