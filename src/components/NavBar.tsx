"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/#projects" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/80 backdrop-blur-md px-4">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-lg text-primary">
              Jeanne Grenet
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex flex-1 items-center justify-center">
          <ul className="flex space-x-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary py-2 px-3 rounded-md",
                    pathname === item.href
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-4">
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
