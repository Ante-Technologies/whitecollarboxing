import type { Metadata } from "next";
import { PageWrap } from "@/components/page-wrap";

export const metadata: Metadata = {
  title: "About white collar boxing",
  description:
    "WhiteCollarBoxing.net was formed in 2005 by former Irish Olympian and Professional boxer, Cathal O' Grady, to bring the benefits of boxing to a new audience.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageWrap
      title="About white collar boxing"
      image="/images/cathal.jpg"
      imageAlt="Cathal O' Grady, founder of White Collar Boxing"
    >
      <div className="space-y-6 text-base leading-relaxed text-foreground">
        <p>
          WhiteCollarBoxing.net was formed in 2005. It was the brainchild of
          former Irish Olympian and Professional boxer, <strong>Cathal O&apos;
          Grady</strong>, whose mission was to bring the benefits of boxing to a
          previously neglected audience. The result has been a phenomenon, with
          masses of white collar boxers making their maiden voyage into the
          squared circle, to experience the multiple benefits of boxing as their
          new sport.
        </p>
        <p>
          Cathal was introduced to the boxing game at the tender age of seven. He
          held an impeccable Amateur record, with ten national titles and a
          European Junior Heavyweight title under his belt, before representing
          his country in the 1996 Atlanta Olympic Games. Cathal then spent five
          years as a Professional Boxer, where he had the opportunity to train
          under some of the great coaching legends, such as Freddie Roache, Eddie
          Futch and Kevin Rooney. In 2003 Cathal took up his coaching role with
          the National High Performance Team, at its inception. He had the
          privilege of working with a great team of coaches &amp; boxers, some of
          whom later went on to become Olympic heroes, securing medals for
          Ireland.
        </p>
        <p>
          In 2005 Cathal introduced White Collar Boxing to Ireland, founding
          Whitecollarboxing.net. It has become a very popular &amp; profitable
          fundraiser for many organisations throughout Ireland, many of whom
          return year after year to run further events. In 2009,
          whitecollarboxing.net featured in a three part TV documentary with BBC
          &quot;Fight Club&quot;.
        </p>
      </div>
    </PageWrap>
  );
}
