import Articles from "@/components/Articles/Articles";

export default function BlogPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-primary">Blog</h2>
          <div className="h-px flex-1 bg-primary/30"></div>
        </div>
        <p className=" text-primary">Discover all my thoughts.</p>
        <Articles />
      </div>
    </section>
  );
}
