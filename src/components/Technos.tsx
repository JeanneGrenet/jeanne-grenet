import { ProjectType } from "@/content/collections";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { RiSvelteFill } from "react-icons/ri";
import { match } from "ts-pattern";

export const Technos = ({ technos }: { technos: ProjectType["technos"] }) => {
  return (
    <div className="flex gap-6 mx-auto">
      {technos &&
        technos.map((techno) =>
          match(techno)
            .with("svelte.js", () => <RiSvelteFill size={30} />)
            .with("html", () => <FaHtml5 size={30} />)
            .with("css", () => <FaCss3Alt size={30} />)
            .with("react", () => <FaReact size={30} />)
            .otherwise(() => null)
        )}
    </div>
  );
};
