// app/blog/[slug]/page.tsx
import collections from "@/content/collections";

export async function generateStaticParams() {
  const articles = await collections.article.getAll();

  return articles.map((article) => ({
    slug: article.metadata.slug,
  }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await collections.article.getBySlug(slug);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {article.title}
    </section>
  );
}
