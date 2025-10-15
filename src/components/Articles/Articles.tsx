import collections from "@/content/collections";
import Article from "./Article";

const Articles = async () => {
  const articles = await collections.article.getAll();
  return (
    <section className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {articles.map((article) => (
          <Article article={article} key={article.title} />
        ))}
      </div>
    </section>
  );
};

export default Articles;
