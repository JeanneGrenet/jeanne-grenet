import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/#projects" },
  // { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-secondary bg-background/80 shadow-sm px-4">
      <div className="flex h-16 items-center justify-between">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-lg text-primary">
              Jeanne Grenet
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex flex-1 items-center justify-center">
          <ul className="flex gap-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary py-2 px-3 rounded-md"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-4 items-center">
          <Button
            variant="outline"
            asChild
            className="border-primary/30 hover:bg-primary hover:text-primary-foreground"
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
