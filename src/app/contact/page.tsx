import type { Metadata } from "next";
import { PageWrap } from "@/components/page-wrap";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Contact Cathal O'Grady and the team at Whitecollarboxing.net / WhitecollarHQ, Unit 2b, Greenmount Industrial Estate, Harold's Cross, Dublin 6w.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageWrap title="Contact us">
      <div className="space-y-10">
        <div>
          <div className="space-y-4 text-base leading-relaxed text-foreground">
            <div>
              <p className="font-heading text-lg font-bold text-heading">
                whitecollarboxing.net
              </p>
              <p>WhitecollarHQ,</p>
              <p>{site.address.line1},</p>
              <p>Harold&apos;s Cross,</p>
              <p>Dublin 6w.</p>
            </div>

            <p className="pt-2 font-semibold text-heading">
              Contact Cathal O&apos;Grady on....
            </p>
            <p>
              Email:{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-accent hover:underline"
              >
                {site.email}
              </a>
            </p>
            {site.phones.map((phone) => (
              <p key={phone.href}>
                ({phone.label}) Call:{" "}
                <a href={phone.href} className="text-accent hover:underline">
                  {phone.number}
                </a>
              </p>
            ))}
          </div>
        </div>

        <div className="max-w-2xl">
          <div className="border border-border bg-surface p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </PageWrap>
  );
}
