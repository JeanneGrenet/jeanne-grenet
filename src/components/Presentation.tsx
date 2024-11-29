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
          <Avatar className="w-[10rem] h-[10rem] ">
            <AvatarImage src="/photo.png" />
            <AvatarFallback className="bg-yellow-600">JG</AvatarFallback>
          </Avatar>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            tristique ex, non pellentesque neque. Ut enim justo, ultricies sit
            amet sapien sed, accumsan tempor est. Proin non malesuada dolor.
            Aenean vulputate quis tellus eget pellentesque. Pellentesque et
            lobortis dolor. Duis vitae tellus lobortis, cursus ex eu, aliquet
            sapien. Donec cursus elit in tempor molestie. Nam vel facilisis
            urna. Ut finibus velit et orci pellentesque blandit. Nunc et libero
            et arcu malesuada feugiat sed et mauris. Phasellus vitae tortor
            imperdiet est molestie congue. Morbi turpis lectus, condimentum
            placerat malesuada in, fringilla vulputate orci. Fusce id purus sem.
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
