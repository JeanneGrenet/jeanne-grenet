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
    <Card className="border-primary/20 card-shadow overflow-hidden from-background to-secondary/30">
      <CardHeader className="gap-8 md:flex-row md:items-center pb-2">
        <div className="flex flex-col gap-4">
          <CardTitle className="text-3xl font-bold text-primary">
            Jeanne Grenet
          </CardTitle>
          <div className="flex flex-wrap items-center gap-2 text-muted-foreground text-sm">
            <div className="h-1 w-1 rounded-full bg-primary"></div>
            <span>Web Developer</span>
            <div className="h-1 w-1 rounded-full bg-primary"></div>
            <span>TypeScript</span>
            <div className="h-1 w-1 rounded-full bg-primary"></div>
            <span>React</span>
          </div>
        </div>

        <Avatar className="w-[10rem] h-[10rem] ring-4 ring-primary/20 ring-offset-2 shadow-xl">
          <AvatarImage src="/photo.png" />
          <AvatarFallback className="bg-gradient-to-br from-primary to-accent-foreground text-2xl font-bold text-primary-foreground">
            JG
          </AvatarFallback>
        </Avatar>
      </CardHeader>

      <CardDescription className="px-6 py-4">
        <p className="leading-relaxed">
          Hey! I&apos;m Jeanne Grenet, a web developer specializing in
          TypeScript and React. I enjoy building clean, efficient, and intuitive
          applications, always focusing on performance and user experience.
          <span className="block mt-2">
            Currently, I work at{" "}
            <span className="font-medium text-primary">BearStudio</span>, where
            I collaborate on various projects, tackling challenges and refining
            my skills. I like solving problems, learning new technologies, and
            writing code that makes a difference. Let&apos;s connect! 🚀
          </span>
        </p>
      </CardDescription>

      <CardFooter className="gap-3 justify-end py-4 bg-secondary/40">
        {SOCIALS.filter((social) => social.link).map((social) => (
          <Button
            key={social.name}
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all transform hover:scale-110"
          >
            <Link href={social.link} target="_blank" aria-label={social.name}>
              <social.icon className="w-5 h-5" />
            </Link>
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
};

export default Presentation;
