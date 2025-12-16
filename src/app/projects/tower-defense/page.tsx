import ProjectPage, {
  generateMetadata,
} from "../[slug]/page";

export { generateMetadata };

export default function TowerDefensePage() {
  return <ProjectPage params={{ slug: "tower-defense" }} />;
}
