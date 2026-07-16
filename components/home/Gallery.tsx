"use client";

import Image from "next/image";
import Reveal from "../ui/Reveal";

const gallery = [
  {
    src: "/images/gallery/hero.jpg",
    large: true,
  },
  {
    src: "/images/gallery/1.jpg",
  },
  {
    src: "/images/gallery/2.jpg",
  },
  {
    src: "/images/gallery/3.jpg",
  },
  {
    src: "/images/gallery/4.jpg",
  },
];

export default function Gallery() {
  return (
    <section
      id="nha-mau"
      className="relative bg-[#FCFBF8] py-28"
    >
      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#EFD8A5]/20 blur-[150px]" />

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
              Nhà mẫu
            </span>

            <h2
              className="
              mt-6
              text-4xl
              font-semibold
              text-[#3F3528]
              md:text-6xl
              "
            >
              Không gian sống
              <br />
              chuẩn nghỉ dưỡng
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
              Mỗi chi tiết đều được chăm chút nhằm mang đến trải nghiệm
              sống đẳng cấp và tinh tế.
            </p>

          </div>

        </Reveal>

        <div
          className="
          mt-20
          grid
          gap-6
          md:grid-cols-3
          "
        >

          {/* Ảnh lớn */}

          <div
            className="
            group
            relative
            overflow-hidden
            rounded-[36px]
            md:col-span-2
            md:row-span-2
            h-[560px]
            "
          >

            <Image
              src={gallery[0].src}
              alt=""
              fill
              className="
              object-cover
              transition-all
              duration-700
              group-hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          </div>

          {/* 4 ảnh nhỏ */}

          {gallery.slice(1).map((item, index) => (

            <div
              key={index}
              className="
              group
              relative
              h-[267px]
              overflow-hidden
              rounded-[28px]
              "
            >

              <Image
                src={item.src}
                alt=""
                fill
                className="
                object-cover
                transition-all
                duration-700
                group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-all" />

            </div>

          ))}

        </div>

        <div className="mt-14 flex justify-center">

          <button
            className="
            rounded-full
            border
            border-[#C59A45]
            px-8
            py-4
            font-semibold
            text-[#C59A45]
            transition-all
            duration-300
            hover:bg-[#C59A45]
            hover:text-white
            "
          >
            Xem toàn bộ nhà mẫu
          </button>

        </div>

      </div>

    </section>
  );
}