"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { navItems } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Transparent over the hero on the homepage until scrolled; solid elsewhere.
  const solid = scrolled || mobileOpen || !isHome;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-header-bg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[84px] max-w-[1170px] items-center justify-between px-4 lg:px-6">
        <Logo width={180} />

        <nav className="hidden items-center lg:flex">
          {navItems.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className={`flex h-[84px] items-center gap-1.5 px-4 font-heading text-[13px] font-normal uppercase tracking-wide text-white transition-colors hover:text-accent ${
                  isActive(item.href)
                    ? "border-b-2 border-accent"
                    : "border-b-2 border-transparent"
                }`}
              >
                {item.label}
                {item.children && (
                  <svg
                    className="h-2.5 w-2.5 opacity-70 transition-transform group-hover:rotate-180"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M2.5 4.5L6 8l3.5-3.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </Link>
              {item.children && (
                <div className="invisible absolute right-0 top-full min-w-56 translate-y-1 bg-header-bg opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block border-t border-white/10 px-4 py-3 text-[13px] uppercase tracking-wide text-white/80 transition-colors hover:text-accent"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-current transition-transform ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-transform ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-header-bg lg:hidden">
          <nav className="mx-auto max-w-[1170px] px-4 py-2">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="border-b border-white/10 last:border-b-0"
              >
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className={`flex-1 py-3 font-heading text-sm uppercase tracking-wide ${
                      isActive(item.href) ? "text-accent" : "text-white/90"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label} submenu`}
                      onClick={() =>
                        setOpenDropdown((cur) =>
                          cur === item.label ? null : item.label,
                        )
                      }
                      className="p-2 text-white/70"
                    >
                      <svg
                        className={`h-4 w-4 transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M2.5 4.5L6 8l3.5-3.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  )}
                </div>
                {item.children && openDropdown === item.label && (
                  <div className="pb-2 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-2 text-sm uppercase tracking-wide text-white/70 hover:text-accent"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
