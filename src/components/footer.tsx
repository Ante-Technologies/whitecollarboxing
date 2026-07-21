import Link from "next/link";
import { site } from "@/lib/site";

const socialIcons: Record<string, React.ReactNode> = {
  facebook: (
    <path d="M13.5 21v-7h2.4l.4-2.9h-2.8V9.2c0-.8.3-1.4 1.5-1.4H16V5.2c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.2H7.7V14h2.4v7h3.4z" />
  ),
  twitter: (
    <path d="M18.9 7.3c-.5.2-1 .4-1.6.5.6-.3 1-.9 1.2-1.6-.5.3-1.1.6-1.8.7-.5-.6-1.3-.9-2.1-.9-1.6 0-2.9 1.3-2.9 2.9 0 .2 0 .5.1.7-2.4-.1-4.6-1.3-6-3.1-.3.4-.4.9-.4 1.5 0 1 .5 1.9 1.3 2.4-.5 0-.9-.1-1.3-.4v.1c0 1.4 1 2.6 2.3 2.8-.2.1-.5.1-.8.1-.2 0-.4 0-.5-.1.4 1.1 1.4 2 2.7 2-1 .8-2.2 1.2-3.6 1.2H4c1.3.8 2.9 1.3 4.5 1.3 5.4 0 8.4-4.5 8.4-8.4v-.4c.6-.4 1.1-1 1.5-1.6z" />
  ),
  youtube: (
    <path d="M20.5 8.4c-.2-.9-.9-1.5-1.7-1.7C17.3 6.3 12 6.3 12 6.3s-5.3 0-6.8.4c-.8.2-1.5.9-1.7 1.7C3.1 9.9 3.1 12 3.1 12s0 2.1.4 3.6c.2.9.9 1.5 1.7 1.7 1.5.4 6.8.4 6.8.4s5.3 0 6.8-.4c.8-.2 1.5-.9 1.7-1.7.4-1.5.4-3.6.4-3.6s0-2.1-.4-3.6zM10.3 14.6V9.4l4.4 2.6-4.4 2.6z" />
  ),
};

export function Footer() {
  return (
    <footer className="bg-footer-bg text-muted">
      <div className="mx-auto grid max-w-[1170px] gap-8 px-4 py-14 lg:grid-cols-3 lg:px-6">
        {site.videos.map((videoId) => (
          <div key={videoId} className="aspect-video w-full">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`${site.name} video`}
              allowFullScreen
              className="h-full w-full border-0"
            />
          </div>
        ))}

        <div>
          <h3 className="mb-4 font-heading text-lg font-bold text-white">
            whitecollarboxing.net / WhitecollarHQ
          </h3>
          <div className="space-y-3 text-sm leading-relaxed">
            <div className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-accent text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M12 3l9 8h-3v9h-4v-6h-4v6H6v-9H3z" />
                </svg>
              </span>
              <span>
                {site.address.line1}, {site.address.line2}
              </span>
            </div>
            <div className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-accent text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1z" />
                </svg>
              </span>
              <span>
                {site.phones.map((phone, i) => (
                  <span key={phone.href}>
                    ({phone.label}) Call:{" "}
                    <a href={phone.href} className="hover:text-accent">
                      {phone.number}
                    </a>
                    {i < site.phones.length - 1 ? " " : ""}
                  </span>
                ))}
              </span>
            </div>
            <div className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-accent text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M3 5h18v14H3zm2 2v.4l7 4.6 7-4.6V7zm14 10V9.9l-7 4.6-7-4.6V17z" />
                </svg>
              </span>
              <a href={`mailto:${site.email}`} className="hover:text-accent">
                {site.email}
              </a>
            </div>
          </div>

          <div className="mt-5 flex gap-3">
            {Object.entries(site.social).map(([key, href]) => (
              <a
                key={key}
                href={href as string}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={key}
                className="flex h-9 w-9 items-center justify-center bg-accent text-white transition-opacity hover:opacity-80"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  {socialIcons[key]}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1170px] px-4 py-5 text-center text-sm text-muted lg:px-6">
          <Link href="/" className="text-muted hover:text-accent">
            {site.name}
          </Link>
          <span className="px-2">|</span>
          <span>Shade Studio Web Design &copy; 2013-{new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
