import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://enoksis.com"),

  title: {
    default: "ENOKSİS | Mizaç Merkezli Eğitim",
    template: "%s | ENOKSİS",
  },

  description:
    "ENOKSİS, öğrencilerin bireysel farklılıklarını mizaç temelli verilerle görünür hale getiren bütüncül okul rehberlik sistemidir.",

  applicationName: "ENOKSİS",

  keywords: [
    "ENOKSİS",
    "mizaç",
    "mizaç testi",
    "okul rehberlik sistemi",
    "öğrenci takip sistemi",
    "enneagram",
    "rehberlik",
  ],

  authors: [
    {
      name: "Enneagram Eğitim ve Danışmanlık",
    },
  ],

  creator: "Enneagram Eğitim ve Danışmanlık",

  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://enoksis.com",
    siteName: "ENOKSİS",
    title: "ENOKSİS | Mizaç Merkezli Eğitim",
    description:
      "Her öğrenciyi kendi doğasıyla tanıyın. Mizaç temelli bütüncül okul rehberlik sistemi.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={manrope.variable}>
      <body className="font-[family-name:var(--font-manrope)]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}