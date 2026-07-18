        "use client";
import { headingFont } from "@/app/fonts";
        import Image from "next/image";
        import Reveal from "../ui/Reveal";
        import Gallery from "../ui/Gallery";
        export default function FloorPlan() {
        return (
            <>
        <Gallery />
            <section
            id="mat-bang"
            className="relative bg-[#F7F4EE] py-28"
            >
            <div className="mx-auto max-w-7xl px-8">

                <Reveal>

                <div className="mx-auto max-w-3xl text-center">

                    <span className="inline-block rounded-full bg-[#F9F2DF] px-4 py-2 text-xs font-semibold uppercase tracking-[6px] text-[#B48A3A]">
                    Mặt bằng
                    </span>

                    <h2 className={`
    ${headingFont.className}
    text-5xl
    md:text-6xl
    font-semibold
    leading-[1.05]
    text-[#3F3528]
  `}>
                    Thiết kế tối ưu
                    <br />
                    cho từng phong cách sống
                    </h2>

                    <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#6E655D]">
                    Khám phá toàn bộ mặt bằng căn hộ Peninsula Private
                    với thiết kế thông minh và tối ưu từng mét vuông.
                    </p>

                </div>

                </Reveal>

        <div
        className="
            relative
            mt-20
            overflow-hidden
            rounded-[40px]
            shadow-[0_35px_100px_rgba(0,0,0,.18)]
        "
        >

        {/* Desktop */}
<Image
   src="/images/floorplan/banner-desktop.webp"
  alt="Floor Plan"
  width={1800}
  height={1000}
  sizes="100vw"
  className="
    hidden
    md:block
    w-full
    h-[650px]
    object-cover
    transition-all
    duration-700
    hover:scale-[1.03]
  "
/>

{/* Mobile */}
<Image
  src="/images/floorplan/banner-mobile.webp"
  alt="Floor Plan"
  width={800}
  height={1400}
  className="
    block
    md:hidden
    w-full
    h-auto
  "
/>

        <div
    className="
        absolute
        bottom-8
        left-1/2
        z-20
        flex
        -translate-x-1/2
        md:hidden
    "
    >
    <a
        href="/images/floorplan/tongquan.webp"
        data-fancybox="floorplan"
        className="
rounded-full
bg-[#C59A45]
px-7
py-3
font-semibold
text-[#2E2417]
"
    >
        Xem chi tiết mặt bằng
    </a>
    </div>

        <div
    className="
    hidden
    md:block
    absolute
    right-12
    top-1/2
    max-w-[500px]
    -translate-y-1/2
    z-20
    text-left
    "
    >

            <span
            className="
                text-sm
                font-semibold
                uppercase
                tracking-[10px]
                text-[#D6B46A]
            "
            >
            FLOOR PLAN
            </span>

            <h3
            className="
                mt-6
                text-5xl
                font-semibold
                leading-tight
                text-white
            "
            >
            Thiết kế thông minh
            <br />
            Tối ưu từng không gian
            </h3>

            <p
            className="
                mt-6
                max-w-lg
                leading-8
                text-white/85
            "
            >
            Khám phá toàn bộ mặt bằng căn hộ từ 1PN đến Penthouse,
            được thiết kế nhằm tối ưu công năng, ánh sáng và tầm nhìn.
            </p>

            <a
  href="/images/floorplan/total.webp"
  data-fancybox="floorplan"
  className="
    mt-10
    inline-flex
    rounded-full
    bg-[#D6B46A]
    px-8
    py-4
    font-semibold
    text-[#2E2417]
    transition-all
    duration-300
    hover:scale-105
    hover:bg-[#C59A45]
  "
>
  Xem chi tiết mặt bằng
</a>
        <div className="hidden">

        <a
            href="/images/floorplan/b.webp"
            data-fancybox="floorplan"
        />

        <a
            href="/images/floorplan/1.webp"
            data-fancybox="floorplan"
        />

        <a
            href="/images/floorplan/2.webp"
            data-fancybox="floorplan"
        />
        <a
            href="/images/floorplan/3.webp"
            data-fancybox="floorplan"
        />

        <a
            href="/images/floorplan/4.webp"
            data-fancybox="floorplan"
        />

        <a
            href="/images/floorplan/5.webp"
            data-fancybox="floorplan"
        />
        <a
            href="/images/floorplan/6-20.webp"
            data-fancybox="floorplan"
        />

        <a
            href="/images/floorplan/21.webp"
            data-fancybox="floorplan"
        />

        <a
            href="/images/floorplan/22-29.webp"
            data-fancybox="floorplan"
        />

        <a
            href="/images/floorplan/30-37.webp"
            data-fancybox="floorplan"
        />

        <a
            href="/images/floorplan/38.webp"
            data-fancybox="floorplan"
        />

        <a
            href="/images/floorplan/39.webp"
            data-fancybox="floorplan"
        />
        
        <a
            href="/images/floorplan/40.webp"
            data-fancybox="floorplan"
        />

        <a
            href="/images/floorplan/mai.webp"
            data-fancybox="floorplan"
        />
        </div>
    </div>
        </div>

            </div>

            </section>
            </>
        );
        }