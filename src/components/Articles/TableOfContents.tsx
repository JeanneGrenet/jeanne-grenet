import { useEffect, useState } from "react";

type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

export default function TableOfContents({
  containerSelector = "article",
}: {
  containerSelector?: string;
}) {
  const [items, setItems] = useState<TocItem[]>([]);

  useEffect(() => {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const headings = container.querySelectorAll<HTMLHeadingElement>("h2, h3");
    const nextItems: TocItem[] = [];

    headings.forEach((heading, index) => {
      if (!heading.id) {
        heading.id = `heading-${index}`;
      }
      nextItems.push({
        id: heading.id,
        text: heading.textContent ?? "",
        level: heading.tagName === "H3" ? 3 : 2,
      });
    });

    setItems(nextItems);
  }, [containerSelector]);

  if (items.length === 0) return null;

  return (
    <nav className="text-sm" aria-label="On this page">
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={
                "text-muted-foreground hover:text-foreground block py-1 transition-colors" +
                (item.level === 3 ? " pl-4 text-xs" : "")
              }
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
