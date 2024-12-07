import { Technos } from "@/components/Technos";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectType } from "@/content/collections";
import Image from "next/image";

const Project = ({ project }: { project: ProjectType }) => {
  return (
    <Card className="max-w-[20rem]">
      <CardHeader className="gap-2 text-center">
        <CardTitle>{project.name}</CardTitle>
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={400}
          height={400}
        />
      </CardHeader>
      <CardContent>
        <p>Description : {project.description}</p>
      </CardContent>
      <CardFooter>
        <Technos technos={project.technos} />
      </CardFooter>
    </Card>
  );
};

export default Project;
