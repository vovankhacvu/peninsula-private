"use client";
import { useState } from "react";
import LeadModal from "../ui/LeadModal";
import { motion } from "framer-motion"; 
import Button from "../ui/Button"; 


export default function Hero() {
  const [openLead, setOpenLead] = useState(false);
  const [openVideo, setOpenVideo] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    const navbarHeight = window.innerWidth < 1024 ? 68 : 84;

    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };
  return (
    <motion.section
  initial={{ y: -80 }}
  animate={{ y: 0 }}
  transition={{
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="relative min-h-screen overflow-hidden"
>
  {/* Desktop Background */}
  <div
    className="
      absolute
      inset-0
      hidden
      lg:block
      bg-cover
      bg-center
      bg-no-repeat
    "
    style={{
      backgroundImage: "url('/images/hero-desktop.jpg')",
      backgroundPosition: "center 80px",
    }}
  />

  {/* Mobile Background */}
  <div
    className="
      absolute
      inset-0
      lg:hidden
      bg-cover
      bg-center
      bg-no-repeat
    "
    style={{
      backgroundImage: "url('/images/hero-mobile.jpg')",
      backgroundPosition: "center 68px",
    }}
  />

  {/* Overlay */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-b
      from-black/10
      via-transparent
      to-black/20
      lg:from-black/0
      lg:to-black/0
    "
  />

  {/* Content */}
  <div className="relative z-20 flex min-h-screen items-center justify-center">
    <div className="px-5 lg:px-6">
{/* Hero Content */}
{/* Content */}
<div className="relative z-20 flex min-h-screen items-end lg:items-center">
  <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 pb-12 lg:pb-24">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="max-w-xl
    translate-y-1
    sm:translate-y-10
    lg:translate-y-28
  "
    >
      {/* Badge */}
      <div
  className="
    inline-flex
    rounded-full
    bg-gradient-to-r
    from-[#D6B46A]
    to-[#A97C2E]
    px-5
    py-2
    shadow-lg
  "
>
  <span className="text-xs font-semibold tracking-[0.18em] text-white uppercase">
    Siêu phẩm căn hộ hạng sang
  </span>
</div>

      {/* Title */}
      <h1
  className="
    mt-8
    font-[family:var(--font-title)]
    text-[56px]
    lg:text-[82px]
    leading-[0.9]
    font-semibold
    tracking-[0.03em]
    text-[#F7F3EC]
    drop-shadow-[0_8px_20px_rgba(0,0,0,.35)]
  "
>
  PENINSULA
  <br />
  PRIVATE
</h1>
      {/* Description */}
      <p
  className="
    mt-8
    max-w-[560px]
    text-[18px]
    lg:text-[20px]
    leading-8
    font-light
    text-white/90
    drop-shadow-[0_2px_8px_rgba(0,0,0,.35)]
  "
>
  Kiệt tác căn hộ ven sông tại trung tâm Đà Nẵng. Sở hữu vị trí
  đắc địa, tầm nhìn hướng biển và hệ tiện ích nghỉ dưỡng chuẩn quốc tế.
</p>

      {/* CTA */}
      <div className="mt-8 flex flex-wrap gap-4">
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
            shadow-xl
            transition
            hover:-translate-y-1
            hover:shadow-2xl
          "
        >
          Nhận thông tin dự án
        </Button>

        <Button
          variant="outline"
          onClick={() => setOpenVideo(true)}
          className="
            rounded-full
            border
            border-white/60
            bg-black/20
            px-8
            py-4
            font-semibold
            text-white
            backdrop-blur-md
            transition
            hover:bg-white
            hover:text-[#7B5B24]
          "
        >
          Khám phá dự án
        </Button>
      </div>
    </motion.div>

  </div>
</div>
      
    </div>
  </div>

  <LeadModal
    open={openLead}
    onClose={() => setOpenLead(false)}
  />
  {openVideo && (
  <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.25 }}
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
    onClick={() => setOpenVideo(false)}
  >
    <motion.div
  initial={{
    opacity: 0,
    scale: 0.92,
    y: 20,
  }}
  animate={{
    opacity: 1,
    scale: 1,
    y: 0,
  }}
  exit={{
    opacity: 0,
    scale: 0.95,
  }}
  transition={{
    duration: 0.35,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black"
  onClick={(e) => e.stopPropagation()}
>
      <button
        onClick={() => setOpenVideo(false)}
        className="absolute right-4 top-4 z-10 h-10 w-10 rounded-full bg-white/20 text-white hover:bg-white/30"
      >
        ✕
      </button>

      <div className="aspect-video bg-black">
  <video
    className="h-full w-full"
    controls
  controlsList="nodownload"
  disablePictureInPicture
  autoPlay
  playsInline
   poster="/images/video-cover.jpg"
  >
    <source
      src="/videos/peninsula.mp4"
      type="video/mp4"
    />

    Trình duyệt của bạn không hỗ trợ video.
  </video>
</div>
    </motion.div>
  </motion.div>
)}
</motion.section>
  );
}