import ProjectPage, { generateMetadata } from "../[slug]/page";

export { generateMetadata };

export default function RoverControlPage() {
  return <ProjectPage params={{ slug: "rover-control" }} />;
}
