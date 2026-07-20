import Container from "@/components/ui/Container";

export default function BlogHero() {
  return (
    <section className="bg-[#F8F5EF] py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-[#D7C39A] px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#B48A3A]">
            Cẩm nang
          </span>

          <h1 className="[font-family:var(--font-heading)] text-6xl font-semibold leading-tight text-[#3F3528] md:text-7xl">
  Cẩm nang đầu tư Peninsula Private
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