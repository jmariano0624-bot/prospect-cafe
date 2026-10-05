import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cether Specialty Coffee + Bistro — Quezon City",
  description:
    "Specialty coffee, bistro dining, and a warm welcome in Quezon City. Visit Cether at The Building, 146 D. Tuazon, Sta. Mesa Heights.",
  openGraph: {
    title: "Cether Specialty Coffee + Bistro — Quezon City",
    description:
      "Coffee worth slowing down for. Food worth staying for. Make yourself at home at Cether.",
    type: "website",
    locale: "en_PH",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
