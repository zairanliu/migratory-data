"use client";

import Link from "next/link";
import throttle from "lodash-es/throttle";
import useChannel from "@/hooks/useChannel";
import useMousemoveEvent from "@/hooks/useMousemoveEvent";
import { motion } from "motion/react";

export default function ChapterOne() {
  const messageChannel = useChannel();

  useMousemoveEvent(
    throttle(({ x, y }) => {
      messageChannel.send({ type: "mousemove", value: { x, y } });
    }, 10)
  );

  return (
    <main className="w-full h-screen text-themeblue">
      <video
        autoPlay
        playsInline
        muted
        loop
        className="-z-10 absolute inset-0 h-screen object-cover"
      >
        <source
          src="https://asset.togusj.com/migratory-data/chapter-two/migration.mp4"
          type="video/mp4"
        ></source>
      </video>

      <Link
        className="text-5xl absolute top-12 left-20 font-serif italic"
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
                  duration: 1,
                  delay: index * 0.08,
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
        <div className="p-20 flex justify-between items-center text-[4vw] font-Eiko font-bold leading-none">
          <div>
            Eastern
            <br />
            Meadowlark
          </div>
          <div>
            Indigo
            <br />
            Bunting
          </div>
          <div>Veery</div>
        </div>
      </div>
    </main>
  );
}
