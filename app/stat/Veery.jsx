"use client";
import useSharedState from "@/hooks/useSharedState";
import { motion } from "motion/react";

export default function Veery() {
  const [hoveringItem, setHoveringItem] = useSharedState("hovering-item", null);
  return (
    <main>
      <div className=" h-screen w-screen font-mono flex flex-row bg-[#653C1C] text-black">
        <div className="w-1/3 bg-white ">
          <div className="absolute top-8 left-8 text-base ">
            <p>&lt;p&gt;...&lt;/p&gt;</p>
            <p>&lt;svg src="../migration-map.svg"&gt;</p>
          </div>
        </div>

        <div className="flex flex-row w-screen justify-between items-end h-screen pb-8 px-10 font-light text-white">
          <div className="flex  w-[300px]  justify-between flex-row text-8xl">
            <motion.img
              src="https://asset.togusj.com/migratory-data/stat/black-frame.webp"
              alt="frame"
              className=""
              animate={{
                opacity: hoveringItem === "chapter-two-veery-year" ? 1 : 0,
              }}
            ></motion.img>
          </div>
          <div className="flex flex-row  w-[300px] justify-between  text-8xl">
            <motion.img
              src="https://asset.togusj.com/migratory-data/stat/black-frame.webp"
              alt="frame"
              className=""
              animate={{
                opacity: hoveringItem === "chapter-two-veery-summer" ? 1 : 0,
              }}
            ></motion.img>
          </div>
          <div className="flex flex-row text-8xl w-[300px] justify-between z-10">
            <motion.img
              src="https://asset.togusj.com/migratory-data/stat/black-frame.webp"
              alt="frame"
              className=""
              animate={{
                opacity: hoveringItem === "chapter-two-veery-winter" ? 1 : 0,
              }}
            ></motion.img>
          </div>
        </div>

        <div className="absolute left-1/3 -top-2 right-20">
          <motion.img
            src="https://asset.togusj.com/migratory-data/stat/veery-summer-map.webp"
            alt=""
            className=""
            animate={{
              opacity: hoveringItem === "chapter-two-veery-summer" ? 1 : 0,
            }}
          />
        </div>
        <div className="absolute -bottom-40 -right-40">
          <motion.img
            src="https://asset.togusj.com/migratory-data/stat/veery-winter-map.webp"
            alt=""
            className="w-[400px]"
            animate={{
              opacity: hoveringItem === "chapter-two-veery-winter" ? 1 : 0,
            }}
          />
        </div>

        <div className="absolute bottom-8 left-8 text-black">
          <p>User IP Detected:68.229.79.117</p>
        </div>
      </div>
    </main>
  );
}
