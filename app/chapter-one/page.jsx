"use client";

import Link from "next/link";
import { motion, useTransform } from "motion/react";
import { ReactLenis } from "lenis/react";
import useSyncInteractives from "@/hooks/useSyncInteractives";
import AnimationWhiteOut from "@/components/AnimationWhiteOut";

export default function ChapterOne() {
  const { scrollTarget, scrollYProgress } = useSyncInteractives();
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70.6%"]);
  const largeTextOffset = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <ReactLenis root>
      {/* This div is the scrolling area */}
      <div ref={scrollTarget} className="h-[400vh]">
        <main className="fixed top-0">
          {/* This div is the scrolling content */}
          <motion.div
            style={{ x }}
            className="h-screen flex bg-themeblue text-white"
          >
            <section className="w-[40vw] flex flex-col justify-between">
              <div className="max-w-[36rem] px-20 py-12 font-grotesk text-lg">
                <Link className="text-2xl font-serif italic " href="/">
                  <div className="flex">
                    <div className=" flex">
                      {"Bird".split("").map((letter, index) => (
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

                    <div className="flex">
                      {"\u00A0Banding".split("").map((letter, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{
                            y: [20, 0],
                            opacity: 1,
                            transition: {
                              ease: "easeOut",
                              duration: 0.6,
                              delay: 0.05 + index * 0.02,
                            },
                          }}
                        >
                          {letter}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Link>

                <motion.div className="mt-20 leading-tight">
                  Bird banding is one of the oldest and most important
                  techniques used for studying and identifying individual birds.
                </motion.div>
                <motion.div className="mt-8 leading-tight">
                  Today in the U.S., bird banding is regulated and supervised by
                  the federal government. Every band placed on a wild bird in
                  the United States must be issued by the Bird Banding
                  Laboratory, ensuring that each bird receives a unique
                  identifier that can be recognized by researchers worldwide.
                </motion.div>
                <p className="mt-12 text-base font-light">
                  Smithsonian’s National Zoo and
                  <br />
                  Conservation Biology Institute
                </p>
              </div>
              <div className="font-grotesk px-20 py-12 flex items-center gap-2 animate-oscillating">
                scroll to continue
                {/* right arrow icon */}
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
              </div>
            </section>

            {/* section with video and large text */}
            <section className="w-[100vw] relative">
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
                  src="https://asset.togusj.com/migratory-data/chapter-one/nest-caught.mp4"
                  type="video/mp4"
                ></source>
              </motion.video>

              <motion.div
                className="absolute bottom-40 -left-20 -right-72 text-8xl font-Eiko italic leading-tight flex flex-col"
                style={{
                  x: largeTextOffset,
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    y: [20, 0],
                    opacity: 1,
                    transition: {
                      ease: "easeOut",
                      duration: 1,
                      delay: 2,
                    },
                  }}
                >
                  Before a bird
                </motion.div>
                <motion.div
                  className="ml-60"
                  initial={{ opacity: 0 }}
                  whileInView={{
                    y: [20, 0],
                    opacity: 1,
                    transition: {
                      ease: "easeOut",
                      duration: 1,
                      delay: 2.5,
                    },
                  }}
                >
                  can be banded,{" "}
                </motion.div>

                <motion.div
                  className="mt-40 self-end"
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
                  it must be caught.
                </motion.div>
              </motion.div>
            </section>

            {/* section with three birds */}
            <section className="w-screen h-screen relative">
              <motion.div
                className="w-[calc(100%+10rem)] top-32 -left-80 border-b border-white relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <div className="absolute right-0 bottom-0">
                  <div className="font-Eiko text-3xl">Mist Nest</div>
                  <div className="font-grotesk text-base pb-2 text-[#939393]">
                    hover to interact
                  </div>
                </div>
                <div className="absolute top-full left-0">
                  <p className="py-4 max-w-64 font-grotesk leading-tight">
                    For smaller birds, researchers use mist nest—tall, long nets
                    made of very fine threads that blend into the surroundings.
                  </p>
                </div>
              </motion.div>
              <div className="absolute inset-0 top-32 px-[10vw] py-[4vw] flex items-center gap-[8vw]">
                <div className="w-0 flex-1 self-start relative">
                  <img
                    src="https://asset.togusj.com/migratory-data/chapter-one/eastern-meadowlark.webp"
                    alt="eastern meadowlark on fence"
                    className="peer"
                  ></img>
                  <div className="absolute top-0 left-[85%] font-Eiko font-medium text-7xl opacity-0 peer-hover:opacity-100 transition-opacity pointer-events-none">
                    Eastern
                    <br />
                    Meadowlark
                  </div>
                </div>

                <div className="w-0 flex-1 relative">
                  <img
                    src="https://asset.togusj.com/migratory-data/chapter-one/indigo-bunting.webp"
                    alt="indigo bunting in tree"
                    className="peer"
                  ></img>
                  <div className="absolute top-[50%] -left-[55%] font-Eiko font-medium text-7xl opacity-0 peer-hover:opacity-100 transition-opacity pointer-events-none">
                    Indigo
                    <br />
                    Bunting
                  </div>
                </div>

                <div className="w-0 flex-1 self-end relative">
                  <img
                    src="https://asset.togusj.com/migratory-data/chapter-one/veery.webp"
                    alt="veery on branch"
                    className="peer"
                  ></img>
                  <div className="absolute -top-[20%] right-0 font-Eiko font-medium text-7xl opacity-0 peer-hover:opacity-100 transition-opacity pointer-events-none">
                    Veery
                  </div>
                </div>
              </div>
            </section>

            <section className="w-screen flex relative">
              <div className="w-1/2 relative">
                <video
                  autoPlay
                  playsInline
                  muted
                  loop
                  className="w-full h-full object-cover"
                >
                  <source
                    src="https://asset.togusj.com/migratory-data/chapter-one/banding.mp4"
                    type="video/mp4"
                  ></source>
                </video>
                <p className="absolute left-20 top-40 mr-20 max-w-72 font-grotesk leading-tight">
                  After capture the bird, scientists then put a uniquely
                  numbered aluminum band, and sometimes also colored plastic
                  bands, on the bird's legs.
                </p>
              </div>

              <div className="w-1/2 relative">
                <video
                  autoPlay
                  playsInline
                  muted
                  loop
                  className="w-full h-full object-cover"
                >
                  <source
                    src="https://asset.togusj.com/migratory-data/chapter-one/release.mp4"
                    type="video/mp4"
                  ></source>
                </video>
                <p className="absolute left-0 top-40 ml-20 font-grotesk">
                  Finally, the bird is released.
                </p>
              </div>

              <Link
                className="absolute bottom-0 right-0 font-grotesk px-20 py-12 flex items-center gap-2"
                href="/chapter-two"
              >
                click to continue
                {/* right arrow icon */}
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
            </section>
          </motion.div>
        </main>
      </div>
    </ReactLenis>
  );
}
