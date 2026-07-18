import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { headingFont } from "@/app/fonts";

export const metadata = {
  title: "Chính sách bảo mật | Peninsula Private",
  description: "Chính sách bảo mật thông tin khách hàng của Peninsula Private.",
};

export default function PrivacyPolicyPage() {
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
          Chính sách bảo mật
        </h1>

        <p className="mt-5 text-lg leading-8 text-[#6E655D]">
          Peninsula Private cam kết bảo vệ quyền riêng tư và bảo mật mọi thông
          tin cá nhân mà khách hàng cung cấp trong quá trình sử dụng website.
        </p>

        <div className="mt-16 space-y-12">

          <section>
            <h2 className="text-2xl font-semibold">
              1. Mục đích thu thập thông tin
            </h2>

            <p className="mt-4 leading-8 text-[#6E655D]">
              Chúng tôi thu thập thông tin nhằm hỗ trợ khách hàng nhận bảng giá,
              chính sách bán hàng, tài liệu dự án, tư vấn sản phẩm và các chương
              trình ưu đãi mới nhất.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              2. Thông tin được thu thập
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-[#6E655D]">
              <li>Họ và tên.</li>
              <li>Số điện thoại.</li>
              <li>Nhu cầu quan tâm.</li>
              <li>Ngân sách dự kiến.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              3. Phạm vi sử dụng
            </h2>

            <p className="mt-4 leading-8 text-[#6E655D]">
              Thông tin chỉ được sử dụng cho mục đích tư vấn, chăm sóc khách
              hàng và cung cấp thông tin về Peninsula Private hoặc các dự án liên
              quan do đơn vị phân phối triển khai.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              4. Cam kết bảo mật
            </h2>

            <p className="mt-4 leading-8 text-[#6E655D]">
              Chúng tôi không bán, chia sẻ hoặc chuyển giao thông tin cá nhân
              cho bên thứ ba khi chưa có sự đồng ý của khách hàng, ngoại trừ
              trường hợp theo yêu cầu của cơ quan nhà nước có thẩm quyền.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              5. Quyền của khách hàng
            </h2>

            <p className="mt-4 leading-8 text-[#6E655D]">
              Khách hàng có quyền yêu cầu chỉnh sửa, cập nhật hoặc xóa thông tin
              cá nhân bất cứ lúc nào bằng cách liên hệ trực tiếp với chúng tôi.
            </p>
          </section>

        </div>

      </section>
    </main>
  );
}