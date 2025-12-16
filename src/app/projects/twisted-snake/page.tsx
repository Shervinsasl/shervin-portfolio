import ProjectPage, { generateMetadata } from "../[slug]/page";

export { generateMetadata };

export default function TwistedSnakePage() {
  return <ProjectPage params={{ slug: "twisted-snake" }} />;
}
