"use client";

import Link from "next/link";
import useSyncInteractives from "@/hooks/useSyncInteractives";
import { motion } from "motion/react";
import FlipCard from "@/components/FlipCard";

export default function about() {
  useSyncInteractives();

  return (
    <section className=" bg-themeblue w-screen  text-white">
      <div className=" flex items-center justify-center p-20">
        <div className="font-grotesk">about</div>
      </div>

      <div className="flex justify-center w-full">
        <div className="flex flex-row justify-center items-start gap-8 max-w-7xl w-full px-4">
          <div className="max-w-[500px]">
            <p className="font-grotesk text-lg">
              This project draws parallels between bird tracking and user
              tracking in digital spaces, comparing how researchers tag birds
              with physical bands as websites track users through digital
              cookies and device ID, and how birds migrate along specific routes
              to how users navigate across websites.
            </p>
            <p className="font-grotesk text-lg mt-5">
              Through my ten plates reinterpreting John James Audubon's original
              drawings, I have found several ideas that intrigued me: seeing
              birds as both living organisms and data points, the growing
              dependence on digital tools for birdwatching, and the ethical
              considerations surrounding database construction. This project
              sits at the intersection of these themes.
            </p>
          </div>
          <video
            autoPlay
            playsInline
            muted
            loop
            className="max-w-[600px] min-w-[300px] object-cover"
            style={{
              animation: "grayOut 4s ease-out 4s forwards",
            }}
          >
            <source src="https://asset.togusj.com/intro.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className=" flex flex-col items-center gap-10 mt-20 h-[800px] bg-themeblue w-screen">
        <div className="font-grotesk ">10 plates</div>
        <div className="grid grid-cols-5 grid-rows-2 gap-4 min-w-[70vw] ">
          {/* Row 1 */}
          <FlipCard
            front="https://asset.togusj.com/migratory-data/about/1.webp"
            back="https://asset.togusj.com/migratory-data/about/2.webp"
          />
          <FlipCard
            front="https://asset.togusj.com/migratory-data/about/3.webp"
            back="https://asset.togusj.com/migratory-data/about/4.webp"
          />
          <FlipCard
            front="https://asset.togusj.com/migratory-data/about/5.webp"
            back="https://asset.togusj.com/migratory-data/about/6.webp"
          />

          <FlipCard
            front="https://asset.togusj.com/migratory-data/about/7.webp"
            back="https://asset.togusj.com/migratory-data/about/8.webp"
          />
          <FlipCard
            front="https://asset.togusj.com/migratory-data/about/9.webp"
            back="https://asset.togusj.com/migratory-data/about/10.webp"
          />
          <FlipCard
            front="https://asset.togusj.com/migratory-data/about/11.webp"
            back="https://asset.togusj.com/migratory-data/about/12.webp"
          />

          {/* Row 3 */}
          <FlipCard
            front="https://asset.togusj.com/migratory-data/about/13.webp"
            back="https://asset.togusj.com/migratory-data/about/14.webp"
          />
          <FlipCard
            front="https://asset.togusj.com/migratory-data/about/15.webp"
            back="https://asset.togusj.com/migratory-data/about/16.webp"
          />
          <FlipCard
            front="https://asset.togusj.com/migratory-data/about/17.webp"
            back="https://asset.togusj.com/migratory-data/about/18.webp"
          />
          <FlipCard
            front="https://asset.togusj.com/migratory-data/about/19.webp"
            back="https://asset.togusj.com/migratory-data/about/20.webp"
          />
        </div>
        <p className="font-grotesk text-lg mt-5">
          Thanks for the help of Jason Gao, Claude by Anthropic and Github
          Copilot
        </p>
      </div>
    </section>
  );
}
