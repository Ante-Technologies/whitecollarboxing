export const site = {
  name: "White Collar Boxing",
  tagline: "Fundraising & Events Boxing & Fitness Gym",
  domain: "whitecollarboxing.org",
  url: "https://whitecollarboxing.org",
  foundedYear: 2005,
  address: {
    line1: "Unit 2b, Greenmount Industrial Estate",
    line2: "Harold's Cross, Dublin 6w",
  },
  phones: [
    { label: "RoI", number: "087 852 6323", href: "tel:+353878526323" },
    { label: "NI", number: "0755 4323902", href: "tel:+447554323902" },
  ],
  email: "info@whitecollarboxing.org",
  social: {
    youtube: "https://www.youtube.com/user/whitecollarbox",
    twitter: "https://twitter.com/whitecollar_ie",
    facebook: "https://www.facebook.com/whitecollarboxing",
  },
  videos: ["zPrfoXfpGh4", "v6a9_rkIGFc"],
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Events",
    href: "/events",
    children: [
      { label: "Events", href: "/events" },
      { label: "Fundraisers", href: "/events/fundraisers" },
      {
        label: "Previous Events",
        href: "/category/events_main_page/previous_events",
      },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
  { label: "News", href: "/news" },
  {
    label: "Contact Us",
    href: "/contact",
    children: [
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];
