"use client";

import Link from "next/link";
import useSyncInteractives from "@/hooks/useSyncInteractives";
import { motion } from "motion/react";

export default function ChapterTwo() {
  useSyncInteractives();

  return (
    <main className="h-screen">
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
      <div className="max-w-screen flex flex-row">
        <motion.div
          className="w-1/3 h-screen flex items-end"
          initial={{ backgroundColor: "white" }}
          animate={{ backgroundColor: "#FFEF79" }}
          transition={{
            backgroundColor: {
              duration: 1,
              ease: "easeOut",
              delay: 1,
            },
            x: {
              duration: 1,
            },
          }}
        >
          <div className="p-20 flex justify-between items-center font-Eiko font-medium leading-none">
            <motion.div
              initial={{ fontSize: "72px", color: "#123CA8" }}
              animate={{ fontSize: "28px", color: "black" }}
              transition={{
                fontSize: {
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.6,
                },
              }}
            >
              Eastern
              <br />
              Meadowlark
            </motion.div>
          </div>
        </motion.div>
        <div className="h-screen w-2/3 relative">
          <div className="absolute font-Eiko font-medium text-6xl flex justify-around left-0 right-0">
            <p>Year-Round</p>
            <motion.p
              className=""
              initial={{ color: "#D8D8D8" }}
              whileHover={{ color: "black", scale: 1.1 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              Summer
            </motion.p>
            <div className="absolute right-0">
              <img
                src="https://asset.togusj.com/migratory-data/chapter-two/meadowlark/yearround.png"
                alt="a map"
                className="aspect-auto h-full"
              ></img>
            </div>
            <motion.p
              className=""
              initial={{ color: "#D8D8D8" }}
              whileHover={{ color: "black", scale: 1.1 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            >
              Winter
            </motion.p>
          </div>
          <div className="absolute right-0">
            <img
              src="https://asset.togusj.com/migratory-data/chapter-two/meadowlark/map-large.svg"
              alt="a map of the Americas"
              className="h-screen aspect-auto object-cover"
            ></img>
          </div>
        </div>
      </div>
    </main>
  );
}
