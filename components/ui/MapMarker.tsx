"use client";

interface MapMarkerProps {
  title: string;
  className: string;
  primary?: boolean;
}

export default function MapMarker({
  title,
  className,
  primary = false,
}: MapMarkerProps) {
  return (
    <div className={`absolute ${className} group cursor-pointer`}>

      {/* Vòng sáng */}

      <span
  className={`
    absolute
    left-1/2
    top-1/2
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-[#D6B46A]/30
    animate-ping
    ${primary ? "h-14 w-14" : "h-10 w-10"}
  `}
/>

      {/* Chấm */}

      <div
  className={`
    relative
    flex
    items-center
    justify-center
    rounded-full
    bg-[#D6B46A]
    shadow-[0_0_35px_rgba(214,180,106,.9)]
    transition-all
    duration-300
    group-hover:scale-110
    ${primary ? "h-7 w-7" : "h-5 w-5"}
  `}
>
        <div className="h-2 w-2 rounded-full bg-white" />
      </div>

      {/* Tooltip */}

      <div
        className="
          absolute
          left-1/2
          top-8
          -translate-x-1/2
          whitespace-nowrap
          rounded-full
          bg-white/95
          px-4
          py-2
          text-sm
          font-semibold
          text-[#3F3528]
          opacity-0
          shadow-xl
          transition-all
          duration-300
          group-hover:opacity-100
          group-hover:translate-y-2
        "
      >
        {title}
      </div>

    </div>
  );
}