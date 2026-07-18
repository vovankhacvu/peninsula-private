import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { headingFont } from "@/app/fonts";

export const metadata = {
  title: "Điều khoản sử dụng | Peninsula Private",
  description: "Điều khoản sử dụng website Peninsula Private.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] text-[#3F3528]">

      <section className="mx-auto max-w-4xl px-6 py-24">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#B48A3A] transition hover:opacity-70"
        >
          <ChevronLeft size={18} />
          Quay lại trang chủ
        </Link>

        <h1
          className={`${headingFont.className} mt-8 text-5xl md:text-6xl font-semibold`}
        >
          Điều khoản sử dụng
        </h1>

        <p className="mt-5 text-lg leading-8 text-[#6E655D]">
          Khi truy cập website Peninsula Private, bạn đồng ý tuân thủ các điều
          khoản và điều kiện được quy định dưới đây.
        </p>

        <div className="mt-16 space-y-12">

          <section>
            <h2 className="text-2xl font-semibold">
              1. Quy định chung
            </h2>

            <p className="mt-4 leading-8 text-[#6E655D]">
              Website được xây dựng nhằm mục đích cung cấp thông tin và hỗ trợ
              tư vấn về dự án Peninsula Private.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              2. Nội dung thông tin
            </h2>

            <p className="mt-4 leading-8 text-[#6E655D]">
              Các thông tin trên website chỉ mang tính chất tham khảo và có thể
              được cập nhật theo chính sách của Chủ đầu tư hoặc đơn vị phân phối
              tại từng thời điểm.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              3. Quyền sở hữu trí tuệ
            </h2>

            <p className="mt-4 leading-8 text-[#6E655D]">
              Toàn bộ hình ảnh, video, thiết kế và nội dung trên website thuộc
              quyền quản lý của Peninsula Private hoặc các đơn vị được cấp phép
              sử dụng.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              4. Giới hạn trách nhiệm
            </h2>

            <p className="mt-4 leading-8 text-[#6E655D]">
              Chúng tôi không chịu trách nhiệm đối với các thiệt hại phát sinh
              từ việc sử dụng thông tin ngoài phạm vi mục đích tham khảo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              5. Thay đổi điều khoản
            </h2>

            <p className="mt-4 leading-8 text-[#6E655D]">
              Peninsula Private có quyền cập nhật nội dung điều khoản bất kỳ lúc
              nào mà không cần thông báo trước. Phiên bản mới sẽ có hiệu lực kể
              từ thời điểm được đăng tải trên website.
            </p>
          </section>

        </div>

      </section>

    </main>
  );
}