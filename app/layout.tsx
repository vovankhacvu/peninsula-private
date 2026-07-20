  import { GoogleAnalytics } from "@next/third-parties/google";
  import type { Metadata } from "next";
  import "./globals.css";
  import { bodyFont, headingFont } from "@/app/fonts";
  import StructuredData from "@/components/SEO/StructuredData";
  export const metadata: Metadata = {
    metadataBase: new URL("https://www.peninsulaprivatedn.com"),

    title: {
      default: "Peninsula Private Đà Nẵng | Căn hộ hạng sang bên sông Hàn",
      template: "%s | Peninsula Private",
    },

    description:
      "Peninsula Private là dự án căn hộ hạng sang tại trung tâm Downtown Đà Nẵng, sở hữu vị trí ven sông Hàn cùng hệ tiện ích chuẩn quốc tế.",

    keywords: [
      "Peninsula Private",
      "Peninsula Private Đà Nẵng",
      "Peninsula Đà Nẵng",
      "căn hộ Đà Nẵng",
      "căn hộ ven sông Hàn",
      "chung cư Đà Nẵng",
      "bất động sản Đà Nẵng",
    ],

    authors: [{ name: "Peninsula Private" }],
    creator: "Peninsula Private",
    publisher: "Peninsula Private",

    alternates: {
      canonical: "/",
    },

    openGraph: {
      type: "website",
      locale: "vi_VN",
      url: "https://www.peninsulaprivatedn.com",
      siteName: "Peninsula Private",
      title: "Peninsula Private Đà Nẵng",
      description:
        "Khám phá siêu phẩm căn hộ hạng sang Peninsula Private tại Downtown Đà Nẵng.",
      images: [
        {
          url: "/images/og-cover.jpg",
          width: 1200,
          height: 630,
          alt: "Peninsula Private",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Peninsula Private",
      description: "Siêu phẩm căn hộ hạng sang bên sông Hàn.",
      images: ["/images/og-cover.jpg"],
    },

    robots: {
      index: true,
      follow: true,
    },

    icons: {
      shortcut: "/images/favicon.ico",
      apple: "/images/favicon.ico",
    },
  };

  export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/hero-desktop.webp"
          media="(min-width:1024px)"
        />

        <link
          rel="preload"
          as="image"
          href="/images/hero-mobile.webp"
          media="(max-width:1023px)"
        />
      </head>

      <body className={`${bodyFont.className} ${headingFont.variable}`}>
  <StructuredData />

  {children}

  <GoogleAnalytics gaId="G-S9JJ9R48M6" />
</body>
    </html>
  );
}