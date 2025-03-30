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
        <Avatar className="w-[10rem] h-[10rem] ring-4 ring-primary/20 ring-offset-2 shadow-xl">
          <AvatarImage src="/photo.png" />
          <AvatarFallback className="bg-gradient-to-br from-primary to-accent-foreground text-2xl font-bold text-primary-foreground">
            JG
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-4">
          <CardTitle className="text-3xl font-bold text-primary">
            Jeanne Grenet
          </CardTitle>
          <div className="flex flex-wrap items-center gap-2 text-muted-foreground text-sm">
            <div className="h-1 w-1 rounded-full bg-primary"></div>
            <span>Junior Web Developer</span>
            <div className="h-1 w-1 rounded-full bg-primary"></div>
            <span>Bearstudio</span>
            <div className="h-1 w-1 rounded-full bg-primary"></div>
            <span>CESI</span>
          </div>
        </div>
      </CardHeader>

      <CardDescription className="px-6 py-4">
        <p className="leading-relaxed flex flex-col gap-2">
          <span className="font-bold">
            Hi, I&apos;m Jeanne Grenet – Web & App Developer in the making!
          </span>
          <span>
            I&apos;m currently in my second year of a Bachelor&apos;s degree in
            Web Development at CESI (France), and I&apos;m continuing my
            work-study experience at
            <strong> Bearstudio</strong>, where I&apos;ve had the opportunity to
            work on full-stack projects across diverse sectors – from personal
            branding to healthcare and insurance.
          </span>
          <span>
            Every day, whether through my professional missions or academic
            projects, I dive into technologies like <strong>React</strong>,{" "}
            <strong>Tailwind CSS</strong>,<strong> Next.js</strong>,{" "}
            <strong>Flutter</strong>, <strong>Java</strong>,{" "}
            <strong>PHP</strong>, and <strong>Python</strong>, while also
            contributing to open-source projects and engaging in client
            meetings, project management, and community-building initiatives.
          </span>
          <span>
            As I prepare to enter the final year of the Application Designer &
            Developer Bachelor program, I&apos;m looking to keep growing,
            learning, and collaborating on meaningful tech projects that
            challenge my skills and feed my curiosity.
          </span>
          <span>
            I&apos;m enthusiastic, pragmatic, and always ready to bring ideas to
            life – whether through clean code, collaborative energy, or creative
            problem-solving.
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
