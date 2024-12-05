"use client";

import CirclesAnimation from "./CirclesAnimation";
import { motion } from "motion/react";

export default function LandingStat() {
  return (
    <main className="w-screen h-screen bg-white">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.span
          className="font-mono text-[#fe6c00]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.1, delay: 4.1 }}
        >
          loading
        </motion.span>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.span
          className="font-mono text-white]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 4.2 }}
        >
          Mouse detected
        </motion.span>
      </div>
      <CirclesAnimation />
      <div className="fixed z-10 flex  w-screen left-8 bottom-8 max-w-80 font-mono ">
        <span>User Log In</span>
      </div>
    </main>
  );
}
