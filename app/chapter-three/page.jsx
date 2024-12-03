"use client";

import Link from "next/link";
import useSyncInteractives from "@/hooks/useSyncInteractives";
import { motion } from "motion/react";
import FlockingSimulation from "./FlockingSimulation";

export default function ChapterThree() {
  useSyncInteractives();

  return (
    <main className="w-full h-screen text-white">
      <section className="w-screen h-screen bg-themeblue">
        <FlockingSimulation />
      </section>

      <Link
        className="text-2xl absolute top-12 left-20 font-serif italic"
        href="/"
      >
        <div className="flex">
          {"Flocking".split("").map((letter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                y: [20, 0],
                opacity: 1,
                transition: {
                  ease: "easeOut",
                  duration: 0.6,
                  delay: index * 0.02,
                },
              }}
            >
              {letter}
            </motion.div>
          ))}
        </div>
      </Link>
    </main>
  );
}
