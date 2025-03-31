import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

const OpenSourceContributions = async () => {
  return (
    <section className="flex flex-col gap-4" id="opensource">
      <div className="flex items-center gap-3 mb-2">
        <h2 className="text-primary">My OpenSource contributions</h2>
        <div className="h-px flex-1 bg-primary/30"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        <Card>
          <CardHeader>
            <h3 className="font-semibold text-primary">Start UI</h3>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Image
              src="/opensource/startui.png"
              alt="Starteur de projet Start UI"
              width={400}
              height={300}
              className="w-full h-56 object-cover object-center rounded-md"
            />
            <p>
              Start UI is a project starter designed to accelerate modern web
              development with TypeScript and Next.js. It includes
              pre-configured tools like tRPC for API handling, Prisma for
              database management, and Chakra UI for styling. With built-in
              ESLint, Prettier, and Playwright for testing, it ensures code
              quality while allowing developers to focus on building features.
            </p>
          </CardContent>
          <CardFooter>
            <Button>
              <Link
                href="https://start-ui.com/"
                target="_blank"
                className="flex gap-1 items-center"
              >
                Learn more <LuArrowUpRight />
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <h3 className="font-semibold text-primary">Fork it! Community</h3>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Image
              src="/opensource/forkit.png"
              alt="Starteur de projet Start UI"
              width={400}
              height={300}
              className="w-full h-56 object-cover object-center rounded-md"
            />
            <p>
              ​Fork it! is a global tech community dedicated to sharing
              real-life experiences and fostering authentic conversations among
              developers worldwide. We organize diverse events, including
              meetups and conferences, to facilitate knowledge exchange and
              collaboration. Additionally, Fork it! produces multilingual
              podcasts featuring insightful discussions with industry experts.
            </p>
          </CardContent>
          <CardFooter>
            <Button>
              <Link
                href="https://www.forkit.community/"
                target="_blank"
                className="flex gap-1 items-center"
              >
                Learn more <LuArrowUpRight />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default OpenSourceContributions;
