import Link from "next/link";
import Container from "@/components/ui/Container";

export default function BlogHero() {
  return (
    <section className="bg-[#F8F5EF] py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">

          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center justify-center gap-2 text-sm text-[#8B7B65]">
            <Link href="/" className="hover:text-[#B48A3A]">
              Trang chủ
            </Link>

            <span>/</span>

            <span className="text-[#3F3528]">
              Tin tức & Pháp lý
            </span>
          </nav>

          <span className="rounded-full border border-[#D7C39A] px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#B48A3A]">
            Tin tức & Pháp lý
          </span>

          <h1 className="[font-family:var(--font-heading)] text-6xl font-semibold leading-tight text-[#3F3528] md:text-7xl">
            Tin tức đầu tư Peninsula Private
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#6B6259]">
            Cập nhật bảng giá, tiến độ, pháp lý và kinh nghiệm đầu tư căn hộ
            cao cấp tại Đà Nẵng.
          </p>

        </div>
      </Container>
    </section>
  );
}