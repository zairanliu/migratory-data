"use client";

import useIPAddress from "@/hooks/useIPAddress";
import useSharedState from "@/hooks/useSharedState";
import { motion, useTransform, useScroll } from "motion/react";

export default function ChapterTwoStat() {
  const { ip, loading } = useIPAddress();
  const [hoveringItem, setHoveringItem] = useSharedState("hovering-item", null);

  return (
    <div className="bg-[#fe6c00] h-screen w-screen font-mono relative ">
      <div className="absolute top-8 left-8 text-base">
        <p>&lt;video src="../video/bird-migration.mp4"&gt;</p>
        <p>&lt;p&gt;...&lt;/p&gt;</p>
        <p>&lt;p&gt;...&lt;/p&gt;</p>
      </div>
      <div className="flex flex-row justify-between items-end h-screen pb-[90px] px-10 font-light ">
        <div className="flex w-[300px] justify-between flex-row text-8xl">
          <motion.img
            src="https://asset.togusj.com/migratory-data/stat/black-frame.webp"
            alt="frame"
            className=""
            animate={{
              opacity:
                hoveringItem === "chapter-two-eastern-meadowlark-title" ? 1 : 0,
            }}
          ></motion.img>
        </div>
        <div className="flex flex-row  w-[300px] justify-between  text-8xl">
          <motion.img
            src="https://asset.togusj.com/migratory-data/stat/black-frame.webp"
            alt="frame"
            className=""
            animate={{
              opacity: hoveringItem === "chapter-two-indigo-title" ? 1 : 0,
            }}
          ></motion.img>
        </div>
        <div className="flex flex-row text-8xl  w-[300px] justify-between ">
          <motion.img
            src="https://asset.togusj.com/migratory-data/stat/black-frame.webp"
            alt="frame"
            className=""
            animate={{
              opacity: hoveringItem === "chapter-two-veery-title" ? 1 : 0,
            }}
          ></motion.img>
        </div>
      </div>

      <div className="absolute bottom-8 left-8">
        <p>User IP {loading ? "Detecting" : `Detected: ${ip}`}</p>
      </div>
    </div>
  );
}
