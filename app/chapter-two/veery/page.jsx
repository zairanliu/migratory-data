"use client";

import { useState } from "react";
import Link from "next/link";
import useSyncInteractives from "@/hooks/useSyncInteractives";
import { motion, AnimatePresence } from "motion/react";
import useSharedState from "@/hooks/useSharedState";

export default function ChapterTwo() {
  useSyncInteractives();
  const [activeSeason, setActiveSeason] = useState(null);
  const [activeTab, setActiveTab] = useSharedState("active-tab", 1);
  const [hoveringItem, setHoveringItem] = useSharedState("hovering-item", null);

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
        className="font-grotesk  text-xl flex flex-row right-20 z-20 top-10 absolute text-[#9b643b]"
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
          className="w-1/3 h-screen flex flex-col justify-between bg-[#653C1C]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            backgroundColor: {
              duration: 0.5,
              ease: "easeOut",
              delay: 1,
            },
            x: {
              duration: 1,
            },
          }}
        >
          <div className="font-grotesk max-w-[280px] text-lg  leading-tight mx-20 mt-20 ">
            <motion.p
              className="mt-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.5,
              }}
            >
              In moist leafy woods across the northern states and southern
              Canada, the breezy spiraling song of this thrush is a common sound
              in summer. An observer who waits patiently inside the woods may
              see the Veery itself, bounding across the forest floor with long
            </motion.p>
            <motion.p
              className="mt-5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.5,
              }}
            >
              {" "}
              Staying with us for less than half the year, the bird spends the
              balance of its time living in the shadowy undergrowth of tropical
              rain forest.
            </motion.p>
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
              initial={{ fontSize: "72px" }}
              animate={{ fontSize: "48px" }}
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
        <div className="flex  left-[300px] top-1/2 z-20 absolute">
          <motion.div
            className="font-grotesk text-right text-lg mx-10 justify-end items-center cursor-pointer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          >
            <div>
              <motion.p
                onClick={() => setActiveTab(1)}
                animate={{
                  color: activeTab === 1 ? "#FFF" : "#939393",
                }}
              >
                Species Range by Season
              </motion.p>
              <motion.p
                onClick={() => setActiveTab(2)}
                animate={{
                  color: activeTab === 2 ? "#FFF" : "#939393",
                }}
              >
                Journey of a Tracked Bird
              </motion.p>
            </div>
          </motion.div>
          <AnimatePresence>
            <motion.div
              className="leading-tight text-white font-grotesk w-[250px] pt-8 pl-5
            "
              initial={{ y: 10, opacity: 0 }}
              animate={{
                opacity: activeTab === 2 ? 1 : 0,
                y: 0,
              }}
              transition={{ duration: 1 }}
            >
              Migrates mostly at night. They winter east of the Andes in South
              America. During fall migration, populations from western breeding
              grounds move eastward before heading south.
            </motion.div>
          </AnimatePresence>
        </div>
        <motion.div
          className="h-screen w-2/3 relative 
        "
          animate={{
            backgroundColor: activeTab === 1 ? "#FFF" : "#26180D",
          }}
          transition={{
            backgroundColor: {
              duration: 1,
              ease: "easeOut",
            },
          }}
        >
          {" "}
          <div className="z-10 absolute font-Eiko font-medium text-6xl flex bottom-20 right-10 left-10 flex-col">
            <motion.div
              className="justify-between flex flex-row"
              animate={{
                opacity: activeTab === 2 ? 1 : 0,
                display: activeTab === 2 ? "flex" : "none",
              }}
              transition={{ duration: 0.5 }}
            >
              <AnimatePresence mode="wait">
                {activeTab === 2 && (
                  <>
                    <motion.p
                      key="firstDate"
                      className="text-white"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                      }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.span
                        initial={{ opacity: 1 }}
                        animate={{
                          opacity: [1, 0],
                          transition: {
                            duration: 1,
                            ease: "easeOut",
                            delay: 6,
                          },
                        }}
                      >
                        04/08
                      </motion.span>
                      <motion.span
                        initial={{
                          opacity: 0,
                          position: "absolute",
                          left: 0,
                        }}
                        animate={{
                          opacity: [0, 1],
                          transition: {
                            duration: 1,
                            ease: "easeOut",
                            delay: 7,
                          },
                        }}
                      >
                        08/08
                      </motion.span>
                    </motion.p>
                    <motion.p
                      key="secondDate"
                      className="text-white"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{ duration: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.span
                        initial={{ opacity: 1 }}
                        animate={{
                          opacity: [1, 0],
                          transition: {
                            duration: 1,
                            ease: "easeOut",
                            delay: 6,
                          },
                        }}
                      >
                        05/10
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, position: "absolute", right: 0 }}
                        animate={{
                          opacity: [0, 1],
                          transition: {
                            duration: 1,
                            ease: "easeOut",
                            delay: 7,
                          },
                        }}
                      >
                        08/26
                      </motion.span>
                    </motion.p>
                  </>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
          <div className="z-10 absolute font-Eiko font-medium text-6xl flex bottom-20 right-10 left-10 flex-col">
            <motion.div
              className="justify-between flex flex-row"
              animate={{
                opacity: activeTab === 1 ? 1 : 0,
                display: activeTab === 1 ? "flex" : "none",
              }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[#D8D8D8] line-through">Year-Round</p>
              <motion.p
                className=""
                initial={{ color: "#D8D8D8" }}
                whileHover={{ color: "#3D2716", scale: 1.1 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                onMouseEnter={() => {
                  setActiveSeason("summer");
                  setHoveringItem("chapter-two-veery-summer");
                }}
                onMouseLeave={() => {
                  setActiveSeason(null);
                  setHoveringItem(null);
                }}
              >
                Summer
              </motion.p>

              <motion.p
                className=""
                initial={{ color: "#D8D8D8" }}
                whileHover={{ color: "#3D2716", scale: 1.1 }}
                transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                onMouseEnter={() => {
                  setActiveSeason("winter");
                  setHoveringItem("chapter-two-veery-winter");
                }}
                onMouseLeave={() => {
                  setActiveSeason(null);
                  setHoveringItem(null);
                }}
              >
                Winter
              </motion.p>
            </motion.div>
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: activeTab === 1 ? 1 : 1.2,
                x: activeTab === 1 ? 0 : -100,
                y: activeTab === 1 ? 0 : -100,
              }}
              transition={{ duration: 1 }}
            >
              <img
                src="https://asset.togusj.com/migratory-data/chapter-two/veery/map.webp"
                alt="a map of the Americas"
                className="absolute w-full h-screen object-cover"
              ></img>
              <motion.img
                // Change this to the corresponding image to the season - summer
                src="https://asset.togusj.com/migratory-data/chapter-two/veery/summer.webp"
                alt="a map"
                className="absolute w-full h-screen object-cover"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeSeason === "summer" ? 1 : 0,
                }}
              ></motion.img>
              <motion.img
                // Change this to the corresponding image to the season - winter
                src="https://asset.togusj.com/migratory-data/chapter-two/veery/winter.webp"
                alt="a map"
                className="absolute w-full h-screen object-cover"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeSeason === "winter" ? 1 : 0,
                }}
              ></motion.img>
            </motion.div>
          </div>
          <div className="absolute">
            <svg xmlns="http://www.w3.org/2000/svg" width="1500" height="1500">
              <AnimatePresence>
                {activeTab === 2 && (
                  <>
                    <motion.path
                      d="M 1020 840 Q 500 700 110 110"
                      fill="transparent"
                      strokeWidth="1"
                      stroke="rgba(255,255,255)"
                      strokeLinecap="round"
                      initial={{ pathLength: 0.001, opacity: 1 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        opacity: 0,
                      }}
                      transition={{
                        pathLength: {
                          duration: 4,
                          yoyo: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    />
                    <motion.path
                      d="M  140 80 Q 750 450  1040 800"
                      fill="transparent"
                      strokeWidth="1"
                      stroke="rgba(255,255,255)"
                      strokeLinecap="round"
                      initial={{ pathLength: 0.001, opacity: 1 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        opacity: 0,
                      }}
                      transition={{
                        pathLength: {
                          duration: 4,
                          yoyo: Infinity,
                          ease: "easeInOut",
                          delay: 6,
                        },
                      }}
                    />
                  </>
                )}
              </AnimatePresence>
            </svg>
          </div>
          <motion.div
            className="absolute flex flex-row gap-4 items-center top-[50px] left-[100px]"
            animate={{
              opacity: activeTab === 2 ? 1 : 0,
            }}
          >
            <motion.img
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              src="https://asset.togusj.com/migratory-data/chapter-two/white-single.webp"
              className="w-6 h-6 peer"
            ></motion.img>
            <div className="opacity-0 peer-hover:opacity-100 transition-opacity ">
              <p className="font-Eiko text-3xl font-medium">
                45.5155° N, 122.6789° W
              </p>
              <p className="font-grotesk text-lg">
                Portland, Oregon, United States
              </p>
            </div>
          </motion.div>
          <motion.div
            className="absolute font-grotesk flex flex-col-reverse gap-4 items-end bottom-40 right-20 "
            animate={{
              opacity: activeTab === 2 ? 1 : 0,
            }}
          >
            <motion.img
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              src="https://asset.togusj.com/migratory-data/chapter-two/white-single.webp"
              className="w-6 h-6 peer"
            ></motion.img>
            <div className="opacity-0 peer-hover:opacity-100 transition-opacity">
              <p className="font-Eiko text-3xl font-medium">
                8.75° N, 75.87° W
              </p>
              <p className="font-grotesk text-lg">
                Montería, Cordoba, Colombia
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
