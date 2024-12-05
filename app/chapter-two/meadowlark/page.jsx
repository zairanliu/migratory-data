"use client";

import { useState } from "react";
import Link from "next/link";
import useSyncInteractives from "@/hooks/useSyncInteractives";
import { motion, AnimatePresence } from "motion/react";
import useSharedState from "@/hooks/useSharedState";

export default function ChapterTwo() {
  useSyncInteractives();
  const [activeSeason, setActiveSeason] = useState(null);
  const [activeTab, setActiveTab] = useState(1);
  const [hoveringItem, setHoveringItem] = useSharedState("hovering-item", null);

  return (
    <main className="h-screen">
      <Link
        className="text-2xl absolute top-12 left-20 font-serif italic"
        href="/chapter-two"
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
        className="font-grotesk  text-xl flex flex-row right-20 z-20 top-10 absolute"
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
      <div className="max-w-screen flex flex-row">
        <motion.div
          className="w-1/3 h-screen flex flex-col justify-between"
          initial={{ backgroundColor: "#FFF" }}
          animate={{ backgroundColor: "#FFEF79" }}
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
          <div className="font-grotesk max-w-[280px] text-lg leading-tight mx-20 mt-20 ">
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
              A familiar bird, known by the black 'V' on its chest when it sings
              from a fencepost, or by the flash of white tail feathers when it
              flushes from the grass.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.5,
              }}
              className="mt-5"
            >
              Eastern Meadowlarks are considered partial migrants. This means
              their migratory behavior varies depending on their location and
              local conditions.
            </motion.p>
          </div>
          <div className="flex  left-[300px] top-1/2 z-20 absolute">
            <motion.div
              className="font-grotesk text-right text-lg mx-10 justify-end items-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            >
              <div className="cursor-pointer">
                <motion.p
                  onClick={() => setActiveTab(1)}
                  animate={{
                    color: activeTab === 1 ? "#000" : "#939393",
                  }}
                >
                  Species Range by Season
                </motion.p>
                <motion.p
                  onClick={() => setActiveTab(2)}
                  animate={{
                    color: activeTab === 2 ? "#000" : "#939393",
                  }}
                >
                  Journey of a Tracked Bird
                </motion.p>
              </div>
            </motion.div>
            <AnimatePresence>
              <motion.div
                className="leading-tight font-grotesk w-[280px] pt-8 pl-5 
            "
                initial={{ y: 10, opacity: 0 }}
                animate={{
                  opacity: activeTab === 2 ? 1 : 0,
                  y: 0,
                }}
                transition={{ duration: 1 }}
              >
                Two Eastern Meadowlarks are being monitored by the Audubon
                Society. One bird's tracking data shows its movements through
                Central America, while the other's movements are confined to New
                England.
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mb-20 flex mx-10 flex-row justify-between font-Eiko font-medium leading-tight items-end">
            <Link
              href="/chapter-two"
              className="flex gap-3 pl-10 pb-2 font-grotesk text-xl items-center"
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
            <div className="text-[36px]">
              Eastern
              <br />
              Meadowlark
            </div>
          </div>
        </motion.div>
        <div className="h-screen w-2/3 relative">
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
                      className="text-black"
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
                        03/11
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
                        10/22
                      </motion.span>
                    </motion.p>
                    <motion.p
                      key="secondDate"
                      className="text-black"
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
                        04/02
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
                        11/14
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
              <motion.p
                className=""
                initial={{ color: "#D8D8D8" }}
                whileHover={{ color: "#000", scale: 1.1 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                onMouseEnter={() => {
                  setActiveSeason("year-round");
                  setHoveringItem("chapter-two-meadowlark-year");
                }}
                onMouseLeave={() => {
                  setActiveSeason(null);
                  setHoveringItem(null);
                }}
              >
                Year-Round
              </motion.p>
              <motion.p
                className=""
                initial={{ color: "#D8D8D8" }}
                whileHover={{ color: "#000", scale: 1.1 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                onMouseEnter={() => {
                  setActiveSeason("summer");
                  setHoveringItem("chapter-two-meadowlark-summer");
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
                whileHover={{ color: "#000", scale: 1.1 }}
                transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                onMouseEnter={() => {
                  setActiveSeason("winter");
                  setHoveringItem("chapter-two-meadowlark-winter");
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
          <div className="absolute inset-0">
            <img
              src="https://asset.togusj.com/migratory-data/chapter-two/meadowlark/map.webp"
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
          <div className="absolute">
            <svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000">
              <AnimatePresence>
                {activeTab === 2 && (
                  <>
                    <motion.path
                      d="M 510 170 Q 390 400 380 830"
                      fill="transparent"
                      strokeWidth="1"
                      stroke="rgba(0,0,0)"
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
                      d="M  410 830 Q 550 450 540 170"
                      fill="transparent"
                      strokeWidth="1"
                      stroke="rgba(0,0,0)"
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
            className="absolute flex flex-row gap-4 items-center top-[150px] left-[700px] transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              opacity: activeTab === 2 ? 1 : 0,
            }}
          >
            <motion.img
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              src="https://asset.togusj.com/migratory-data/chapter-two/single-frame.webp"
              className="w-6 h-6 peer"
            ></motion.img>
            <div className="opacity-0 peer-hover:opacity-100 transition-opacity ">
              <p className="font-Eiko text-3xl font-medium">
                43°59′6″N  90°30′14″W
              </p>
              <p className="font-grotesk text-lg">
                Tomah, Wisconsin, United States
              </p>
            </div>
          </motion.div>
          <motion.div
            className="absolute font-grotesk flex flex-row gap-4 items-center bottom-[100px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            animate={{
              opacity: activeTab === 2 ? 1 : 0,
            }}
          >
            <motion.img
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              src="https://asset.togusj.com/migratory-data/chapter-two/single-frame.webp"
              className="w-6 h-6 peer"
            ></motion.img>
            <div className="opacity-0 peer-hover:opacity-100 transition-opacity">
              <p className="font-Eiko text-3xl font-medium">
                35°07′03″N 89°58′16″W
              </p>
              <p className="font-grotesk text-lg">
                Memphis, Tennessee, United States
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
