"use client";
import { headingFont } from "@/app/fonts";
import Image from "next/image";
import { Building2, MapPin, Gem, Trees, ShieldCheck, TrendingUp } from "lucide-react";
import Reveal from "../ui/Reveal";

const items = [
  {
    icon: Building2,
    value: "39",
    title: "Tầng biểu tượng",
    image: "/images/cards/card-building.jpg",
  },
  {
    icon: Gem,
    value: "5★",
    title: "Tiện ích chuẩn quốc tế",
    image: "/images/cards/card-amenity.jpg",
  },
  {
    icon: MapPin,
    value: "Downtown",
    title: "Trung tâm Đà Nẵng",
    image: "/images/cards/card-downtown.jpg",
  },
  {
    icon: Trees,
    value: "River View",
    title: "Sông Hàn & DIFF",
    image: "/images/cards/card-firework.jpg",
  },
  {
    icon: ShieldCheck,
    value: "Luxury",
    title: "Không gian sống",
    image: "/images/cards/card-luxury.jpg",
  },
  {
    icon: TrendingUp,
    value: "High",
    title: "Tiềm năng đầu tư",
    image: "/images/cards/card-investment.jpg",
  },
];

export default function Overview() {
  return (
    <section
      id="tong-quan"
      className="
relative
overflow-hidden
bg-gradient-to-b
from-[#FCFBF8]
to-[#F4EFE4]
pt-15 pb-20
"
    >
        <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-[#EFD8A5]/20 blur-[140px]" />

<div className="absolute -right-52 bottom-0 h-[500px] w-[500px] rounded-full bg-[#E9C46A]/15 blur-[170px]" />
      <div className="mx-auto max-w-7xl px-6">

        <Reveal>

          <div className="text-center">

            <span className="uppercase tracking-[16px] text-sm font-bold text-[#B48A3A]">
              Tổng quan
            </span>

            <h2 className={`
    ${headingFont.className}
    text-5xl
    md:text-6xl
    font-semibold
    leading-[1.05]
    text-[#3F3528]
  `}>
              Mọi giá trị hội tụ
              <br />
              trong một biểu tượng sống
            </h2>

          </div>

        </Reveal>

<div
  className="
    relative
    mt-15
    mb-0
    overflow-hidden
    rounded-[42px]
    shadow-[0_35px_100px_rgba(0,0,0,.18)]
  "
>
  <img
    src="/images/location.jpg"
    alt="Peninsula Private"
    className="
h-[300px]
w-full
object-cover
md:h-[420px]
lg:h-[520px]
transition-transform
duration-700
hover:scale-105
"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />

  <div className="absolute left-8 top-1/2 -translate-y-1/2">

    <span className="text-sm uppercase font-bold tracking-[12px] text-[#D6B46A]">
      Tổng quan dự án
    </span>

    <h2 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
      Biểu tượng sống mới
      <br />
      giữa Downtown Đà Nẵng
    </h2>

  </div>
</div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {items.map((item, index) => {

            const Icon = item.icon;

            return (

              <Reveal
                key={item.title}
                delay={index * 0.05}
              >

                <div
className="
group
relative
overflow-hidden
rounded-[30px]
border
border-[#ECE2CB]
bg-white/95
backdrop-blur-xl
px-8
py-7
transition-all
duration-500
cursor-pointer
hover:-translate-y-4
hover:scale-[1.02]
hover:border-[#D6B46A]
hover:shadow-[0_20px_60px_rgba(197,154,69,.18)]
"
>
    <Image
  src={item.image}
  alt={item.title}
  fill
  className="
    object-cover
    opacity-[0.85]
    transition-all
    duration-700
    group-hover:scale-110
    group-hover:opacity-[0.105]
  "
/>
<div
  className="
    absolute
    inset-0
    bg-gradient-to-r
    from-white
    via-white/50
    to-white/30
  "
/>
<div className="relative z-10">
                  <div
    className="
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-2xl
      bg-[#F9F2DF]
      shadow-lg
      transition-all
      duration-500
      group-hover:bg-[#C59A45]
      group-hover:rotate-6
    "
  >
    <Icon
  className="
  h-6
  w-6
  text-[#B48A3A]
  transition-all
  duration-500
  group-hover:text-white
"
/>
  </div>

  <h3
    className="
      mt-8
      text-4xl
      lg:text-3xl
      font-semibold
      tracking-tight
      text-[#3F3528]
    "
  >
    {item.value}
  </h3>

  <p
    className="
    group-hover:text-[#B48A3A]
transition-all
duration-500
      mt-3
      text-lg
      font-medium
      text-[#5B5148]
    "
  >
    {item.title}
  </p>
<div className="mt-6 h-[2px] w-12 bg-[#C59A45]" />
</div>
</div>
              </Reveal>

            );

          })}

        </div>

      </div>
    </section>
  );
}