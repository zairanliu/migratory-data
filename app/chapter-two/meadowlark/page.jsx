"use client";

import { useState } from "react";
import Link from "next/link";
import useSyncInteractives from "@/hooks/useSyncInteractives";
import { motion } from "motion/react";

export default function ChapterTwo() {
  useSyncInteractives();
  const [activeSeason, setActiveSeason] = useState(null);

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
          className="w-1/3 h-screen flex flex-col justify-between"
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
          <div className="font-grotesk max-w-[280px] text-lg leading-tight m-20 ">
            <p className="mt-10">
              A familiar bird, known by the black 'V' on its chest when it sings
              from a fencepost, or by the flash of white tail feathers when it
              flushes from the grass.
            </p>
            <p className="mt-5">
              {" "}
              Eastern Meadowlarks are considered partial migrants. This means
              their migratory behavior varies depending on their location and
              local conditions.
            </p>
          </div>
          <div className="p-20 flex justify-between items-center font-Eiko font-medium leading-tight">
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
          <div className="z-10 absolute font-Eiko font-medium text-6xl flex justify-around left-0 right-0 bottom-20">
            <motion.p
              className=""
              initial={{ color: "#D8D8D8" }}
              whileHover={{ color: "black", scale: 1.1 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              onMouseEnter={() => setActiveSeason("year-round")}
              onMouseLeave={() => setActiveSeason(null)}
            >
              Year-Round
            </motion.p>
            <motion.p
              className=""
              initial={{ color: "#D8D8D8" }}
              whileHover={{ color: "black", scale: 1.1 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              onMouseEnter={() => setActiveSeason("summer")}
              onMouseLeave={() => setActiveSeason(null)}
            >
              Summer
            </motion.p>

            <motion.p
              className=""
              initial={{ color: "#D8D8D8" }}
              whileHover={{ color: "black", scale: 1.1 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
              onMouseEnter={() => setActiveSeason("winter")}
              onMouseLeave={() => setActiveSeason(null)}
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
          <div className="absolute right-4 scale-[103%] top-5">
            <motion.img
              // Change this to the corresponding image to the season - year-round
              src="https://asset.togusj.com/migratory-data/chapter-two/meadowlark/m-year.png"
              alt="a map"
              className="w-full"
              initial={{ opacity: 0 }}
              animate={{
                opacity: activeSeason === "year-round" ? 1 : 0,
              }}
            ></motion.img>
          </div>
          <div className="absolute right-5 scale-[103%] top-5">
            <motion.img
              // Change this to the corresponding image to the season - summer
              src="https://asset.togusj.com/migratory-data/chapter-two/meadowlark/m-summer.png"
              alt="a map"
              className="w-full"
              initial={{ opacity: 0 }}
              animate={{
                opacity: activeSeason === "summer" ? 1 : 0,
              }}
            ></motion.img>
          </div>
          <div className="absolute right-4 scale-[103%] top-5">
            <motion.img
              // Change this to the corresponding image to the season - winter
              src="https://asset.togusj.com/migratory-data/chapter-two/meadowlark/m-winter.png"
              alt="a map"
              className="w-full"
              initial={{ opacity: 0 }}
              animate={{
                opacity: activeSeason === "winter" ? 1 : 0,
              }}
            ></motion.img>
          </div>
        </div>
      </div>
    </main>
  );
}
