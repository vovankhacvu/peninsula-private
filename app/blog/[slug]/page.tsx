
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { blogPosts } from "@/data/blog";
import ShareButtons from "@/components/blog/ShareButtons";
import ReadingProgress from "@/components/blog/ReadingProgress";
import ArticleCTA from "@/components/blog/ArticleCTA";
import MarkdownRenderer from "@/components/blog/MarkdownRenderer";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
    canonical: `/blog/${post.slug}`,
  },
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogDetail({
  params,
}: Props) {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }
  const relatedPosts = [...blogPosts]
  .filter((p) => p.slug !== post.slug)
  .sort(() => Math.random() - 0.5)
  .slice(0, 3);
const articleSchema = {
    
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.description,
  image: post.image,
  author: {
    "@type": "Organization",
    name: post.author,
  },
  publisher: {
    "@type": "Organization",
    name: "Đất Xanh Miền Trung",
    logo: { 
  "@type": "ImageObject",
  url: "https://www.peninsulaprivatedn.com/images/logo.png",
},
  },
  datePublished: post.publishedAt,
  dateModified: post.publishedAt,
};
const faqSchema =
  post.faq && post.faq.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <main className="bg-[#FCFBF8] py-20">
        <ReadingProgress />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(articleSchema),
  }}
  
/>
{faqSchema && (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(faqSchema),
    }}
  />
)}
      <div className="mx-auto max-w-4xl px-6">
        <nav className="mb-8 flex items-center gap-2 text-sm text-[#8B7B65]">
  <Link
    href="/"
    className="hover:text-[#B48A3A]"
  >
    Trang chủ
  </Link>

  <span>/</span>

  <Link
    href="/blog"
    className="hover:text-[#B48A3A]"
  >
    Cẩm nang
  </Link>

  <span>/</span>

  <span className="text-[#3F3528]">
    {post.title}
  </span>
</nav>
        <p className="text-[#B48A3A]">
          {post.category}
        </p>

        <h1 className="mt-4 [font-family:var(--font-heading)] text-6xl font-semibold leading-tight text-[#3F3528]">
          {post.title}
        </h1>

        <div className="flex items-center justify-between mt-4">
          <p className="text-[#666]">
            {post.publishedAt} • ⏱️ {post.readingTime} phút đọc • {post.author}
          </p>
          <ShareButtons />
        </div>

        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <article
  className="
    mt-10
    max-w-none
    font-[family:var(--font-body)]
  "
>
  <MarkdownRenderer content={post.content} />

  {post.faq && post.faq.length > 0 && (
    <section className="not-prose mt-16">
      <h2 className="mb-8 font-[family:var(--font-heading)] text-4xl font-semibold text-[#3F3528]">
        Câu hỏi thường gặp
      </h2>

      <div className="space-y-4">
        {post.faq.map((item) => (
          <div
            key={item.question}
            className="rounded-2xl border border-[#EEE4D1] bg-white p-6"
          >
            <h3 className="font-[family:var(--font-heading)] text-2xl font-semibold text-[#3F3528]">
              {item.question}
            </h3>

            <p className="mt-3 leading-7 text-[#6B6259]">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  )}

  <ArticleCTA />
</article>
        
<section className="mt-20">
  <h2 className="mb-8 font-[family:var(--font-heading)] text-4xl font-semibold text-[#3F3528]">
    Bài viết liên quan
  </h2>

  <div className="grid gap-6 md:grid-cols-3">
    {relatedPosts.map((item) => (
      <Link
        key={item.slug}
        href={`/blog/${item.slug}`}
        className="group rounded-3xl border border-[#EEE4D1] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-2xl">
  <Image
    src={item.image}
    alt={item.title}
    fill
    className="object-cover transition-transform duration-300 group-hover:scale-105"
  />
</div>
        <div className="flex items-center justify-between text-sm">
  <span className="font-medium text-[#B48A3A]">
    {item.category}
  </span>

  <span className="text-[#8C8378]">
    {item.publishedAt}
  </span>
</div>

        <h3 className="mt-3 font-[family:var(--font-heading)] text-3xl font-semibold text-[#3F3528] transition-colors group-hover:text-[#B48A3A]">
          {item.title}
        </h3>

        <p className="mt-4 line-clamp-3 text-[#6B6259]">
          {item.description}
        </p>
<p className="mt-4 text-sm text-[#8C8378]">
  Tác giả: {item.author}
</p>
        <span className="mt-6 inline-flex font-semibold text-[#B48A3A]">
          Đọc tiếp →
        </span>
      </Link>
    ))}
  </div>

<div className="mt-10 flex justify-center">
  <Link
    href="/blog"
    className="inline-flex items-center gap-2 rounded-full border border-[#B48A3A] px-6 py-3 font-medium text-[#B48A3A] transition-all duration-300 hover:bg-[#B48A3A] hover:text-white"
  >
    Xem tất cả cẩm nang
    <span>→</span>
  </Link>
</div>
</section>
      </div>
    </main>
  );
}