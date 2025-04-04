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
import Link from "next/link";

const Project = ({ project }: { project: ProjectType }) => {
  return (
    // TODO : ajouter le hasdetailpage pour savoir sur quoi rediriger
    <Link href={project.link ?? ""} target="_blank">
      <Card className="border-primary/20 hover:border-primary transition-all duration-300 overflow-hidden group h-full flex flex-col card-shadow hover-card">
        <div className="relative overflow-hidden">
          {project.image && project.image.src ? (
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={400}
              height={300}
              className="w-full h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-56 bg-gradient-to-br from-primary to-accent-foreground flex flex-col justify-center">
              <h3 className="text-primary-foreground text-center">
                {project.name}
              </h3>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-50 transition-opacity"></div>
        </div>

        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-semibold text-primary">
            {project.name}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-grow">
          <p className="text-muted-foreground leading-relaxed text-sm">
            {project.description}
          </p>
        </CardContent>

        <CardFooter className="flex flex-col gap-4 pt-4 border-t border-primary/10 bg-secondary/20">
          <div className="w-full">
            <Technos technos={project.technos} />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default Project;
