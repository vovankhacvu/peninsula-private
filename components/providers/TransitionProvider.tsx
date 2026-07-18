"use client";

import { TransitionRouter } from "next-transition-router";
import { animate } from "framer-motion";

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TransitionRouter
        leave={(next) => {
          animate(
            "#transition-overlay",
            { opacity: [0, 1] },
            {
              duration: 0.4,
              onComplete: next,
            }
          );
        }}
        enter={(next) => {
          animate(
            "#transition-overlay",
            { opacity: [1, 0] },
            {
              duration: 0.4,
              onComplete: next,
            }
          );
        }}
      >
        {children}
      </TransitionRouter>

      <div
        id="transition-overlay"
        className="pointer-events-none fixed inset-0 z-[9999] bg-[#D6B46A] opacity-0"
      />
    </>
  );
}