import { SOCIALS } from "@/components/SOCIALS";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const Presentation = () => {
  return (
    <Card className="border">
      <CardHeader className="gap-5">
        <CardTitle>Jeanne Grenet</CardTitle>
        <CardDescription className="flex gap-10">
          <Avatar className="w-[8rem] h-[8rem] ">
            <AvatarImage src="/photo.png" />
            <AvatarFallback className="bg-yellow-600">JG</AvatarFallback>
          </Avatar>
          {/* TODO : Update the description */}
          <p className="self-center">
            Hey! I’m Jeanne Grenet, a web developer specializing in TypeScript
            and React. I enjoy building clean, efficient, and intuitive
            applications, always focusing on performance and user experience.
            Currently, I work at BearStudio, where I collaborate on various
            projects, tackling challenges and refining my skills. I like solving
            problems, learning new technologies, and writing code that makes a
            difference. Let’s connect! 🚀
          </p>
        </CardDescription>
        <CardFooter className="gap-2 justify-end">
          {SOCIALS.map((social) => (
            <Button key={social.name} className="">
              <Link href={social.link} target="_blank">
                <social.icon />
              </Link>
            </Button>
          ))}
        </CardFooter>
      </CardHeader>
    </Card>
  );
};

export default Presentation;
