"use client";
import { motion } from "motion/react";
import TransitionLink from "@/components/TransitionLink";

export default function Home() {
  return (
    <div className="w-fit mx-auto min-h-screen flex flex-col items-start justify-center">
      <motion.main
        className="flex flex-col gap-8 row-start-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <h1 className="text-5xl font-bold">Birds as Data</h1>
        <p>A story about birds and data</p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <TransitionLink
            className="flex items-center rounded-full transition-colors bg-foreground text-background hover:bg-[#ccc] h-12 px-5"
            href="/chapter-one"
          >
            Launch story
          </TransitionLink>
        </div>
      </motion.main>
    </div>
  );
}
