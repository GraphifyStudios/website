import type { Metadata, Viewport } from "next";
import { Inter, Roboto } from "next/font/google";
import Navbar from "~/components/navbar";
import { cn } from "~/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://graphify.zc.al"),
  title: {
    default: "Graphify",
    template: "%s — Graphify",
  },
  description: "A team dedicated to tracking and visualizing statistics.",
  themeColor: "#0094fe",
  twitter: {
    card: "summary",
    creator: "@ToastedDev",
    creatorId: "1145171094556426240",
    site: "@GraphifyStudios",
    siteId: "1457885285241421824",
  },
  openGraph: {
    title: "Graphify",
    type: "website",
    images: [
      {
        url: "https://yt3.ggpht.com/Dpd0xRxUuCO7d9NMscJcuUeqQPFNB14erk3cXiQ_wbx2KLGUoutAapAKRGdFvOCDeOM-z8D3JA=s176-c-k-c0x00ffffff-no-rj-mo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(inter.className, roboto.variable)}>
      <body>
        <Navbar />
        <main className="px-4 py-8 relative">{children}</main>
      </body>
    </html>
  );
}
