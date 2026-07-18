"use client";
import { headingFont } from "@/app/fonts";
import Image from "next/image";
import Reveal from "../ui/Reveal";
import {
  Waves,
  Martini,
  Dumbbell,
  Building2,
  Trees,
  Sparkles,
} from "lucide-react";

const amenities = [
  {
    title: "Infinity Pool",
    desc: "Tầm nhìn trực diện sông Hàn",
    icon: Waves,
    image: "/images/amenities/pool.jpg",
  },
  {
    title: "Sky Lounge",
    desc: "Không gian thư giãn trên cao",
    icon: Martini,
    image: "/images/amenities/lounge.jpg",
  },
  {
    title: "Fitness Center",
    desc: "Phòng gym hiện đại",
    icon: Dumbbell,
    image: "/images/amenities/gym.jpg",
  },
  {
    title: "Luxury Retail",
    desc: "Không gian mua sắm cao cấp",
    icon: Building2,
    image: "/images/amenities/mall.jpg",
  },
  {
    title: "Sky Courtyard Garden",
    desc: "Ốc đảo xanh giữa tầng cao",
    icon: Trees,
    image: "/images/amenities/courtyard.jpg",
  },
  {
    title: "Private Spa",
    desc: "Thư giãn và chăm sóc sức khỏe",
    icon: Sparkles,
    image: "/images/amenities/spa.jpg",
  },
];

export default function Amenities() {
  return (
    <section
      id="tien-ich"
      className="relative bg-[#FCFBF8] py-28"
    >
      <div className="mx-auto max-w-7xl px-8">

        <Reveal>
          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-block rounded-full bg-[#F9F2DF] px-4 py-2 text-xs font-semibold uppercase tracking-[6px] text-[#B48A3A]">
              Tiện ích
            </span>

            <h2 className={`
    ${headingFont.className}
    text-5xl
    md:text-6xl
    font-semibold
    leading-[1.05]
    text-[#3F3528]
  `}>
              Chuẩn sống Resort 5 sao
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#6E655D]">
              Hệ tiện ích được quy hoạch nhằm mang đến trải nghiệm nghỉ dưỡng
              và tận hưởng trọn vẹn mỗi ngày.
            </p>

          </div>
        </Reveal>
<div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
{amenities.map((item, index) => {

const Icon = item.icon;

return (

<Reveal
key={item.title}
delay={index * 0.08}
>

<div
  className="
  group
  relative
  h-[390px]
lg:h-[420px]
  overflow-hidden
  rounded-[36px]
  cursor-pointer
  border
  border-white/10
  shadow-[0_25px_70px_rgba(0,0,0,.12)]
  transition-all
duration-500
hover:-translate-y-3
hover:shadow-[0_35px_90px_rgba(0,0,0,.18)]
  "
>

  <Image
    src={item.image}
    alt={item.title}
    fill
    className="
      object-cover
      transition-all
      duration-700
      group-hover:scale-105
    "
  />

  <div
    className="
      absolute
      inset-0
      bg-gradient-to-t
from-black/90
via-black/30
via-40%
to-transparent
      transition-all
      duration-500
      group-hover:from-black/90
    "
  />

  <div
    className="
      absolute
      bottom-8
      left-8
      right-8
      z-20
    "
  >

    <div
      className="
      mb-5
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-xl
      bg-white/10
      backdrop-blur-xl
      border
      border-white/20
      "
    >

      <Icon
        className="
        h-7
        w-7
        text-[#D6B46A]
        "
      />

    </div>
<span
  className="
    text-xs
    uppercase
    tracking-[4px]
    text-[#D6B46A]
    font-medium
  "
>
  Premium Amenity
</span>
    <h3
      className="
      text-[30px]
leading-tight
tracking-[-0.02em]
      font-semibold
      text-white
      "
    >
      {item.title}
    </h3>

    <p
      className="
      mt-3
      text-[15px]
leading-7
text-white/75
      "
    >
      {item.desc}
    </p>

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