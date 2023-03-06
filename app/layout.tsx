import "./globals.css";
import { Sora } from "next/font/google";
import { Navbar } from "@/components";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-sora",
});

export const metadata = {
  title:
    "The7: Elementor Creative Dark – Perfect solution for creative or marketing agency",
  description:
    "We build digital experiences Websites Branding Digital Marketing The last digital agency you’ll ever need Suspendisse ut magna porttitor, sollicitudin ligula at, molestie dolor. Vivamus a ligula ut velit placerat egestas at id leo. Nulla ac volutpat nunc. Nulla facilisi. Pellentesque tempus tellusut magna porttitor scelerisque. 10+ years of market experience Unique technologies & modern…",
  // open graph
  openGraph: {
    title:
      "The7: Elementor Creative Dark – Perfect solution for creative or marketing agency",
    description:
      "We build digital experiences Websites Branding Digital Marketing The last digital agency you’ll ever need Suspendisse ut magna porttitor, sollicitudin ligula at, molestie dolor. Vivamus a ligula ut velit placerat egestas at id leo. Nulla ac volutpat nunc. Nulla facilisi. Pellentesque tempus tellusut magna porttitor scelerisque. 10+ years of market experience Unique technologies & modern…",
    url: "https://the7.vercel.app",
    siteName: "The7: Elementor Creative Dark",
    images: [
      {
        url: "https://the7.vercel.app/og.jpg",
        width: 1500,
        height: 1000,
      },
      {
        url: "https://the7.vercel.app/og-alt.jpg",
        width: 1500,
        height: 1000,
        alt: "opengraph image",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  themeColor: "#080e10",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-ancent text-white pb-64 ${sora.variable} font-sora overflow-x-hidden`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
