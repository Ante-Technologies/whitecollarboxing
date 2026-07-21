import type { Metadata } from "next";
import Link from "next/link";
import { PageWrap } from "@/components/page-wrap";

export const metadata: Metadata = {
  title: "Fundraisers",
  description:
    "Raise funds for your company, club or charity with a White Collar Boxing Fight Night. A detailed 4 step process from the initial consultation to the final bell.",
  alternates: { canonical: "/events/fundraisers" },
};

const steps = [
  {
    title: "Step 1 — Planning",
    body: "This is the first and probably the most important stage. We will arrange an initial consultation, where you will be advised on the best approach to organizing your fundraiser. We will give you a realistic projection of possible fundraising figures, drawing on our experience of the hundreds of shows we have organized to date. Our specialised team will mentor you through the entire process, from the recruitment of suitable participants, to the launch of the programme, to the development of a sponsorship strategy and in the overall marketing of the event.",
  },
  {
    title: "Step 2 — Training",
    body: "Once all participants are signed up and complete our medical screening & are deemed fit to proceed, the training begins. Training consists of two sessions per week, with one of our White Collar Boxing coaches, over a 6 to 8 week period. During this time participants will start by learning the boxing stance and basic punches, progressing to bag work and pad work. The final weeks of training will be devoted to getting comfortable and confident in the boxing ring, through school boxing and sparring. All training is conducted in a safe & fun environment. Training can be done on your site, as all our gear is 100% portable.",
  },
  {
    title: "Step 3 — Pre-Event Preparations",
    body: "The pre-event preparation is of critical importance. All boxing participants will be enthusiastically anticipating their ring debut. Both the organisers & participants will know that they are in trusted & capable hands. The use of our tailor made \"event action-plan checklist\" will ensure a smooth lead in to the \"big fight night\".",
  },
  {
    title: "Step 4 — The Event",
    body: "\"It's Showtime!!\" On the big night we are responsible for full coordination and event management. We pride ourselves in our production, no stone goes unturned & no corners are cut. We provide full production, from the fight night lights, to the music & floor thumping speakers. Our staff on the night will include: the master of ceremonies, a ringside medic, a referee, coaches, cornermen, DJ and ring card girl. All participants are evenly matched & are screened by our ringside medic, before making their voyage into the ring to the sound of their individual entrance music.",
  },
];

export default function FundraisersPage() {
  return (
    <PageWrap title="Fundraisers">
      <div className="max-w-4xl space-y-6 text-base leading-relaxed text-foreground">
        <p>
          Is your company, club or charity looking to raise funds? Why not try a
          fun filled White Collar Boxing Fight Night to ensure a knockout time
          &amp; to raise those funds?
        </p>
        <p>
          Our White Collar Boxing events are the ultimate in entertainment.
          Whether you are the White Collar Warrior, raising funds for your
          organisation or a guest supporting the event, we guarantee a night to
          remember.
        </p>
        <p>
          We have been in business since 2005, and have successfully ran White
          Collar Boxing events both nationwide and stateside. We are the best in
          the business, with many organisations returning year after year to run
          events. We pride ourselves on tailoring each event to the
          organisations specific needs.
        </p>
        <p>
          We provide a detailed 4 step process, taking you from the initial
          consultation to the final bell.
        </p>

        {steps.map((step) => (
          <div key={step.title}>
            <h2 className="mb-2 mt-8 font-heading text-2xl font-bold text-heading">
              {step.title}
            </h2>
            <p>{step.body}</p>
          </div>
        ))}

        <p className="pt-2">
          Make that call now and we will be more than happy to arrange a free
          consultation with one of our team at Whitecollarboxing.net!!{" "}
          <Link href="/contact" className="text-accent hover:underline">
            Contact us
          </Link>
        </p>
      </div>
    </PageWrap>
  );
}
