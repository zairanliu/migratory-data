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
        className="text-2xl absolute top-12 left-20 font-serif italic  text-white"
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
      <motion.div
        className="font-grotesk  text-xl flex flex-row right-20 z-20 top-10 absolute text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 2 }}
      >
        <Link
          href="/chapter-three"
          className="flex flex-row items-center gap-3"
        >
          <span>continue</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-4"
          >
            <path
              fillRule="evenodd"
              d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </motion.div>
      <div className="max-w-screen flex flex-row  text-white">
        <motion.div
          className="w-1/3 h-screen flex flex-col justify-between"
          initial={{ backgroundColor: "#26180D" }}
          animate={{ backgroundColor: "#653C1C" }}
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
          <div className="font-grotesk max-w-[280px] text-lg  leading-tight mx-20 mt-20 ">
            <p className="mt-10">
              In moist leafy woods across the northern states and southern
              Canada, the breezy spiraling song of this thrush is a common sound
              in summer. An observer who waits patiently inside the woods may
              see the Veery itself, bounding across the forest floor with long
            </p>
            <p className="mt-5">
              {" "}
              Staying with us for less than half the year, the bird spends the
              balance of its time living in the shadowy undergrowth of tropical
              rain forest.
            </p>
          </div>
          <div className="font-grotesk text-lg mx-10 flex flex-row justify-end items-center">
            <div>
              <p className="">Species Range by Season</p>
              <p className="text-[#757575]"> Journey of a Tracked Bird</p>
            </div>
          </div>
          <div className="mb-20 flex mx-20 flex-row justify-between items-end font-Eiko font-medium leading-tight">
            <Link
              href="/chapter-two"
              className="flex font-normal font-grotesk items-center gap-2 pb-2 text-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z"
                  clipRule="evenodd"
                />
              </svg>
              <span>return</span>
            </Link>
            <motion.div
              initial={{ fontSize: "72px", color: "#123CA8" }}
              animate={{ fontSize: "48px", color: "white" }}
              transition={{
                fontSize: {
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.6,
                },
              }}
            >
              Veery
            </motion.div>
          </div>
        </motion.div>
        <div className="h-screen w-2/3 relative  bg-[#26180D]">
          <div className="z-10 absolute font-Eiko font-medium text-6xl flex bottom-20 right-10 left-10 flex-col">
            <div className="right-0 left-0 justify-between flex flex-row">
              <motion.p
                className=""
                initial={{ color: "#3D2716" }}
                whileHover={{ color: "white", scale: 1.1 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                onMouseEnter={() => setActiveSeason("year-round")}
                onMouseLeave={() => setActiveSeason(null)}
              >
                Year-Round
              </motion.p>
              <motion.p
                className=""
                initial={{ color: "#3D2716" }}
                whileHover={{ color: "white", scale: 1.1 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                onMouseEnter={() => setActiveSeason("summer")}
                onMouseLeave={() => setActiveSeason(null)}
              >
                Summer
              </motion.p>

              <motion.p
                className=""
                initial={{ color: "#3D2716" }}
                whileHover={{ color: "white", scale: 1.1 }}
                transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                onMouseEnter={() => setActiveSeason("winter")}
                onMouseLeave={() => setActiveSeason(null)}
              >
                Winter
              </motion.p>
            </div>
          </div>
          <div className="absolute inset-0">
            <img
              src="https://asset.togusj.com/migratory-data/chapter-two/veery/map.webp"
              alt="a map of the Americas"
              className="absolute w-full h-screen object-cover"
            ></img>
            <motion.img
              // Change this to the corresponding image to the season - year-round
              src="https://asset.togusj.com/migratory-data/chapter-two/meadowlark/year-round.webp"
              alt="a map"
              className="absolute w-full h-screen object-cover"
              initial={{ opacity: 0 }}
              animate={{
                opacity: activeSeason === "year-round" ? 1 : 0,
              }}
            ></motion.img>
            <motion.img
              // Change this to the corresponding image to the season - summer
              src="https://asset.togusj.com/migratory-data/chapter-two/meadowlark/summer.webp"
              alt="a map"
              className="absolute w-full h-screen object-cover"
              initial={{ opacity: 0 }}
              animate={{
                opacity: activeSeason === "summer" ? 1 : 0,
              }}
            ></motion.img>
            <motion.img
              // Change this to the corresponding image to the season - winter
              src="https://asset.togusj.com/migratory-data/chapter-two/meadowlark/winter.webp"
              alt="a map"
              className="absolute w-full h-screen object-cover"
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
