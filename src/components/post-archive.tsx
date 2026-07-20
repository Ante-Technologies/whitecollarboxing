import Image from "next/image";
import Link from "next/link";
import { type Post } from "@/lib/posts";

export function PostArchive({
  posts,
  page,
  totalPages,
  makeHref,
}: {
  posts: Post[];
  page: number;
  totalPages: number;
  makeHref: (page: number) => string;
}) {
  const newerHref = page > 1 ? makeHref(page - 1) : null;
  const olderHref = page < totalPages ? makeHref(page + 1) : null;

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="border border-border bg-background p-6 shadow-sm sm:p-8"
        >
          <div className="flex flex-col gap-5 sm:flex-row">
            {post.image && (
              <Link
                href={`/${post.slug}`}
                className="block w-full shrink-0 overflow-hidden sm:w-[240px]"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={450}
                  height={300}
                  unoptimized
                  className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </Link>
            )}

            <div className="flex min-w-0 flex-1 flex-col">
              <h2 className="font-heading text-2xl font-bold leading-tight text-heading">
                <Link
                  href={`/${post.slug}`}
                  className="transition-colors hover:text-accent"
                >
                  {post.title}
                </Link>
              </h2>

              {post.excerpt && (
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {post.excerpt}
                </p>
              )}

              <div className="mt-6 flex justify-end">
                <div className="flex text-sm">
                  <span className="bg-header-bg px-4 py-2 font-heading text-white">
                    {post.date}
                  </span>
                  <Link
                    href={`/${post.slug}`}
                    className="bg-accent px-4 py-2 font-heading text-white transition-colors hover:bg-accent-hover"
                  >
                    Continue reading
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}

      {(newerHref || olderHref) && (
        <nav className="flex items-center justify-between pt-2">
          <div>
            {newerHref && (
              <Link
                href={newerHref}
                className="font-heading text-sm font-bold uppercase tracking-wide text-accent hover:underline"
              >
                &larr; Newer posts
              </Link>
            )}
          </div>
          <span className="font-heading text-xs uppercase tracking-wide text-muted">
            Page {page} of {totalPages}
          </span>
          <div>
            {olderHref && (
              <Link
                href={olderHref}
                className="font-heading text-sm font-bold uppercase tracking-wide text-accent hover:underline"
              >
                Older posts &rarr;
              </Link>
            )}
          </div>
        </nav>
      )}
    </div>
  );
}
