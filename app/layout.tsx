import type { Metadata } from "next";
import "./globals.css";
import TransitionProvider from "@/components/providers/TransitionProvider";
import { bodyFont } from "@/app/fonts";

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
      <body className={bodyFont.className}>
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}