import { SOCIALS } from "@/components/SOCIALS";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-primary/10 py-6 mt-16 bg-secondary/20 px-4">
      <div className="container flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <p className="text-sm text-muted-foreground">
          © {year}{" "}
          <span className="text-primary font-medium">Jeanne Grenet</span>. All
          rights reserved.
        </p>

        <div className="flex gap-4">
          {SOCIALS.filter((social) => social.link).map((social) => (
            <Link
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={social.name}
            >
              <social.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
