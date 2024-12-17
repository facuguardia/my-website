import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from 'react-markdown';
import { getAllPosts } from "@/lib/blog";
import BlurFade from "@/components/magicui/blur-fade";
import { Avatar, AvatarImage } from "@/components/ui/avatar";


// Metadata
export const metadata: Metadata = {
  title: "Post",
  description: "Post de Facu Guardia",
}

const BLUR_FADE_DELAY = 0.04;
interface Props {
  params: Promise<{
    slug: string;
  }>;
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Esperamos la resolución de params
  const { slug } = await params;
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex min-h-[100dvh] flex-col space-y-10">
      <BlurFade>
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <time className="text-sm text-muted-foreground">
                {post.date}
              </time>
            </div>
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <p className="text-xl text-muted-foreground">{post.description}</p>
            <div className="flex items-center gap-2">
              <Avatar className="size-10">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
              </Avatar>
              <div>
                <p className="font-medium">{post.author.name}</p>
              </div>
            </div>
          </div>
          {post.coverImage && (
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={1000}
                  height={1000}
                  className="object-cover"
                />
              </BlurFade>
            </div>
          )}
        </div>
      </BlurFade>

      <BlurFade delay={0.1}>
        <div className="prose dark:prose-invert max-w-none">
          {post.sections.map((section, index) => (
            <section key={index} className="mb-8">
              {section.title && (
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              )}
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-muted-foreground mb-4">
                  <ReactMarkdown>{paragraph}</ReactMarkdown>
                </p>
              ))}
              {section.image && (
                <div className="relative aspect-video overflow-hidden rounded-lg my-6">
                  <Image
                    src={section.image}
                    alt={section.imageAlt || ""}
                    width={1000}
                    height={1000}
                    className="object-cover"
                  />
                </div>
              )}
            </section>
          ))}
        </div>
      </BlurFade>
    </main>
  );
}
