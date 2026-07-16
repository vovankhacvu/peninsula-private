"use client";
import { MessageCircle } from "lucide-react";
import { FaFacebookF } from "react-icons/fa6";
import { useState } from "react";
import Reveal from "../ui/Reveal";
import LeadModal from "../ui/LeadModal";
import Button from "../ui/Button";
import {
  PhoneCall,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export default function Contact() {
  const [openLead, setOpenLead] = useState(false);

  return (
    <>
      <section
        id="contact"
        className="
          relative
          overflow-hidden
          bg-[#1F1C17]
          text-white
        "
      >
        {/* Background */}

        <div
          className="
            absolute
            inset-0
            bg-cover
            bg-center
            opacity-60
          "
          style={{
            backgroundImage: "url('/images/footer/footer-bg.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#1F1C17] via-[#1F1C17]/90 to-[#1F1C17]/70" />

        <div className="relative z-10 mx-auto max-w-7xl px-8 py-28">

          <Reveal>

            <div className="mx-auto max-w-4xl text-center">

              <span className="text-sm uppercase tracking-[8px] text-[#D6B46A]">
                Peninsula Private
              </span>

              <h2 className="mt-6 text-5xl font-bold leading-tight">
                Sẵn sàng sở hữu
                <br />
                tuyệt tác bên sông Hàn?
              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/70">
                Đăng ký để nhận bảng giá mới nhất, mặt bằng,
                chính sách ưu đãi và tư vấn trực tiếp từ chuyên viên.
              </p>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

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
                    text-[#4B3512]
                    font-semibold
                  "
                >
                  ĐĂNG KÝ NGAY
                </Button>

              </div>

            </div>

          </Reveal>

          <div className="my-20 h-px bg-white/10" />

          {/* Footer Grid */}

          <div className="grid gap-14 md:grid-cols-3">

            {/* Công ty */}

            <Reveal delay={0.1}>
                <div className="flex h-full flex-col justify-center">
              <div>

                <h3 className="text-xl font-semibold">
                  Peninsula Private
                </h3>

                <p className="mt-6 leading-8 text-white/70">
                  CÔNG TY CP KINH DOANH & ĐẦU TƯ
                  <br />
ĐẤT XANH MIỀN TRUNG
<br />
CVKD: Võ Khắc Vũ
                </p>

                <div className="mt-6 flex items-start gap-3">

                  <MapPin className="mt-1 h-5 w-5 text-[#D6B46A]" />

                  <span className="text-white/70">
                    565 Nguyễn Tất Thành
                    <br />
                    Thanh Khê
                    <br />
                    Đà Nẵng
                  </span>

                </div>

              </div>
              </div>
            </Reveal>

            {/* Liên hệ */}

            <Reveal delay={0.2}>
              <div>

                <h3 className="text-xl font-semibold">
                  Liên hệ
                </h3>

                <div className="mt-6 space-y-5">

                  <a
                    href="tel:0945562311"
                    className="flex items-center gap-3 text-white/70 hover:text-[#D6B46A]"
                  >
                    <PhoneCall className="h-5 w-5" />
                    0945 562 311
                  </a>

                  <a
  href="https://zalo.me/0945562311"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 text-white/70 transition hover:text-[#D6B46A]"
>
  <MessageCircle className="h-5 w-5 shrink-0" />
  <span>Zalo</span>
</a>

                  <a
                    href="https://www.facebook.com/vubdsmientrung/"
                    target="_blank"
                    className="flex items-center gap-3 text-white/70 hover:text-[#D6B46A]"
                  >
                    <FaFacebookF className="h-5 w-5" />
                    Facebook
                  </a>

                </div>

              </div>
            </Reveal>

            {/* Chính sách */}

            <Reveal delay={0.3}>
              <div>

                <h3 className="text-xl font-semibold">
                  Chính sách
                </h3>

                <div className="mt-6 space-y-5">

                  <a
                    href="https://datxanhmientrung.com/chinh-sach-bao-mat"
                    className="flex items-center gap-3 text-white/70 hover:text-[#D6B46A]"
                  >
                    <ShieldCheck className="h-5 w-5" />
                    Chính sách bảo mật
                  </a>

                </div>

              </div>
            </Reveal>

          </div>

          <div className="mt-20 border-t border-white/10 pt-8 text-center text-sm text-white/50">
            © 2026 Peninsula Private. All rights reserved.
          </div>

        </div>
      </section>

      <LeadModal
        open={openLead}
        onClose={() => setOpenLead(false)}
      />
    </>
  );
}