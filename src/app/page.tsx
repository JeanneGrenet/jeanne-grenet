import Presentation from "@/components/Presentation";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      <Presentation />
      <Projects />
    </div>
  );
}
