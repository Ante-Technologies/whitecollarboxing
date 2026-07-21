import type { Metadata } from "next";
import { PageWrap } from "@/components/page-wrap";
import { PostArchive } from "@/components/post-archive";
import { NEWS_PAGE_SIZE, getPostsByCategory } from "@/lib/posts";

export const metadata: Metadata = {
  title: "News",
  description:
    "The latest news, boxing bootcamps and beginner boxing programmes from Whitecollarboxing.net.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  const all = getPostsByCategory("news_page");
  const totalPages = Math.max(1, Math.ceil(all.length / NEWS_PAGE_SIZE));
  const pagePosts = all.slice(0, NEWS_PAGE_SIZE);
  const makeHref = (n: number) => (n === 1 ? "/news" : `/news/page/${n}`);

  return (
    <PageWrap title="News">
      <PostArchive
        posts={pagePosts}
        page={1}
        totalPages={totalPages}
        makeHref={makeHref}
      />
    </PageWrap>
  );
}
