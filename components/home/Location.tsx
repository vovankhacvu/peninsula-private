"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Reveal from "../ui/Reveal";
const distance = [
  { time: "5 Phút", place: "Cầu Rồng" },
  { time: "3 Phút", place: "Lotte Mart" },
  { time: "5 Phút", place: "Biển Mỹ Khê" },
  { time: "10 Phút", place: "Sân bay" },
];
export default function Location() {
  return (
<section
  id="vi-tri"
  className="
  relative
  overflow-hidden
  bg-[#FCFBF8]
  py-28
"
>
    <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#EFD8A5]/20 blur-[160px]" />
    <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#D6B46A]/15 blur-[160px]" />
    <div className="relative z-10 mx-auto max-w-7xl px-9">
    
<Reveal>
  <div className="mx-auto max-w-3xl text-center">

    <span
      className="
      inline-block
      rounded-full
      bg-[#F9F2DF]
      px-3
      py-2
      text-xs
      font-semibold
      uppercase
      tracking-[6px]
      text-[#B48A3A]
      "
    >
      Vị trí kim cương
    </span>

    <h2
      className="
      mt-5
      text-4xl
      font-semibold
      leading-tight
      text-[#3F3528]
      md:text-6xl
      "
    >
      Trung tâm của
      <br />
      mọi kết nối giá trị
    </h2>

    <p
      className="
      mx-auto
      mt-7
      max-w-2xl
      text-lg
      leading-9
      text-[#6E655D]
      "
    >
      Chỉ vài phút để chạm đến Cầu Rồng, Lotte Mart,
      bãi biển Mỹ Khê và sân bay quốc tế.
    </p>

  </div>
</Reveal>
<div
  className="
    relative
    mt-16
    overflow-hidden
    rounded-[40px]
    shadow-[0_35px_100px_rgba(0,0,0,.18)]
  "
>
  <Image
    src="/images/location-map.jpg"
    alt="Location"
    width={1800}
    height={1100}
    className="
      h-[560px]
      w-full
      object-cover
      transition-all
      duration-700
      hover:scale-[1.03]
    "
  />

  <div
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-black/40
via-black/5
to-transparent
    "
  />
  <div
    className="
absolute
right-10
bottom-10
z-20
max-w-[360px]
rounded-[28px]
bg-black/45
backdrop-blur-md
border
border-white/15
p-8
"
  >
    <span
  className="
    uppercase
    tracking-[8px]
    text-[#D6B46A]
    font-semibold
    text-xs
  "
>
  DOWNTOWN ĐÀ NẴNG
</span>

<h3
  className="
    mt-4
    text-2xl
    lg:text-2xl
    font-bold
    leading-tight
    text-white
  "
>
  Một vị trí
  <br />
  không thể thay thế
</h3>

<p
  className="
    mt-5
    text-sm
    leading-7
    text-white/85
  "
>
  Sở hữu vị trí hiếm có bên sông Hàn,
liền kề trung tâm hành chính,
cầu Rồng,
Lotte Mart,
biển Mỹ Khê và lễ hội pháo hoa DIFF.
</p>
  </div>
</div>
<div
  className="
    relative
    z-20
    -mt-6
    grid
    gap-5
    sm:grid-cols-2
    lg:grid-cols-4
  "
>
    <div
  className="
  absolute
  inset-0
  bg-gradient-to-br
  from-white/25
  via-white/5
  to-transparent
  pointer-events-none
  "
/>
  {distance.map((item) => (
    
    <div
      key={item.place}
      className="
group
relative
overflow-hidden
rounded-[24px]

bg-white/0.1
backdrop-blur-[28px]
backdrop-saturate-150

border
border-white/20

p-6

shadow-[0_15px_45px_rgba(0,0,0,.15)]

transition-all
duration-500

hover:bg-white/18
hover:border-white/35
hover:-translate-y-2
"
    >
        
      <div className="flex items-end gap-1">

  <span
    className="
    text-5xl
    font-bold
    leading-none
    text-[#C59A45]
    "
  >
    {item.time.replace(" Phút","")}
  </span>

  <span
    className="
    mb-1
    text-sm
    font-semibold
    uppercase
    tracking-[2px]
    text-[#C59A45]
    "
  >
    phút
  </span>

</div>

      <div className="mt-3 text-lg font-semibold text-[#3F3528]">
        {item.place}
      </div>
    </div>
  ))}
</div>
</div>

</section>
  );
}