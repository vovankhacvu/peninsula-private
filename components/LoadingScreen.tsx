"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface Props {
  loading: boolean;
}

export default function LoadingScreen({ loading }: Props) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F8F5EF]"
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: .92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: .9 }}
            >
              <Image
  src="/images/logo.png"
  alt="Peninsula Private"
  width={200}
height={200}
className="w-44 md:w-52 lg:w-56 h-auto
  priority
  "
/>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .35 }}
              className="
                mt-8
                ${headingFont.className}
                text-[18px]
                tracking-[10px]
                uppercase
                text-[#8C6A2A]
              "
            >
              Peninsula Private
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}