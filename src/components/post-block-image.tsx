"use client";

import { useState } from "react";

interface PostBlockImageProps {
  src: string;
  alt?: string;
}

export function PostBlockImage({ src, alt = "" }: PostBlockImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className="h-auto max-w-full"
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
}
