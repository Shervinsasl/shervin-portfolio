import ProjectPage, { generateMetadata } from "../[slug]/page";

export { generateMetadata };

export default function AllExercisesPage() {
  return <ProjectPage params={{ slug: "allexercises" }} />;
}
