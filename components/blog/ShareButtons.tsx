"use client";

import { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { Link2 } from "lucide-react";

export default function ShareButtons() {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const copyLink = async () => {
    await navigator.clipboard.writeText(currentUrl);
    alert("Đã sao chép liên kết!");
  };

  return (
    <div className="flex items-center gap-3">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          currentUrl
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border p-3 transition hover:bg-[#B48A3A] hover:text-white"
      >
        <FaFacebookF size={18} />
      </a>

      <button
        onClick={copyLink}
        className="rounded-full border p-3 transition hover:bg-[#B48A3A] hover:text-white"
      >
        <Link2 size={18} />
      </button>
    </div>
  );
}