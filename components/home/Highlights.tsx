"use client";
import { headingFont } from "@/app/fonts";
import Image from "next/image";
import Reveal from "../ui/Reveal";
import {
  Waves,
  Building2,
  Sparkles,
  TrendingUp,
  Gem,
  Hotel,
  Banknote,
} from "lucide-react";

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="relative overflow-hidden bg-[#FCFBF8] py-28"
    >
      {/* Background Glow */}

      <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#EFD8A5]/20 blur-[180px]" />

      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#D6B46A]/15 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-8">

        <Reveal>

          <div className="mx-auto max-w-3xl text-center">

            <span
              className="
              inline-block
              rounded-full
              bg-[#F9F2DF]
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[6px]
              text-[#B48A3A]
              "
            >
              Điểm nổi bật
            </span>

            <h2
              className={`
    ${headingFont.className}
    text-5xl
    md:text-6xl
    font-semibold
    leading-[1.05]
    text-[#3F3528]
  `}
            >
              Những lợi thế
              <br />
              tạo nên Peninsula Private
            </h2>

            <p
              className="
              mx-auto
              mt-7
              max-w-2xl
              text-lg
              leading-8
              text-[#6E655D]
              "
            >
              Không chỉ là nơi an cư, Peninsula Private còn sở hữu
              những giá trị hiếm có ngay trung tâm Downtown Đà Nẵng.
            </p>

          </div>

        </Reveal>

        {/* BENTO GRID */}

        <div
          className="
          mt-20
          grid
          grid-cols-12
          gap-6
          "
        >
            {/* VIEW SÔNG HÀN */}

<div
  className="
    group
    relative
    col-span-12
    lg:col-span-7
    lg:row-span-2
    min-h-[520px]
    overflow-hidden
    rounded-[36px]
    bg-[#C59A45]
    shadow-[0_30px_80px_rgba(197,154,69,.25)]
  "
>
  {/* Background */}

  <Image
  src="/images/highlights/view.jpg"
  alt="View Sông Hàn"
  fill
  className="
    absolute
    inset-0
    object-cover
    object-center
    opacity-90
    transition-all
    duration-700
    ease-out
    group-hover:opacity-90
    group-hover:scale-105
  "
/>
  {/* Overlay */}

  <div
  className="
    absolute
    inset-0
    bg-gradient-to-br
    from-[#A97C2E]/80
    via-[#C59A45]/70
    to-[#D6B46A]/95
    transition-all
    duration-700
    group-hover:from-black/35
    group-hover:via-[#C59A45]/25
    group-hover:to-transparent
  "
/>

  {/* Glow */}

  <div
    className="
      absolute
      -right-32
      bottom-0
      h-80
      w-80
      rounded-full
      bg-white/20
      blur-[120px]
    "
  />

  {/* Number */}

  <div
    className="
      absolute
      right-8
      top-6
      text-[110px]
      font-bold
      leading-none
      text-white/10
      z-20
    "
  >
    01
  </div>
<div
  className="
    absolute
    inset-0
    bg-black/15
    transition-all
    duration-700
    group-hover:bg-black/0
  "
/>
  {/* Content */}

  <div
    className="
      relative
      z-20
      flex
      h-full
      flex-col
      p-10
    "
  >
    <div
      className="
        flex
        h-20
        w-20
        items-center
        justify-center
        rounded-full
        border
        border-white/30
        bg-white/10
        backdrop-blur-xl
      "
    >
      <Waves className="h-9 w-9 text-white" />
    </div>

    <span
      className="
        mt-10
        text-sm
        font-semibold
        uppercase
        tracking-[8px]
        text-white/70
      "
    >
      PANORAMA
    </span>

    <h3
      className="
        mt-5
        max-w-md
        text-5xl
        font-bold
        leading-tight
        text-white
      "
    >
      View Sông Hàn
      <br />
      Không Thể Thay Thế
    </h3>

    <p
      className="
        mt-6
        max-w-lg
        text-lg
        leading-8
        text-white/90
      "
    >
      Sở hữu tầm nhìn trực diện sông Hàn, trung tâm thành phố
      và toàn cảnh lễ hội pháo hoa quốc tế DIFF ngay từ ban công.
    </p>
  </div>

  {/* Shine */}

  <div
    className="
      pointer-events-none
      absolute
      inset-0
      -translate-x-full
      bg-gradient-to-r
      from-transparent
      via-white/20
      to-transparent
      transition-transform
      duration-700
      group-hover:translate-x-full
    "
  />
</div>

{/* DIFF */}

<div
  className="
    group
    relative
    col-span-12
    sm:col-span-3
    lg:col-span-5
    overflow-hidden
    rounded-[30px]
    border
    border-[#ECE2CB]
    bg-white
    p-8
    transition-all
    duration-500
    hover:-translate-y-2
    hover:border-[#C59A45]
    hover:shadow-[0_25px_70px_rgba(0,0,0,.10)]
  "
>
<Image
  src="/images/highlights/diff.jpg"
  alt="DIFF"
  fill
  className="
    absolute
    inset-0
    object-cover
    object-center
    opacity-10
    transition-all
    duration-700
    group-hover:opacity-90
    group-hover:scale-105
  "
/>

<div
  className="
    absolute
    inset-0
    bg-white/10
    transition-all
    duration-700
    group-hover:bg-white/10
  "
/>
  <div className="absolute right-7 top-5 text-7xl font-bold text-[#D6B46A]/10">
    02
  </div>

  <Sparkles className="h-9 w-9 text-[#C59A45]" />

  <h3 className="mt-10 text-3xl font-bold text-[#3F3528]">
    DIFF
  </h3>

  <p className="mt-4 leading-8 text-[#6E655D]">
    Thưởng thức lễ hội pháo hoa quốc tế ngay từ ban công căn hộ.
  </p>

</div>

{/* TĂNG GIÁ */}

<div
  className="
    group
    relative
    col-span-12
    sm:col-span-6
    lg:col-span-5
    overflow-hidden
    rounded-[30px]
    border
    border-[#ECE2CB]
    bg-white
    p-8
    transition-all
    duration-500
    hover:-translate-y-2
    hover:border-[#C59A45]
    hover:shadow-[0_25px_70px_rgba(0,0,0,.10)]
  "
>
<Image
  src="/images/highlights/growth.jpg"
  alt="Tiềm năng tăng giá"
  fill
  className="
    absolute
    inset-0
    object-cover
    object-center
    opacity-10
    transition-all
    duration-700
    group-hover:opacity-90
    group-hover:scale-105
  "
/>

<div
  className="
    absolute
    inset-0
    bg-white/10
    transition-all
    duration-700
    group-hover:bg-white/10
  "
/>
  <div className="absolute right-7 top-5 text-7xl font-bold text-[#D6B46A]/10">
    03
  </div>

  <TrendingUp className="h-9 w-9 text-[#C59A45]" />

  <h3 className="mt-10 text-3xl font-bold text-[#3F3528]">
    Tiềm năng
    <br />
    tăng giá
  </h3>

  <p className="mt-4 leading-8 text-[#6E655D]">
    Quỹ đất ven sông Hàn ngày càng khan hiếm, dư địa tăng trưởng bền vững.
  </p>

</div>

{/* DOWNTOWN */}

<div
  className="
    group
    relative
    col-span-12
    sm:col-span-6
    lg:col-span-4
lg:row-span-1
    overflow-hidden
    rounded-[30px]
    border
    border-[#ECE2CB]
    bg-white
    p-8
    transition-all
    duration-500
    hover:-translate-y-2
    hover:border-[#C59A45]
    hover:shadow-[0_25px_70px_rgba(0,0,0,.10)]
    min-h-[270px]
  "
>
<Image
  src="/images/highlights/downtown.jpg"
  alt="Downtown"
  fill
  className="
    absolute
    inset-0
    object-cover
    object-center
    opacity-10
    transition-all
    duration-700
    group-hover:opacity-90
    group-hover:scale-105
  "
/>

<div
  className="
    absolute
    inset-0
    bg-white/10
    transition-all
    duration-700
    group-hover:bg-white/10
  "
/>
  <div className="absolute right-7 top-5 text-7xl font-bold text-[#D6B46A]/10">
    04
  </div>

  <Building2 className="h-9 w-9 text-[#C59A45]" />

  <h3 className="mt-10 text-3xl font-bold text-[#3F3528]">
    Downtown
  </h3>

  <p className="mt-4 leading-8 text-[#6E655D]">
    Ngay trung tâm Đà Nẵng, kết nối nhanh sân bay, biển Mỹ Khê và sông Hàn.
  </p>

</div>

{/* CHO THUÊ */}

<div
  className="
    group
    relative
    col-span-12
    sm:col-span-6
    lg:col-span-4
lg:row-span-1
    overflow-hidden
    rounded-[30px]
    border
    border-[#ECE2CB]
    bg-white
    p-8
    transition-all
    duration-500
    hover:-translate-y-2
    hover:border-[#C59A45]
    hover:shadow-[0_25px_70px_rgba(0,0,0,.10)]
    min-h-[270px]
  "
>
<Image
  src="/images/highlights/forrent.jpg"
  alt="Khai thác cho thuê"
  fill
  className="
    absolute
    inset-0
    object-cover
    object-center
    opacity-10
    transition-all
    duration-700
    group-hover:opacity-90
    group-hover:scale-105
  "
/>

<div
  className="
    absolute
    inset-0
    bg-white/10
    transition-all
    duration-700
    group-hover:bg-white/10
  "
/>
  <div className="absolute right-7 top-5 text-7xl font-bold text-[#D6B46A]/10">
    06
  </div>

  <Hotel className="h-9 w-9 text-[#C59A45]" />

  <h3 className="mt-10 text-3xl font-bold text-[#3F3528]">
    Khai thác
    <br />
    cho thuê
  </h3>

  <p className="mt-4 leading-8 text-[#6E655D]">
    Hưởng lợi từ lượng khách du lịch và chuyên gia quốc tế quanh năm.
  </p>

</div>
{/* RUMOR */}

<div
  className="
    group
    relative
    col-span-12
    sm:col-span-6
    lg:col-span-4
lg:row-span-1
    overflow-hidden
    rounded-[30px]
    border
    border-[#ECE2CB]
    bg-white
    p-8
    transition-all
    duration-500
    hover:-translate-y-2
    hover:border-[#C59A45]
    hover:shadow-[0_25px_70px_rgba(0,0,0,.10)]
    min-h-[270px]
  "
>
<Image
  src="/images/highlights/rumor.jpg"
  alt="Rumor"
  fill
  className="
    absolute
    inset-0
    object-cover
    object-center
    opacity-10
    transition-all
    duration-700
    group-hover:opacity-90
    group-hover:scale-105
  "
/>

<div
  className="
    absolute
    inset-0
    bg-white/10
    transition-all
    duration-700
    group-hover:bg-white/10
  "
/>
   <div className="absolute right-7 top-5 text-7xl font-bold text-[#D6B46A]/10">
    07
  </div>
<Banknote
  className="h-9 w-9 text-[#C59A45]"
/>
  <span className="text-sm font-semibold uppercase tracking-[8px] text-white/80">
    RUMOR
  </span>

  <div className="mt-10 flex items-end gap-2">

<h3 className="mt-10 text-3xl font-bold text-[#3F3528]">
    65
    <br />
    triệu/m²
  </h3>
    
  </div>

  <p className="mt-4 leading-8 text-[#6E655D]">
    Mức giá đang được thị trường quan tâm, tạo sức hút lớn trước thời điểm
    chính thức công bố.
  </p>

  <div
    className="
      absolute
      -right-24
      -bottom-24
      h-72
      w-72
      rounded-full
      bg-white/20
      blur-[120px]
    "
  />

</div>

        </div>

      </div>

    </section>
  );
}