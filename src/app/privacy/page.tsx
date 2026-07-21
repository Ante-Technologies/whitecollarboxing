import type { Metadata } from "next";
import { PageWrap } from "@/components/page-wrap";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Here at whitecollarboxing.net we respect your privacy and are completely committed to protecting any information shared with us.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <PageWrap title="Privacy">
      <div className="max-w-4xl space-y-6 text-base leading-relaxed text-foreground">
        <p>
          Here at whitecollarboxing.net we respect your privacy and are completely
          committed to protecting any information shared with us including contact
          details. We provide this Privacy Statement to inform you of our Privacy
          Policy.
        </p>
        <p>
          The whitecollarboxing.net Web Site is structured so you can visit us on
          the web without identifying yourself or revealing any personal
          information. This statement notice is available to you on every page of
          this website.
        </p>
        <p>
          All information received by us through email links or enquiries will be
          treated with complete confidentiality.
        </p>
      </div>
    </PageWrap>
  );
}
