import { ProjectType } from "@/content/collections";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { RiSvelteFill } from "react-icons/ri";
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
          .otherwise(() => null);

        if (!Icon) return null;

        return (
          <div
            key={`${techno}-${index}`}
            className="flex items-center gap-1 px-3 py-1 rounded-full text-sm border text-primary bg-secondary border-primary/20"
          >
            <Icon size={14} />
            <span className="font-medium capitalize">{techno}</span>
          </div>
        );
      })}
    </div>
  );
};
