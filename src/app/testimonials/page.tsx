import type { Metadata } from "next";
import { PageWrap } from "@/components/page-wrap";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read what organisers and participants say about running a fundraising White Collar Boxing Fight Night with Whitecollarboxing.net.",
  alternates: { canonical: "/testimonials" },
};

const testimonials = [
  {
    heading: "Kops4Kidz Testimonial",
    author: "Darran Conlon (On behalf of the Organising Committee for Kops4Kidz)",
    body: [
      "On behalf of the Kops4kidz Committee, I want to thank you sincerely for the most professional service you provided to us throughout our journey in the Kops4kids endeavour. A journey which started eight weeks ago with you in the National Stadium and cumulated last Friday night in front of a 1600 capacity crowd in the Spectacular Wright Venue.",
      "You assisted in bringing our novice boxers from the anxiousness of their first training session to performing heroically in this charity boxing event for St. Johns Ward, in Crumlin Childrens Hospital. I am delighted to report that we are closing in on achieving 100K for St. Johns Ward. You and everyone in whitecollarboxing.net can be very proud of the huge part you played in this wonderful achievement.",
      "I have received countless messages complimenting the quality and professionalism of the fantastic production which you put in place on Fight Night. Personally I found you to be a source of invaluable advice over the lead up to the event. On the night itself you were an oasis of calm. A true sign of a professional with vast knowledge, experience and competence in this field.",
    ],
  },
  {
    heading: "Irish Motor Neurone Disease Association (IMNDA) Testimonial",
    author: "Gemma Watts, IMNDA Fundraising Coordinator",
    body: [
      "In 2009 the Irish Motor Neurone Disease Association (IMNDA) became aware of whitecollarboxing.net and how this phenomenon could be a potentially big fundraising event. The wheels were put in motion and the Battle at Croker was born! As this was a new event for us we were full of questions & queries. Cathal and his team put our minds at rest; they look after so many aspects of the event and are full of experienced advice on all areas.",
      "The feedback we received from all our boxers about the training and the show itself was top class and the event was far more successful than we could have hoped for; so much so that we went back for more in 2010 and will be running another in 2011!",
    ],
  },
  {
    heading: "Davy Stockbrokers Testimonial",
    author: "Tony O Connor, Director of Money Markets, Davy Stockbrokers",
    body: [
      "It was spring 2009 and the world financial markets were in turmoil. With company morale at an all-time low we needed to inject a bit of life back into the place. We decided to do a white collar boxing fight night with WhiteCollarBoxing.net. While people in my profession are seen as natural risk takers, working with Cathal and his team was the safest investment we could possibly have made. To this day it remains the most talked about corporate event ever involving the company.",
      "The venue the lads at WhiteCollarBoxing.net chose was top class and no expense was spared in the production of the show. The training facilities they use are the best in the country. The show itself raised €20,000 for the Irish Amateur Boxing Association and helped keep our national team among the top of the international rankings. I could not recommend this experience enough. Keep those hands up!",
    ],
  },
  {
    heading: "Outreach Moldova Testimonial",
    author: "Ann-Marie Burke, Outreach Moldova Fundraiser",
    body: [
      "I worked with Cathal and Whitecollarboxing.net in 2010 and 2011. Together we organised two boxing events to raise funds for Outreach Moldova (ORM). The \"ORM Fight Night\" events were hugely successful and they both raised €15k for the charity.",
      "White Collar Boxing have a fantastic training arena in the National Boxing Stadium and their trainers are some of the best in the business. Over two years White Collar Boxing trained 60 fighters for my events. The Fight Night itself is a very well organised and professional event — they take care of everything from the DJ and MC to the Ref and even photography. I will definitely be working with Cathal and Whitecollarboxing again in the near future!",
    ],
  },
];

export default function TestimonialsPage() {
  return (
    <PageWrap title="Testimonials">
      <div className="max-w-4xl space-y-10">
        {testimonials.map((item) => (
          <div key={item.heading}>
            <h2 className="mb-3 font-heading text-2xl font-bold text-heading">
              {item.heading}
            </h2>
            <div className="space-y-4 border-l-4 border-accent pl-5 text-base leading-relaxed text-foreground">
              {item.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <p className="font-semibold text-heading">— {item.author}</p>
            </div>
          </div>
        ))}
      </div>
    </PageWrap>
  );
}
