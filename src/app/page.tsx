import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      {/* Header image / hero */}
      <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-slide.jpg"
          alt="whitecollarboxing.net"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Colour wash overlay to match the original banner */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(115deg, rgba(37,54,168,0.82) 0%, rgba(120,40,150,0.62) 45%, rgba(206,42,46,0.82) 100%)",
          }}
          aria-hidden
        />

        <div className="relative mx-auto w-full max-w-[1170px] px-4 py-16 text-center">
          <h3 className="font-heading text-4xl font-normal tracking-wide text-white drop-shadow-md sm:text-5xl lg:text-6xl">
            White Collar Boxing
          </h3>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-6 sm:flex-row">
            <Link
              href="#primary"
              className="group flex w-full flex-col items-center border border-white/60 bg-black/25 px-8 py-6 transition-colors hover:border-white hover:bg-black/40 sm:w-72"
            >
              <Image
                src="/images/wcb-logo.png"
                alt="whitecollarboxing.net"
                width={200}
                height={79}
                className="h-auto w-[200px]"
              />
              <span className="mt-4 font-heading text-sm font-bold uppercase tracking-wide text-white">
                Fundraising and Events
              </span>
            </Link>

            <Link
              href="/contact"
              className="group flex w-full flex-col items-center border border-white/60 bg-black/25 px-8 py-6 transition-colors hover:border-white hover:bg-black/40 sm:w-72"
            >
              <Image
                src="/images/wchq-logo.png"
                alt="Whitecollar HQ"
                width={200}
                height={79}
                className="h-auto w-[200px]"
              />
              <span className="mt-4 font-heading text-sm font-bold uppercase tracking-wide text-white">
                Boxing &amp; Fitness Gym
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section id="primary" className="bg-background">
        <div className="mx-auto max-w-[1170px] px-4 py-16 lg:px-6 lg:py-20">
          <h1 className="max-w-4xl font-heading text-3xl font-bold leading-tight text-heading lg:text-[40px]">
            White Collar Boxing Training and Fundraising Boxing Events
          </h1>

          <div className="mt-8 max-w-4xl space-y-6 text-base leading-relaxed text-foreground">
            <p>
              WhiteCollarBoxing.net was formed in 2005 by former Irish Olympian
              and Professional boxer, <strong>Cathal O&apos; Grady.</strong> It&apos;s
              mission was to bring the benefits of boxing for fitness and event
              boxing as a fundraising enterprise to a new audience. The result
              has been a phenomenon, masses of white collar boxers have made
              their maiden voyage into the squared circle, experiencing the
              multiple benefits of boxing as a sport and in health.
            </p>
            <p>
              Cathal was introduced to boxing at the tender age of seven. He held
              an impeccable amateur record, with ten national titles and a
              European Junior Heavyweight title under his belt, before
              representing his country in the 1996 Atlanta Olympic Games...{" "}
              <Link href="/about" className="text-accent hover:underline">
                more about us.
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
