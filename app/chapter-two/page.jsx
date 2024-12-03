"use client";

import Link from "next/link";
import useSyncInteractives from "@/hooks/useSyncInteractives";
import { motion } from "motion/react";

export default function ChapterTwo() {
  useSyncInteractives();

  return (
    <main className="w-full h-screen text-themeblue">
      <video
        autoPlay
        playsInline
        muted
        loop
        className="-z-10 absolute inset-0 w-screen h-screen object-cover"
      >
        <source
          src="https://asset.togusj.com/migratory-data/chapter-two/migration.mp4"
          type="video/mp4"
        ></source>
      </video>

      <Link
        className="text-2xl absolute top-12 left-20 font-serif italic"
        href="/"
      >
        <div className="flex">
          {"Migration".split("").map((letter, index) => (
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

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-grotesk">
        Select a bird to track
      </div>

      <div className="w-full absolute bottom-0 left-0 right-0">
        <div className="p-20 flex justify-between items-center text-7xl font-Eiko font-medium leading-none">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/chapter-two/meadowlark">
              Eastern
              <br />
              Meadowlark
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/chapter-two/indigobunting">
              Indigo
              <br />
              Bunting
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/chapter-two/veery">Veery</Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
