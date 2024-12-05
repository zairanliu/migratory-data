"use client";

import { motion, useTransform, useScroll } from "motion/react";
import { ReactLenis } from "lenis/react";
import useSyncInteractives from "@/hooks/useSyncInteractives";
import FlockingSimulation from "./FlockingSimulation";
import Link from "next/link";
import { useState } from "react";

export default function ChapterThree() {
  const { scrollTarget, scrollYProgress } = useSyncInteractives();
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const largeTextOffset = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const [activeTab, setActiveTab] = useState(1);
  return (
    <ReactLenis root>
      {/* This div is the scrolling area */}
      <div ref={scrollTarget} className="h-[200vh]">
        <main className="fixed top-0">
          {/* This div is the scrolling content */}

          <motion.div
            style={{ x }}
            className="h-screen flex bg-themeblue text-white"
          >
            {/* section with video and large text */}
            <section className="w-[100vw] relative">
              <Link
                className="text-xl font-Eiko italic tracking-wide z-10 absolute top-12 left-20 "
                href="/"
              >
                <div className=" flex">
                  {"Flocking".split("").map((letter, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{
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
              <motion.video
                autoPlay
                playsInline
                muted
                loop
                className="w-full h-screen object-cover"
                initial={{ opacity: 0 }}
                animate={{ y: [-10, 0], opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1 }}
              >
                <source
                  src="https://asset.togusj.com/migratory-data/chapter-three/flocking.mp4"
                  type="video/mp4"
                ></source>
              </motion.video>

              <motion.div
                className="absolute top-20 left-[1000px] -right-[1500px] text-8xl font-Eiko  leading-tight flex flex-col"
                style={{
                  x: largeTextOffset,
                }}
              >
                <motion.div
                  className="italic"
                  initial={{ opacity: 0 }}
                  animate={{
                    y: [40, 0],
                    opacity: 1,
                    transition: {
                      ease: "easeOut",
                      duration: 1,
                      delay: 2.5,
                    },
                  }}
                >
                  An ensemble that plays out
                </motion.div>
                <motion.div
                  className="ml-[1000px] italic"
                  initial={{ opacity: 0 }}
                  whileInView={{
                    y: [20, 0],
                    opacity: 1,
                    transition: {
                      ease: "easeOut",
                      duration: 1,
                      delay: 1,
                    },
                  }}
                >
                  in countless
                  <div className="inline max-w-[700px]">
                    <span> variations</span>
                    <div className="text-xl flex flex-row font-grotesk mt-20 justify-end gap-10 mr-20 not-italic">
                      <div className="">
                        <motion.p
                          onClick={() => setActiveTab(1)}
                          animate={{
                            color: activeTab === 1 ? "#FFF" : "#939393",
                          }}
                        >
                          Loose Flock
                        </motion.p>
                        <motion.p
                          onClick={() => setActiveTab(2)}
                          animate={{
                            color: activeTab === 2 ? "#FFF" : "#939393",
                          }}
                        >
                          Cohesive Flock
                        </motion.p>
                      </div>
                      <motion.div className=" max-w-[350px] font-grotesk text-lg">
                        {activeTab === 1 && (
                          <motion.p transition={{ duration: 0.5 }}>
                            Eastern Meadowlarks, Indigo Buntings, and Veeries
                            tend to form small loose flocks which maintain a
                            more relaxed social structure where birds stay
                            within sight or calling distance of each other while
                            preserving their personal space. This arrangement
                            allows birds to benefit from group vigilance against
                            predators while still having the freedom.
                          </motion.p>
                        )}
                        {activeTab === 2 && (
                          <motion.p transition={{ duration: 0.5 }}>
                            In cohesive flocks, each bird follows simple rules,
                            maintaining a specific distance from its neighbors
                            while matching their speed and direction. Starlings
                            are particularly famous for their murmurations. This
                            self-organizing system allows hundreds or even
                            thousands of birds to respond to threats or changes
                            in direction almost instantaneously.
                          </motion.p>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="font-grotesk normal max-w-[280px] text-lg mt-[10px] leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                >
                  Birds flock together for several compelling reasons: safety in
                  numbers against predators, improved foraging efficiency as
                  many eyes spot food sources, and enhanced navigation during
                  migration as experienced birds guide the group.
                </motion.div>
                <motion.div
                  className="mt-2 self-end italic"
                  initial={{ opacity: 0 }}
                  whileInView={{
                    y: [20, 0],
                    opacity: 1,
                    transition: {
                      ease: "easeOut",
                      duration: 1,
                      delay: 1,
                    },
                  }}
                >
                  across our skies
                </motion.div>
              </motion.div>
            </section>

            <section className="w-[100vw] h-screen relative -z-10">
              <Link
                href="/about"
                className="flex flex-row items-center gap-4 absolute right-20 top-1/2 -translate-y-1/2 font-grotesk text-lg "
              >
                <span className="">Read more</span>
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
                </svg>{" "}
              </Link>

              <FlockingSimulation isTight={activeTab === 1} />
            </section>
          </motion.div>
        </main>
      </div>
    </ReactLenis>
  );
}
