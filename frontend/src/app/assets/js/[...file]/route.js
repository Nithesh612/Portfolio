import fs from "fs";
import path from "path";

export async function GET(request, { params }) {
  const resolvedParams = await params;
  const filePathArray = resolvedParams?.file || [];
  const filePath = path.join(process.cwd(), "src", "app", "components", "js", ...filePathArray);

  if (!fs.existsSync(filePath)) {
    return new Response("Not Found", { status: 404 });
  }

  const content = fs.readFileSync(filePath);
  return new Response(content, {
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
