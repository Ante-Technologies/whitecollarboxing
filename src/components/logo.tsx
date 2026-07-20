import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({
  className = "",
  width = 200,
}: {
  className?: string;
  width?: number;
}) {
  return (
    <Link
      href="/"
      className={`inline-block ${className}`}
      aria-label={`${site.name} home`}
      title={site.name}
    >
      <Image
        src="/images/wcb-logo.png"
        alt={site.name}
        width={width}
        height={Math.round((width * 303) / 824)}
        priority
        unoptimized
        style={{ width, height: "auto" }}
        className="max-w-full"
      />
    </Link>
  );
}
