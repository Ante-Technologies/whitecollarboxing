import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageWrap } from "@/components/page-wrap";
import { PostArchive } from "@/components/post-archive";
import {
  PAGE_SIZE,
  categoryList,
  getCategoryByPath,
  getPostsByCategory,
} from "@/lib/posts";

export const dynamicParams = false;

type ParsedSlug = { path: string; page: number } | null;

function parseSlug(slug: string[]): ParsedSlug {
  let parts = [...slug];
  let page = 1;
  if (parts.length >= 2 && parts[parts.length - 2] === "page") {
    const n = Number(parts[parts.length - 1]);
    if (!Number.isInteger(n) || n < 1) return null;
    page = n;
    parts = parts.slice(0, -2);
  }
  if (parts.length === 0) return null;
  return { path: `/category/${parts.join("/")}`, page };
}

export function generateStaticParams() {
  const params: { slug: string[] }[] = [];
  for (const cat of categoryList) {
    const parts = cat.path.replace("/category/", "").split("/");
    const totalPages = Math.max(1, Math.ceil(cat.count / PAGE_SIZE));
    for (let p = 1; p <= totalPages; p++) {
      params.push({ slug: p === 1 ? parts : [...parts, "page", String(p)] });
    }
  }
  return params;
}

export async function generateMetadata(
  props: PageProps<"/category/[...slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const parsed = parseSlug(slug);
  if (!parsed) return {};
  const category = getCategoryByPath(parsed.path);
  if (!category) return {};
  const suffix = parsed.page > 1 ? ` - Page ${parsed.page}` : "";
  const canonical =
    parsed.page > 1 ? `${parsed.path}/page/${parsed.page}` : parsed.path;
  return {
    title: `${category.label} Archives${suffix}`,
    description: `${category.label} archives from whitecollarboxing.org.`,
    alternates: { canonical },
  };
}

export default async function CategoryPage(
  props: PageProps<"/category/[...slug]">,
) {
  const { slug } = await props.params;
  const parsed = parseSlug(slug);
  if (!parsed) notFound();

  const category = getCategoryByPath(parsed.path);
  if (!category) notFound();

  const all = getPostsByCategory(category.key);
  const totalPages = Math.max(1, Math.ceil(all.length / PAGE_SIZE));
  if (parsed.page > totalPages) notFound();

  const start = (parsed.page - 1) * PAGE_SIZE;
  const pagePosts = all.slice(start, start + PAGE_SIZE);

  const makeHref = (n: number) =>
    n === 1 ? category.path : `${category.path}/page/${n}`;

  return (
    <PageWrap title={category.label}>
      <PostArchive
        posts={pagePosts}
        page={parsed.page}
        totalPages={totalPages}
        makeHref={makeHref}
      />
    </PageWrap>
  );
}
