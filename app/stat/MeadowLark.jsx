"use client";

import useSharedState from "@/hooks/useSharedState";
import { motion } from "motion/react";

export default function MeadowLark() {
  const [hoveringItem, setHoveringItem] = useSharedState("hovering-item", null);
  return (
    <main>
      <div className="fixed z-10 flex  w-screen h-screen items-center justify-center font-mono ">
        <span>mouse move detected</span>
      </div>
      <div className=" h-screen w-screen font-mono flex flex-row bg-[#FFEF79] ">
        <div className="w-1/3 bg-white">
          <div className="absolute top-8 left-8 text-base">
            <p>&lt;p&gt;...&lt;/p&gt;</p>
            <p>&lt;svg src="../migration-map.svg"&gt;</p>
          </div>
        </div>

        <div className="flex flex-row w-screen justify-between items-end h-screen pb-8 px-10 font-light ">
          <div className="flex  w-[300px]  justify-between flex-row text-8xl z-10">
            <motion.img
              src="https://asset.togusj.com/migratory-data/stat/black-frame.webp"
              alt="frame"
              className=""
              animate={{
                opacity: hoveringItem === "chapter-two-meadowlark-year" ? 1 : 0,
              }}
            ></motion.img>
          </div>
          <div className="flex flex-row  w-[300px] justify-between text-8xl z-10">
            <motion.img
              src="https://asset.togusj.com/migratory-data/stat/black-frame.webp"
              alt="frame"
              className=""
              animate={{
                opacity:
                  hoveringItem === "chapter-two-meadowlark-summer" ? 1 : 0,
              }}
            ></motion.img>
          </div>
          <div className="flex flex-row text-8xl w-[300px] justify-between z-10 ">
            <motion.img
              src="https://asset.togusj.com/migratory-data/stat/black-frame.webp"
              alt="frame"
              className=""
              animate={{
                opacity:
                  hoveringItem === "chapter-two-meadowlark-winter" ? 1 : 0,
              }}
            ></motion.img>
          </div>
        </div>
        <div className="absolute right-2 top-10">
          <motion.img
            src="https://asset.togusj.com/migratory-data/stat/meadowlark-year-map.webp"
            alt=""
            className="w-[500px]"
            animate={{
              opacity: hoveringItem === "chapter-two-meadowlark-year" ? 1 : 0,
            }}
          />
        </div>
        <div className="absolute right-2 top-2">
          <motion.img
            src="https://asset.togusj.com/migratory-data/stat/meadowlark-summer-map.webp"
            alt=""
            className="w-[500px]"
            animate={{
              opacity: hoveringItem === "chapter-two-meadowlark-summer" ? 1 : 0,
            }}
          />
        </div>
        <div className="absolute right-2 top-10">
          <motion.img
            src="https://asset.togusj.com/migratory-data/stat/meadowlark-winter-map.webp"
            alt=""
            className="w-[600px]"
            animate={{
              opacity: hoveringItem === "chapter-two-meadowlark-winter" ? 1 : 0,
            }}
          />
        </div>

        <div className="absolute bottom-8 left-8">
          <p>User IP Detected:68.229.79.117</p>
        </div>
      </div>
    </main>
  );
}
