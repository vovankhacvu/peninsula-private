"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, Phone, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../ui/Container";
import { trackEvent } from "@/lib/gtag";

const menus = [
  { name: "Giới thiệu", href: "#gioi-thieu" },
  { name: "Tổng quan", href: "#tong-quan" },
  { name: "Vị trí", href: "#vi-tri" },
  { name: "Tiện ích", href: "#tien-ich" },
  { name: "Mặt bằng", href: "#mat-bang" },
  { name: "Điểm nổi bật", href: "#highlights" },
  { name: "Liên hệ", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (id: string) => {
  const section = document.getElementById(id);

  if (!section) return;

  const navbar = document.querySelector("header");
  const navbarHeight = isScrolled ? 72 : 72;

  const y =
    section.getBoundingClientRect().top +
    window.pageYOffset -
    navbarHeight;

  console.log({
    top: section.getBoundingClientRect().top,
    pageYOffset: window.pageYOffset,
    navbarHeight,
    y,
  });

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });

  setIsOpen(false);
};
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  setIsOpen(false);
};
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
  initial={{
  y: -80,
  opacity: 0,
}}

animate={{
  y: 0,
  opacity: 1,
}}
  transition={{
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1],
}}
      className={`fixed top-0 left-0 z-50 w-full transition-[background-color,box-shadow] duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-[0_12px_40px_rgba(0,0,0,.10)] backdrop-blur-md"
          : "bg-[#FAF8F3]/95 backdrop-blur-sm"
      }`}
    >
      <Container
  className={`flex items-center transition-all duration-500 ${
    isScrolled ? "h-[72px]" : "h-[84px]"
  }`}
>

        {/* Logo */}
        <motion.button
  onClick={scrollToTop}
  className="flex-shrink-0 cursor-pointer"
  aria-label="Quay về đầu trang"
  initial={{ opacity: 0, x: -30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    delay: 0.2,
    duration: 0.6,
  }}
>
          <Image
  src="/images/logo.png"
  alt="Peninsula Private"
  width={isScrolled ? 130 : 150}
  height={isScrolled ? 40 : 45}
  priority
  className="
    transition-all
    duration-500
    hover:scale-105
    active:scale-95
  "
/>
        </motion.button>

        {/* Desktop Menu */}
        <motion.nav
  className="ml-16 hidden flex-1 lg:block"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    delay: 0.35,
    duration: 0.6,
  }}
>
          <ul className="flex items-center justify-center gap-10">
            {menus.map((menu, index) => (
              <motion.li initial={{
  opacity: 0,
  y: -20,
}}

animate={{
  opacity: 1,
  y: 0,
}}

transition={{
  delay: 0.45 + index * 0.08,
  duration: 0.4,
}}
                key={menu.name}
                className="
                  relative
                  cursor-pointer
                  text-[15px]
                  font-medium
                  tracking-wide
                  text-[#4B443C]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:text-[#B48A3A]

                  after:absolute
                  after:left-0
                  after:-bottom-2
                  after:h-[2px]
                  after:w-0
                  after:bg-[#B48A3A]
                  after:transition-all

                  hover:after:w-full
                "
              >
               <button
  type="button"
  onClick={() => scrollToSection(menu.href.replace("#", ""))}
>
  {menu.name}
</button>
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        {/* Desktop Hotline */}
        <motion.a initial={{
  opacity: 0,
  x: 60,
}}

animate={{
  opacity: 1,
  x: 0,
}}

transition={{
  delay: 0.8,
  duration: 0.6,
}}
          href="tel:0945562311"
          onClick={() =>
    trackEvent("click_phone", {
      phone_number: "0945562311",
    })
  }
          aria-label="Gọi hotline 0945 562 311"
          className="
            ml-8
            mr-5
            hidden
            shrink-0
            items-center
            gap-3
            rounded-full
            border
            border-[#C8A55C]
            bg-gradient-to-r
            from-[#F7E6A8]
            to-[#E2BD67]
            px-4
            py-2
            shadow-[0_8px_25px_rgba(0,0,0,.08)]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:shadow-[0_12px_30px_rgba(0,0,0,.12)]
            lg:flex
          "
        >
          <PhoneCall className="h-5 w-5 text-[#5A4416]" />

          <span className="text-[18px] font-bold tracking-wide text-[#5A4416]">
            0945 562 311
          </span>
        </motion.a>

        {/* Mobile Hotline */}
        <motion.a initial={{
  opacity: 0,
  scale: 0.8,
}}

animate={{
  opacity: 1,
  scale: 1,
}}

transition={{
  delay: 0.4,
}}
          href="tel:0945562311"
          onClick={() =>
    trackEvent("click_phone", {
      phone_number: "0945562311",
    })
  }
          aria-label="Gọi hotline 0945 562 311"
  className="
  
    ml-auto
    hover:-translate-y-0.5
    hover:shadow-[0_12px_30px_rgba(0,0,0,.12)]
    border
    border-[#C8A55C]
    mr-3
    flex
    h-11
    w-11
    items-center
    justify-center
    rounded-full
    bg-gradient-to-r
    from-[#F7E6A8]
    to-[#E2BD67]
    shadow-lg
    lg:hidden
  "
>
  <Phone 
  aria-hidden="true"
  className="h-5 w-5 text-[#5A4416]" />

          <span className="text-[18px] font-bold text-[#5A4416]">
          </span>
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
        id="mobile-menu"
  whileTap={{ scale: 0.9 }}
  whileHover={{ scale: 1.08 }}
  onClick={() => setIsOpen(!isOpen)}
  className="text-[#5A4416] lg:hidden"
  aria-label={isOpen ? "Đóng menu điều hướng" : "Mở menu điều hướng"}
  aria-expanded={isOpen}
  aria-controls="mobile-menu"
  
>
  {isOpen ? <X size={30} /> : <Menu size={30} />}
</motion.button>

      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
  {isOpen && (
        <motion.div
  initial={{
    opacity: 0,
    y: -30,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  exit={{
    opacity: 0,
    y: -30,
  }}
  transition={{
    duration: 0.25,
  }}
  className="border-t border-[#E8DDC6] bg-[#FCFBF8] lg:hidden"
>
          <div className="flex flex-col px-6 py-4">
            {menus.map((menu) => (
              <button
              type="button"
  key={menu.name}
  onClick={() => scrollToSection(menu.href.replace("#", ""))}
  className="
    border-b
    border-[#EEE4D1]
    py-4
    text-left
    text-[#5A4416]
    transition
    hover:text-[#B48A3A]
  "
>
  {menu.name}
</button>
            ))}
          </div>
        </motion.div>
    
      )}
    
</AnimatePresence>
    </motion.header>
  );
}
