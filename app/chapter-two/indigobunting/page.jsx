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
        className="font-grotesk  text-xl flex flex-row right-20 z-20 top-10 absolute text-[#2B6BA6]"
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
          className="w-1/3 h-screen flex flex-col justify-between bg-[#2B6BA6]"
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
              In parts of the East, Indigo Bunting may be the most abundant
              songbird, with the deep-blue males singing along every roadside.
              The plain brown females are seen far less often, and they have
              good reason to be inconspicuous: they do almost all the work of
              caring for the eggs and young, hidden away in dense thickets.
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
              This species favors brushy edges rather than unbroken forest, and
              is probably far more common today than when the Pilgrims landed.
            </motion.p>
          </div>

          <motion.div
            className="font-grotesk text-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          >
            <div className="cursor-pointer text-right mr-10">
              <motion.p
                onClick={() => setActiveTab(1)}
                animate={{
                  color: activeTab === 1 ? "#FFF" : "#939393",
                }}
              >
                Species Range by Season
              </motion.p>
              <motion.div
                className="relative"
                onClick={() => setActiveTab(2)}
                animate={{
                  color: activeTab === 2 ? "#FFF" : "#939393",
                }}
              >
                Journey of a Tracked Bird
                <div className="absolute left-full top-0 z-10">
                  <AnimatePresence>
                    <motion.div
                      className="ml-20 leading-tight font-grotesk w-[280px] mt-1 text-left
            "
                      initial={{ y: 10, opacity: 0 }}
                      animate={{
                        opacity: activeTab === 2 ? 1 : 0,
                        y: 0,
                      }}
                      transition={{ duration: 1 }}
                    >
                      Migrates at night, and can navigate by the stars. Many
                      migrate across Gulf of Mexico in both spring and fall.
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
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
        <motion.div
          className="h-screen w-2/3 relative"
          animate={{
            backgroundColor: activeTab === 1 ? "#FFF" : "#090B12",
          }}
          transition={{
            backgroundColor: {
              duration: 1,
              ease: "easeOut",
            },
          }}
        >
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
                            delay: 5,
                          },
                        }}
                      >
                        03/20
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
                            delay: 6,
                          },
                        }}
                      >
                        09/04
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
                            delay: 5,
                          },
                        }}
                      >
                        04/10
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, position: "absolute", right: 0 }}
                        animate={{
                          opacity: [0, 1],
                          transition: {
                            duration: 1,
                            ease: "easeOut",
                            delay: 6,
                          },
                        }}
                      >
                        10/11
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
                  setHoveringItem("chapter-two-indigo-year");
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
                  setHoveringItem("chapter-two-indigo-summer");
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
                  setHoveringItem("chapter-two-indigo-winter");
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
                scale: activeTab === 1 ? 1 : 2,
                x: activeTab === 1 ? 0 : -400,
                y: activeTab === 1 ? 0 : -400,
              }}
              transition={{ duration: 2 }}
            >
              <img
                src="https://asset.togusj.com/migratory-data/chapter-two/indigo/map.webp"
                alt="a map of the Americas"
                className="absolute w-full h-screen object-cover"
              ></img>
              <motion.img
                // Change this to the corresponding image to the season - year-round
                src="https://asset.togusj.com/migratory-data/chapter-two/indigo/year-round.webp"
                alt="a map"
                className="absolute w-full h-screen object-cover"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeSeason === "year-round" ? 1 : 0,
                }}
              ></motion.img>
              <motion.img
                // Change this to the corresponding image to the season - summer
                src="https://asset.togusj.com/migratory-data/chapter-two/indigo/summer.webp"
                alt="a map"
                className="absolute w-full h-screen object-cover"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeSeason === "summer" ? 1 : 0,
                }}
              ></motion.img>
              <motion.img
                // Change this to the corresponding image to the season - winter
                src="https://asset.togusj.com/migratory-data/chapter-two/indigo/winter.webp"
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
            <svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000">
              <AnimatePresence>
                {activeTab === 2 && (
                  <>
                    <motion.path
                      d="M  450 660  Q 450 400 560 270 "
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
                          duration: 3,
                          yoyo: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    />
                    <motion.path
                      d="M  590 280 Q 590 480  480 670"
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
                          duration: 3,
                          yoyo: Infinity,
                          ease: "easeInOut",
                          delay: 5.5,
                        },
                      }}
                    />
                  </>
                )}
              </AnimatePresence>
            </svg>
          </div>
          <motion.div
            className="absolute flex flex-row gap-4 items-center top-[250px] left-[750px]  -translate-x-1/2 -translate-y-1/2"
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
                30°26′51″N 91°10′43″W
              </p>
              <p className="font-grotesk text-lg">
                Baton Rouge, Louisiana, United States
              </p>
            </div>
          </motion.div>
          <motion.div
            className="absolute font-grotesk flex flex-row gap-4 items-center bottom-[300px] left-[450px] "
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
                20°58′12″N 89°37′12″W
              </p>
              <p className="font-grotesk text-lg">Mérida, Yucatán, Mexico</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
