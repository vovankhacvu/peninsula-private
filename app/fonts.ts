import { Cormorant_Garamond, Manrope } from "next/font/google";

export const headingFont = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-heading",
});

export const bodyFont = Manrope({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-body",
});