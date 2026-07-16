"use client";

import { useState } from "react";

type LeadModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function LeadModal({
  open,
  onClose,
}: LeadModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  if (!open) return null;
  if (loading) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-[92%] max-w-md rounded-[32px] bg-white p-10 text-center shadow-2xl">

        <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-[#E8D4A3] border-t-[#C59A45]" />

        <h2 className="mt-8 text-3xl font-bold text-[#3F3528]">
          Đang gửi thông tin...
        </h2>

        <p className="mt-4 leading-8 text-[#6E655D]">
          Vui lòng chờ trong giây lát.
          <br />
          Hệ thống đang xử lý yêu cầu của anh/chị.
        </p>

      </div>
    </div>
  );
}
if (success) {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={() => {
        setSuccess(false);
        onClose();
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-[92%]
          max-w-md
          rounded-[32px]
          bg-white
          p-10
          text-center
          shadow-2xl
        "
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F8EBC9]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-[#C59A45]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h2 className="mt-8 text-3xl font-bold text-[#3F3528]">
          Đăng ký thành công
        </h2>

        <p className="mt-4 leading-8 text-[#6E655D]">
          Cảm ơn anh/chị đã quan tâm đến Peninsula Private.
          Chuyên viên tư vấn sẽ liên hệ trong thời gian sớm nhất.
        </p>

        <button
          onClick={() => {
            setSuccess(false);
            onClose();
          }}
          className="
            mt-8
            w-full
            rounded-full
            bg-gradient-to-r
            from-[#D6B46A]
            via-[#C59A45]
            to-[#A97C2E]
            py-4
            font-semibold
            text-[#4B3512]
            transition-all
            duration-300
            hover:brightness-110
          "
        >
          Đóng
        </button>
      </div>
    </div>
  );
}
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!name.trim()) {
    alert("Vui lòng nhập họ tên.");
    return;
  }

  const phoneRegex = /^(0|\+84)(3|5|7|8|9)\d{8}$/;

  if (!phoneRegex.test(phone)) {
    alert("Số điện thoại không hợp lệ.");
    return;
  }
setLoading(true);
  try {

    await fetch("https://script.google.com/macros/s/AKfycbwHUlYEE1GZk7VN5hmZPWHrfUHHsfGrdfaNrkVSRIkyHdkgUVufTljxpm1xuaXEu3BHPw/exec", {
      method: "POST",
      body: JSON.stringify({
        name,
        phone,
      }),
    });
// Hiển thị màn hình chờ khoảng 1.5 giây
  await new Promise((resolve) => setTimeout(resolve, 1500));

  setLoading(false);
    setSuccess(true);

setName("");
setPhone("");

  } catch {
 setLoading(false);
    alert("Có lỗi xảy ra.");

  }
};

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-[92%]
          max-w-md
          rounded-[32px]
          bg-white
          p-8
          shadow-2xl
          animate-in
          fade-in
          zoom-in-95
        "
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#3F3528]">
            Nhận bảng giá
          </h2>

          <p className="mt-3 text-[#6E655D] leading-7">
            Vui lòng để lại thông tin.
            Chuyên viên Peninsula Private sẽ liên hệ và gửi bảng giá mới nhất.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          <input
            type="text"
            placeholder="Họ và tên"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="
              w-full
              rounded-2xl
              border
              border-[#E7DDC8]
              px-5
              py-4
              outline-none
              transition
              focus:border-[#C59A45]
            "
          />

          <input
            type="tel"
            placeholder="Số điện thoại"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="
              w-full
              rounded-2xl
              border
              border-[#E7DDC8]
              px-5
              py-4
              outline-none
              transition
              focus:border-[#C59A45]
            "
          />

          <button
            type="submit"
            className="
              w-full
              rounded-full
              bg-gradient-to-r
              from-[#D6B46A]
              via-[#C59A45]
              to-[#A97C2E]
              py-4
              font-semibold
              text-[#4B3512]
              transition-all
              duration-300
              hover:brightness-110
              hover:-translate-y-1
            "
          >
            Nhận bảng giá
          </button>
        </form>

        <button
          onClick={onClose}
          className="
            mt-5
            w-full
            text-sm
            text-[#8A8178]
            hover:text-[#3F3528]
          "
        >
          Đóng
        </button>
      </div>
    </div>
  );
}