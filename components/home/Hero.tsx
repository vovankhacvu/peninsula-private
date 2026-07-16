"use client";
import { useState } from "react";
import LeadModal from "../ui/LeadModal";
import { motion } from "framer-motion"; 
import Button from "../ui/Button"; 


export default function Hero() {
  const [openLead, setOpenLead] = useState(false);
  return (
    <motion.section
  className="
  relative
  h-[38vh]
  lg:min-h-screen

  bg-cover
  bg-[center_90px]
  lg:bg-[center_60px]

  lg:bg-[length:95%]

  " initial={{
  y: -80,
}}

animate={{
  y: 0,
}}

transition={{
  duration: 0.9,
  ease: [0.22, 1, 0.36, 1],
}}
     style={{
  backgroundImage: "url('/images/hero.jpg')",
  backgroundPosition: "center 70px",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
}}
    >
      

            {/* Content */}
      <div className="relative z-20 flex h-screen items-center justify-center">
        <div className="text-center px-6">

          {/* Desktop */}
          <motion.div
            className="fixed right-35 top-24 z-50 hidden lg:flex flex-row items-center gap-4"
            initial={{
              opacity: 0,
              x: 80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: "easeOut",
            }}
          >
            <Button
              onClick={() => setOpenLead(true)}
              className="
                rounded-full
                bg-gradient-to-r
                from-[#D6B46A]
                via-[#C59A45]
                to-[#A97C2E]
                px-8
                py-4
                font-semibold
                text-[#4B3512]
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
                hover:brightness-110
              "
            >
              Nhận bảng giá
            </Button>

            <Button
  variant="outline"
  onClick={() => {
    document
      .getElementById("tong-quan")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
  className="
    rounded-full
    border
    border-white/70
    bg-white/10
    backdrop-blur-md
    px-7
    py-3
    text-white
    font-semibold
    transition-all
    duration-300
    hover:bg-white
    hover:text-[#7B5B24]
    hover:border-white
    hover:shadow-xl
  "
>
  Xem dự án
</Button>
          </motion.div>

        </div>
      </div>

      {/* Popup */}
      <LeadModal
        open={openLead}
        onClose={() => setOpenLead(false)}
      />
    </motion.section>
  );
}