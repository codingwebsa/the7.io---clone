import "./globals.css";
import Navbar from "./Navbar";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sora",
});

export const metadata = {
  title:
    "The7: Elementor Creative Dark – Perfect solution for creative or marketing agency",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-ancent text-white ${sora.variable} font-sora overflow-x-hidden`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
