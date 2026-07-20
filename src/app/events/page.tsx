import type { Metadata } from "next";
import { PageWrap } from "@/components/page-wrap";
import { EventsCarousel } from "@/components/events-carousel";

export const metadata: Metadata = {
  title: "Events",
  description:
    "We have successfully promoted over 200 boxing events. We work with participants and organisers to make each show the best possible success.",
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  return (
    <PageWrap title="Events">
      <div className="text-base leading-relaxed text-foreground">
        <p>
          Nothing gets us more excited than the thoughts of a boxing event. We
          have successfully promoted over 200 events and we know how to make the
          magic happen. We work with the participants teaching them the skills
          required to climb into the ring getting them fitter than they could
          have imagined. We love guiding and coaching the organisers to
          capitalise and make the show the best possible sucess
        </p>
      </div>

      <div className="mt-8">
        <EventsCarousel />
      </div>
    </PageWrap>
  );
}
