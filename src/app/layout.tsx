import type { Metadata } from "next";
import { Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GoogleAnalytics } from "@/components/analytics";
import { site } from "@/lib/site";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "White Collar Boxing | Fundraising & Fitness Boxing Events",
    template: "%s | White Collar Boxing",
  },
  description:
    "White Collar Boxing runs boxing training and fundraising boxing events, bringing the benefits of boxing for fitness to a whole new audience.",
  keywords: [
    "white collar boxing",
    "boxing fitness",
    "fundraising boxing events",
    "boxing gym",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title: "White Collar Boxing | Fundraising & Fitness Boxing Events",
    description:
      "White Collar Boxing runs boxing training and fundraising boxing events, bringing the benefits of boxing for fitness to a whole new audience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
