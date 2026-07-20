"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const slides = Array.from({ length: 18 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `/images/events/slide-${n}.jpg`;
});

export function EventsCarousel() {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length);
  }, []);

  const startAuto = useCallback(() => {
    stopAuto();
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4500);
  }, []);

  const stopAuto = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  };

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, [startAuto]);

  return (
    <div
      className="relative w-full select-none"
      onMouseEnter={stopAuto}
      onMouseLeave={startAuto}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-black sm:aspect-[16/9]">
        {slides.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`White Collar Boxing event photo ${i + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 760px"
            priority={i === 0}
            unoptimized
            className={`object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => go(index - 1)}
          className="absolute left-0 top-0 flex h-full w-14 items-center justify-center bg-gradient-to-r from-black/40 to-transparent text-white/90 transition-colors hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" aria-hidden>
            <path
              d="M15 5l-7 7 7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => go(index + 1)}
          className="absolute right-0 top-0 flex h-full w-14 items-center justify-center bg-gradient-to-l from-black/40 to-transparent text-white/90 transition-colors hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" aria-hidden>
            <path
              d="M9 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => go(i)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              i === index ? "bg-accent" : "bg-border hover:bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
