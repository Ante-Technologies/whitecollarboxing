import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/posts";
import { CategoryDropdown } from "@/components/category-dropdown";

const latestUpdates = posts.slice(0, 5);

function WidgetTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-4 border-b border-border pb-3 font-heading text-lg font-bold text-heading">
      {children}
    </h3>
  );
}

export function Sidebar() {
  return (
    <aside className="space-y-10">
      <div>
        <WidgetTitle>News Categories</WidgetTitle>
        <CategoryDropdown />
      </div>

      <div>
        <WidgetTitle>Latest Updates</WidgetTitle>
        <ul className="space-y-3">
          {latestUpdates.map((post) => (
            <li key={post.slug} className="flex gap-2 text-sm leading-snug">
              <span aria-hidden className="mt-0.5 text-accent">
                &#9998;
              </span>
              <Link
                href={`/${post.slug}`}
                className="text-foreground transition-colors hover:text-accent"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <WidgetTitle>Fundraising and Events</WidgetTitle>
        <Link
          href="/events"
          aria-label="White collar boxing fundraising events"
          className="block overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(115deg, #2536a8 0%, #7a2896 50%, #ce2a2e 100%)",
          }}
        >
          <span className="flex items-center justify-center px-6 py-6">
            <Image
              src="/images/wcb-logo.png"
              alt="whitecollarboxing.org"
              width={200}
              height={79}
              unoptimized
              className="h-auto w-[200px]"
            />
          </span>
        </Link>
      </div>

      <div>
        <WidgetTitle>Training and Fitness Gym</WidgetTitle>
        <Link
          href="/contact"
          aria-label="White collar boxing training and fitness gym"
          className="block overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(115deg, #1c1e21 0%, #3a1220 60%, #ce2a2e 100%)",
          }}
        >
          <span className="flex items-center justify-center px-6 py-6">
            <Image
              src="/images/wchq-logo.png"
              alt="Whitecollar HQ"
              width={200}
              height={79}
              unoptimized
              className="h-auto w-[200px]"
            />
          </span>
        </Link>
      </div>
    </aside>
  );
}
