"use client";
import useSharedState from "@/hooks/useSharedState";
import { motion } from "motion/react";

export default function IndigoBunting() {
  const [hoveringItem, setHoveringItem] = useSharedState("hovering-item", null);
  return (
    <main>
      <div className="fixed z-10 flex  w-screen h-screen items-center justify-center font-mono text-white ">
        <span>mouse move detected</span>
      </div>
      <div className=" h-screen w-screen font-mono flex flex-row bg-[#2B6BA6] text-black">
        <div className="w-1/3 bg-white">
          <div className="absolute top-8 left-8 text-base">
            <p>&lt;p&gt;...&lt;/p&gt;</p>
            <p>&lt;svg src="../migration-map.svg"&gt;</p>
          </div>
        </div>
        {/* <div className="absolute top-1/4 left-2/3 ">
          <img
            src="https://asset.togusj.com/migratory-data/stat/indigo-zoom.webp"
            alt="frame"
            className="w-[400px]"
          ></img>
        </div> */}
        <div className="flex flex-row w-screen justify-between items-end h-screen pb-8 px-10 text-white">
          <div className="flex  w-[300px]  justify-between flex-row text-8xl">
            <motion.img
              src="https://asset.togusj.com/migratory-data/stat/black-frame.webp"
              alt="frame"
              className=""
              animate={{
                opacity: hoveringItem === "chapter-two-indigo-year" ? 1 : 0,
              }}
            ></motion.img>
          </div>
          <div className="flex flex-row  w-[300px] justify-between  text-8xl">
            <motion.img
              src="https://asset.togusj.com/migratory-data/stat/black-frame.webp"
              alt="frame"
              className=""
              animate={{
                opacity: hoveringItem === "chapter-two-indigo-summer" ? 1 : 0,
              }}
            ></motion.img>
          </div>
          <div className="flex flex-row text-8xl w-[300px] justify-between ">
            <motion.img
              src="https://asset.togusj.com/migratory-data/stat/black-frame.webp"
              alt="frame"
              className=""
              animate={{
                opacity: hoveringItem === "chapter-two-indigo-winter" ? 1 : 0,
              }}
            ></motion.img>
          </div>
        </div>
        <div className="absolute left-1/2 top-1/4">
          <motion.img
            src="https://asset.togusj.com/migratory-data/stat/indigo-year-map.webp"
            alt=""
            className="w-[400px]"
            animate={{
              opacity: hoveringItem === "chapter-two-indigo-year" ? 1 : 0,
            }}
          />
        </div>
        <div className="absolute right-1 top-1">
          <motion.img
            src="https://asset.togusj.com/migratory-data/stat/indigo-summer-map.webp"
            alt=""
            className="w-[500px]"
            animate={{
              opacity: hoveringItem === "chapter-two-indigo-summer" ? 1 : 0,
            }}
          />
        </div>
        <div className="absolute left-2/3 top-1/3">
          <motion.img
            src="https://asset.togusj.com/migratory-data/stat/indigo-winter-map.webp"
            alt=""
            className="w-[500px]"
            animate={{
              opacity: hoveringItem === "chapter-two-indigo-winter" ? 1 : 0,
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
