import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/data/blog";

export default function BlogCard({
  post,
}: {
  post: BlogPost;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group overflow-hidden rounded-3xl border bg-white transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[16/10]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <p className="text-sm text-[#B48A3A]">
          {post.category}
        </p>

        <h2 className="mt-3 text-2xl font-bold text-[#3F3528]">
          {post.title}
        </h2>

        <p className="mt-4 text-[#6B6259]">
          {post.description}
        </p>
      </div>
    </Link>
  );
}