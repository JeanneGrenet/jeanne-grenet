import { ProjectType } from "@/content/collections";
import { AiOutlinePython } from "react-icons/ai";
import { FaCss3Alt, FaHtml5, FaPhp, FaReact } from "react-icons/fa";
import { RiFlutterLine, RiSvelteFill } from "react-icons/ri";
import { match } from "ts-pattern";

export const Technos = ({ technos }: { technos: ProjectType["technos"] }) => {
  if (!technos || technos.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {technos.map((techno, index) => {
        const Icon = match(techno)
          .with("svelte.js", () => RiSvelteFill)
          .with("html", () => FaHtml5)
          .with("css", () => FaCss3Alt)
          .with("react", () => FaReact)
          .with("flutter", () => RiFlutterLine)
          .with("PHP", () => FaPhp)
          .with("python", () => AiOutlinePython)
          .otherwise(() => null);

        return (
          <div
            key={`${techno}-${index}`}
            className="flex items-center gap-1 px-3 py-1 rounded-full text-sm border text-primary bg-secondary border-primary/20"
          >
            {Icon && <Icon size={14} />}
            <span className="font-medium capitalize">{techno}</span>
          </div>
        );
      })}
    </div>
  );
};
