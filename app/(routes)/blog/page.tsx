import { Metadata } from "next";
import BlurFade from "@/components/magicui/blur-fade";
import { BlogCard } from "@/components/blog-card";
import { getAllPosts } from "@/lib/blog";

const BLUR_FADE_DELAY = 0.04;

// Metadata
export const metadata: Metadata = {
  title: "Blog",
  description: "Blog de Facu Guardia",
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="flex min-h-[100dvh] flex-col space-y-10">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
              Blog
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              El Arte del Código y Más Allá
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Aquí encontrarás una colección de artículos que abarcan desde
              conceptos técnicos hasta reflexiones personales sobre el mundo
              del desarrollo de software.
            </p>
          </div>
        </div>
      </BlurFade>

      <section className="space-y-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {posts.map((post, index) => (
            <BlurFade key={post.slug} delay={BLUR_FADE_DELAY * (index + 2)}>
              <BlogCard post={post} />
            </BlurFade>
          ))}
        </div>
      </section>
    </main>
  );
}
