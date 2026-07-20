import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageWrap } from "@/components/page-wrap";
import { PostBlockImage } from "@/components/post-block-image";
import { AUTHOR, getPost, posts } from "@/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: PageProps<"/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt.slice(0, 160),
    alternates: { canonical: `/${post.slug}` },
  };
}

export default async function PostPage(props: PageProps<"/[slug]">) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <PageWrap>
      {post.image && (
        <div className="mb-6 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={760}
            height={500}
            priority
            unoptimized
            className="h-auto w-full object-cover"
          />
        </div>
      )}

      <h1 className="mb-4 font-heading text-3xl font-bold leading-tight text-heading lg:text-[34px]">
        {post.title}
      </h1>

      <div className="mb-6 bg-surface px-4 py-2 text-sm text-muted">
        {post.date} by {AUTHOR}
      </div>

      <div className="space-y-5 text-base leading-relaxed text-foreground">
        {post.blocks.length > 0
          ? post.blocks.map((block, i) => {
              if (block.t === "p") {
                return <p key={i}>{block.v}</p>;
              }
              if (block.t === "img") {
                if (
                  !block.src ||
                  block.src.includes("pixel.gif") ||
                  block.src.includes("googleadservices")
                ) {
                  return null;
                }
                return <PostBlockImage key={i} src={block.src} alt={block.alt} />;
              }
              return null;
            })
          : post.excerpt && <p>{post.excerpt}</p>}
      </div>

      {post.postedIn.length > 0 && (
        <div className="mt-8 bg-surface px-4 py-3 text-sm text-muted">
          Posted in{" "}
          {post.postedIn.map((cat, i) => (
            <span key={cat.path}>
              {i > 0 && ", "}
              <Link href={cat.path} className="text-accent hover:underline">
                {cat.label}
              </Link>
            </span>
          ))}
        </div>
      )}

      {(post.prev || post.next) && (
        <nav className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="sm:w-1/2">
            {post.prev && (
              <Link
                href={`/${post.prev.slug}`}
                className="inline-flex items-center bg-accent px-5 py-3 font-heading text-sm font-bold text-white transition-colors hover:bg-accent-hover"
              >
                {post.prev.title}
              </Link>
            )}
          </div>
          <div className="sm:w-1/2 sm:text-right">
            {post.next && (
              <Link
                href={`/${post.next.slug}`}
                className="inline-flex items-center bg-accent px-5 py-3 font-heading text-sm font-bold text-white transition-colors hover:bg-accent-hover"
              >
                {post.next.title}
              </Link>
            )}
          </div>
        </nav>
      )}
    </PageWrap>
  );
}
