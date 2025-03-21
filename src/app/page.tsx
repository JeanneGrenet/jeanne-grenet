import Presentation from "@/components/Presentation";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <div className="py-10 flex flex-col gap-8">
      <Presentation />
      <Projects />
    </div>
  );
}
