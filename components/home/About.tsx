"use client";
import { useState } from "react";
import LeadModal from "../ui/LeadModal";
import Image from "next/image";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import { CheckCircle2 } from "lucide-react";

export default function About() {
    const [openLead, setOpenLead] = useState(false);
  return (
    <section
  id="gioi-thieu"
  className="scroll-mt-24 bg-[#FCFBF8] py-24"
>
      <div className="mx-auto grid max-w-7xl items-center gap-28 px-6 lg:grid-cols-2">

        {/* Image */}
        <Reveal>
          <div
  className="
  group
  relative
  overflow-hidden
  rounded-[32px]
  shadow-[0_30px_80px_rgba(0,0,0,.18)]
"
>
            <Image
              src="/images/about.jpg"
              alt="Peninsula Private"
              width={1200}
              height={800}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110 duration-1000"
            />
<div
  className="
  absolute
  inset-0
  bg-gradient-to-t
  from-black/45
  via-transparent
  to-transparent
"
/>
            <div className="
absolute
left-10
top-6
rounded-full
bg-white/90
backdrop-blur-xl
px-3
py-1
text-xs
font-semibold
tracking-wide
text-[#8C6B2F]
">
              DOWNTOWN CENTER

            </div>
          </div>
        </Reveal>

        {/* Content */}
        <Reveal delay={0.15}>
  <div>

    <span className="uppercase tracking-[16px] text-sm font-bold text-[#B48A3A]">
      Peninsula Private
    </span>

    <div className="mt-3 h-[2px] w-20 bg-[#B48A3A]" />

    <h2 className="mt-6 text-4xl font-bold leading-tight text-[#3F3528]">
      Biểu tượng sống
      <br />
      thượng lưu
      <br />
      giữa Downtown Đà Nẵng
    </h2>

    <p className="mt-8 text-[18px] leading-9 text-[#6E655D]">
      Peninsula Private sở hữu vị trí hiếm có tại trung tâm Downtown Đà Nẵng,
      nơi hội tụ giá trị sống, đầu tư và nghỉ dưỡng với tầm nhìn trực diện
      sông Hàn cùng lễ hội pháo hoa quốc tế.
    </p>

    <div className="mt-10 space-y-6">

      {[
        "Vị trí kim cương giữa Downtown Đà Nẵng",
        "View trực diện sông Hàn & pháo hoa DIFF",
        "Chuẩn sống nghỉ dưỡng 5 sao",
        "Tiềm năng đầu tư dài hạn"
      ].map((item) => (

        <div
          key={item}
          className="flex items-center gap-4"
        >
          <CheckCircle2
            className="h-6 w-6 text-[#B48A3A]"
          />

          <span className="text-[17px] text-[#4A433B]">
            {item}
          </span>

        </div>

      ))}

    </div>

    <div className="mt-12 flex flex-wrap gap-5">

      <Button
      onClick={() => setOpenLead(true)}

        className="
        rounded-full
        bg-gradient-to-r
        from-[#D6B46A]
        via-[#C59A45]
        to-[#A97C2E]
        px-6
        py-3
        text-[#4B3512]
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
      "
      >
        Đăng ký nhận thông tin chi tiết
      </Button>

      <Button
      variant="outline"
  onClick={() => {
    document
      .getElementById("vi-tri")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
         className="
        rounded-full
        bg-gradient-to-r
        from-[#D6B46A]
        via-[#C59A45]
        to-[#A97C2E]
        px-6
        py-3
        text-[#4B3512]
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
      "
      >
        Xem vị trí
      </Button>

    </div>

  </div>
</Reveal>

      </div>
      <LeadModal
  open={openLead}
  onClose={() => setOpenLead(false)}
/>
    </section>
  );
}