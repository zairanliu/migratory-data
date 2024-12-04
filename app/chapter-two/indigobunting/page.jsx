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
          initial={{ backgroundColor: "#090B12" }}
          animate={{ backgroundColor: "#2B6BA6" }}
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
              In parts of the East, Indigo Bunting may be the most abundant
              songbird, with the deep-blue males singing along every roadside.
              The plain brown females are seen far less often, and they have
              good reason to be inconspicuous: they do almost all the work of
              caring for the eggs and young, hidden away in dense thickets.
            </p>
            <p className="mt-5">
              {" "}
              This species favors brushy edges rather than unbroken forest, and
              is probably far more common today than when the Pilgrims landed.
            </p>
          </div>
          <motion.div
            className="font-grotesk text-right text-lg mx-10 flex flex-row justify-end items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          >
            <div>
              <p className="">Species Range by Season</p>
              <p className="text-[#939393]"> Journey of a Tracked Bird</p>
            </div>
          </motion.div>
          <div className="mb-20 flex mx-20 flex-row justify-between items-end font-Eiko font-medium leading-tight">
            <Link
              href="/chapter-two"
              className="flex font-grotesk items-center text-xl gap-2 pb-2  "
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
            <motion.div className="text-[36px]">
              Indigo
              <br />
              Bunting
            </motion.div>
          </div>
        </motion.div>
        <div className="h-screen w-2/3 relative  bg-[#090B12]">
          <div className="z-10 absolute font-Eiko font-medium text-6xl flex bottom-20 right-10 left-10 flex-col">
            <div className="right-0 left-0 justify-between flex flex-row">
              <motion.p
                className=""
                initial={{ color: "#163E63" }}
                whileHover={{ color: "white", scale: 1.1 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                onMouseEnter={() => setActiveSeason("year-round")}
                onMouseLeave={() => setActiveSeason(null)}
              >
                Year-Round
              </motion.p>
              <motion.p
                className=""
                initial={{ color: "#163E63" }}
                whileHover={{ color: "white", scale: 1.1 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                onMouseEnter={() => setActiveSeason("summer")}
                onMouseLeave={() => setActiveSeason(null)}
              >
                Summer
              </motion.p>

              <motion.p
                className=""
                initial={{ color: "#163E63" }}
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
              src="https://asset.togusj.com/migratory-data/chapter-two/indigo/map.webp"
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
