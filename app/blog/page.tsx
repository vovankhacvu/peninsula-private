import Container from "@/components/ui/Container";
import BlogHero from "@/components/blog/BlogHero";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blog";

export const metadata = {
  title: "Cẩm nang đầu tư Peninsula Private | Đất Xanh Miền Trung",
  description:
    "Cập nhật bảng giá, tiến độ, pháp lý và kinh nghiệm đầu tư Peninsula Private Đà Nẵng.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />

      <section className="bg-[#FCFBF8] py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.slug}
                post={post}
              />
            ))}
          </div>

          {blogPosts.length === 0 && (
            <div className="rounded-3xl border border-dashed border-[#D8C39A] bg-white py-24 text-center">
              <h2 className="text-2xl font-semibold text-[#3F3528]">
                Chưa có bài viết
              </h2>

              <p className="mt-4 text-[#6B6259]">
                Nội dung sẽ được cập nhật trong thời gian sớm nhất.
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}