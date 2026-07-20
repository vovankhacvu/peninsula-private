import LeadModal from "@/components/ui/LeadModal";
import Link from "next/link";
import { Phone, FileText } from "lucide-react";

export default function ArticleCTA() {
  return (
    
    <section className="mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-[#B48A3A] to-[#D4AE5C] p-10 text-white shadow-xl">
      <h2 className="text-3xl font-bold">
        Nhận bảng giá Peninsula Private mới nhất
      </h2>

      <p className="mt-4 max-w-2xl text-white/90">
        Đăng ký để nhận bảng giá cập nhật, chính sách bán hàng, ưu đãi mới nhất
        và tư vấn trực tiếp từ chuyên viên Đất Xanh Miền Trung.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="tel:0945562311"
          className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-[#B48A3A] transition hover:scale-105"
        >
          <Phone size={18} />
          094 556 2311
        </Link>

        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 rounded-full border border-white px-7 py-4 font-semibold transition hover:bg-white hover:text-[#B48A3A]"
        >
          <FileText size={18} />
          Nhận bảng giá
        </Link>
      </div>
    </section>
  );
}