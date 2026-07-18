"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/gtag";
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
  const [budget, setBudget] = useState("");
const [purpose, setPurpose] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  if (!open) return null;
  if (loading) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-[92%] max-w-md rounded-[32px] bg-white p-10 text-center shadow-2xl">

        <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-[#E8D4A3] border-t-[#C59A45]" />

        <p className="mt-8 text-3xl font-bold text-[#3F3528]">
          Đang gửi thông tin...
        </p>

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

        <p className="mt-8 text-3xl font-bold text-[#3F3528]">
          Đăng ký thành công
        </p>

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
        budget,
  purpose,
      }),
    });
// Hiển thị màn hình chờ khoảng 1.5 giây
  await new Promise((resolve) => setTimeout(resolve, 1500));

  setLoading(false);
    setSuccess(true);
    trackEvent("generate_lead", {
  form_name: "Lead Modal",
  project: "Peninsula Private",
});

setName("");
setPhone("");
setBudget("");
setPurpose("");

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
          <p className="text-3xl font-bold text-[#3F3528]">
            Đăng kí nhận thông tin
          </p>

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
  bg-white
  px-5
  py-4
  text-[17px]
  font-medium
  text-[#3F3528]
  placeholder:text-[#8E8276]
  placeholder:font-normal
  placeholder:text-[17px]
  outline-none
  transition-all
  duration-300
  focus:border-[#C59A45]
  focus:ring-4
  focus:ring-[#D6B46A]/20
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
  bg-white
  px-5
  py-4
  text-[17px]
  font-medium
  text-[#3F3528]
  placeholder:text-[#8E8276]
  placeholder:font-normal
  placeholder:text-[17px]
  outline-none
  transition-all
  duration-300
  focus:border-[#C59A45]
  focus:ring-4
  focus:ring-[#D6B46A]/20
"
          />
<div className="space-y-2">

  <select
  value={budget}
  onChange={(e) => setBudget(e.target.value)}
    name="budget"
    className="
  w-full
  rounded-2xl
  border
  border-[#E7DDC8]
  bg-white
  px-5
  py-4
  text-[16px]
  font-medium
  text-[#3F3528]
  outline-none
  transition-all
  duration-300
  focus:border-[#C59A45]
  focus:ring-4
  focus:ring-[#D6B46A]/20
"
  >
    <option value="">Chọn ngân sách</option>
    <option>Dưới 3 tỷ</option>
    <option>3 - 5 tỷ</option>
    <option>5 - 10 tỷ</option>
    <option>Trên 10 tỷ</option>
  </select>
</div>
<div className="space-y-2">

  <select
  value={purpose}
  onChange={(e) => setPurpose(e.target.value)}
    name="purpose"
    className="
  w-full
  rounded-2xl
  border
  border-[#E7DDC8]
  bg-white
  px-5
  py-4
  text-[16px]
  font-medium
  text-[#3F3528]
  outline-none
  transition-all
  duration-300
  focus:border-[#C59A45]
  focus:ring-4
  focus:ring-[#D6B46A]/20
"
  >
    <option value="">Chọn nhu cầu</option>
    <option>Studio (36m²)</option>
    <option>1 phòng ngủ (47m²)</option>
    <option>2 phòng ngủ (72m²)</option>
    <option>3 phòng ngủ (119m²)</option>
    <option>Duplex (63m² - 239m²)</option>
  </select>
</div>
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
            Gửi ngay
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