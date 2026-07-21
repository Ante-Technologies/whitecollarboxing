import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageWrap } from "@/components/page-wrap";
import { PostArchive } from "@/components/post-archive";
import { NEWS_PAGE_SIZE, getPostsByCategory } from "@/lib/posts";

export const dynamicParams = false;

const all = getPostsByCategory("news_page");
const totalPages = Math.max(1, Math.ceil(all.length / NEWS_PAGE_SIZE));

export function generateStaticParams() {
  const params: { num: string }[] = [];
  for (let p = 2; p <= totalPages; p++) params.push({ num: String(p) });
  return params;
}

export async function generateMetadata(
  props: PageProps<"/news/page/[num]">,
): Promise<Metadata> {
  const { num } = await props.params;
  return {
    title: `News - Page ${num}`,
    description: "News archives from whitecollarboxing.org.",
    alternates: { canonical: `/news/page/${num}` },
  };
}

export default async function NewsPaginatedPage(
  props: PageProps<"/news/page/[num]">,
) {
  const { num } = await props.params;
  const page = Number(num);
  if (!Number.isInteger(page) || page < 2 || page > totalPages) notFound();

  const start = (page - 1) * NEWS_PAGE_SIZE;
  const pagePosts = all.slice(start, start + NEWS_PAGE_SIZE);
  const makeHref = (n: number) => (n === 1 ? "/news" : `/news/page/${n}`);

  return (
    <PageWrap title="News">
      <PostArchive
        posts={pagePosts}
        page={page}
        totalPages={totalPages}
        makeHref={makeHref}
      />
    </PageWrap>
  );
}
