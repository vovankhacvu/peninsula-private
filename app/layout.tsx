import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-title",
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Peninsula Private",
  description:
    "Peninsula Private - Siêu phẩm căn hộ hạng sang tại Downtown Đà Nẵng",
  icons: {
    icon: "/images/favicon-v2.png",
    shortcut: "/images/favicon-v2.png",
    apple: "/images/favicon-v2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="vi">
  <body
  className={`${manrope.className} ${cormorant.variable} bg-white text-slate-900`}
>
  {children}
</body>
    </html>
  );
}
