"use client";

import Link from "next/link";
import throttle from "lodash-es/throttle";
import { useRef } from "react";
import useSocket from "@/hooks/useSocket";
import useMousemoveEvent from "@/hooks/useMousemoveEvent";
import {
  motion,
  useTransform,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { ReactLenis } from "lenis/react";

export default function ChapterOne() {
  const targetRef = useRef(null);
  const { scrollY, scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  const socket = useSocket();

  useMotionValueEvent(
    scrollY,
    "change",
    throttle((latest) => {
      socket.emit("message", { type: "scroll", value: latest });
    }, 10)
  );

  useMousemoveEvent(
    throttle(({ x, y }) => {
      socket.emit("message", { type: "mousemove", value: { x, y } });
    }, 200)
  );

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 5 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <ReactLenis root>
      {/* This div is the scrolling area */}
      <div ref={targetRef} className="relative h-[300vh]">
        <main className="fixed top-0">
          <Link
            className="fixed top-12 left-20  block z-10 font-serif"
            href="/"
          >
            <div className="flex">
              <div className="italic text-7xl  text-[#195b9c]  flex">
                {"Banding".split("").map((letter, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{
                      y: [30, 0],
                      opacity: 1,
                      transition: {
                        ease: "easeIn",
                        duration: 1,
                        delay: index * 0.04,
                      },
                    }}
                  >
                    {letter}
                  </motion.div>
                ))}
              </div>

              <div className="italic text-7xl  text-[#195b9c] flex">
                {"—Tagging".split("").map((letter, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{
                      y: [30, 0],
                      opacity: 1,
                      transition: {
                        ease: "easeIn",
                        duration: 1,
                        delay: 0.02 + index * 0.04,
                      },
                    }}
                  >
                    {letter}
                  </motion.div>
                ))}
              </div>
            </div>
          </Link>

          {/* This div is the scrolling content */}
          <motion.div style={{ x }} className="flex">
            <section className="w-screen flex">
              <motion.video
                autoPlay
                playsInline
                muted
                loop
                className="w-3/5 h-screen object-cover bg-white"
                initial={{ opacity: 0 }}
                animate={{ y: [-20, 0], opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
              >
                <source
                  src="https://asset.togusj.com/banding.mp4"
                  type="video/mp4"
                ></source>
              </motion.video>
              <div className="flex flex-col justify-between">
                <div className="ml-[80px] flex-1 flex flex-col justify-center gap-10">
                  <motion.p
                    className="max-w-[500px] text-3xl leading-10  text-[#195b9c] font-Eiko"
                    initial={{ opacity: 0 }}
                    animate={{
                      y: [100, 0],
                      opacity: 1,
                      transition: {
                        ease: "easeOut",
                        duration: 1,
                        delay: 0.8,
                      },
                    }}
                  >
                    In order to identify and keep track of individual birds,
                    scientists put aluminum or colored bands on birds’ legs.
                    Similar to the license plate on a car, each aluminum band is
                    engraved with a unique set of numbers.
                  </motion.p>
                </div>
                <motion.svg
                  className="absolute"
                  width="600"
                  height="600"
                  viewBox="0 0 600 600"
                  initial="hidden"
                  animate="visible"
                >
                  <motion.line
                    x1="80"
                    y1="435"
                    x2="455"
                    y2="435"
                    stroke="#1e3a8a"
                    strokeWidth="1.5px"
                    variants={draw}
                    custom={1}
                  />
                </motion.svg>
                <motion.p
                  className="pl-[90px] py-12 text-xl justify-end  text-[#003162] font-pitch"
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ ease: "easeInOut", duration: 1, delay: 3 }}
                >
                  scroll to continue
                </motion.p>
              </div>
            </section>

            <section className="w-screen flex pt-[100px] items-end">
              \
              <motion.p
                className="ml-40 mb-[45px] max-w-[600px] text-3xl leading-10  text-[#003162] font-Eiko"
                initial={{ opacity: 0 }}
                animate={{
                  y: [100, 0],
                  opacity: 1,
                  transition: { ease: "easeInOut", duration: 0.5 },
                }}
              >
                <span className="font-pitchSans tracking-tighter block mb-[40px] text-[14px] leading-normal">
                  Smithsonian’s National Zoo and<br></br> Conservation Biology
                  Institute
                </span>
                Bird banding is one of the oldest and most important techniques
                used for studying and identifying individual birds. In the early
                1800s, John James Audubon tied threads to birds’ legs to
                identify individuals that were visiting his farm.
              </motion.p>
              <motion.p className=" ml-20 max-w-[600px] mb-[45px] text-3xl leading-10  text-[#003162] font-Eiko">
                In 1902, the first scientific study to use bird banding took
                place in the United States: Smithsonian scientists attached
                bands to the legs of black-crowned night herons at the
                Smithsonian’s National Zoo in Washington, D.C.
              </motion.p>
              <motion.img
                className="max-w-[400px] absolute -z-10 top-40"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
                src="https://asset.togusj.com/bird-band.jpg"
                alt=""
              />
              <motion.video
                autoPlay
                playsInline
                muted
                loop
                className="ml-[800px] mb-[200px] w-[500px] h-[700px] absolute object-cover bg-white -z-10"
                initial={{ opacity: 0 }}
                whileInView={{ y: [-20, 0], opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
              >
                <source
                  src="https://asset.togusj.com/banding.mp4"
                  type="video/mp4"
                ></source>
              </motion.video>
            </section>
            <section className="w-screen flex items-center">
              <motion.p
                className="mt-[45px] max-w-[600px] text-3xl leading-10 text-blue-900 font-Eiko"
                initial={{ opacity: 0 }}
                animate={{
                  y: [100, 0],
                  opacity: 1,
                  transition: { ease: "easeInOut", duration: 0.5 },
                }}
              >
                With the bird band, the researcher can record the bird’s
                species, physical measurements and the location and date they
                found it. When banded birds are later recaptured or found, their
                band numbers can be reported. This helps scientists to track
                migration patterns and to understand population dynamics.
              </motion.p>
              <motion.svg
                className="absolute"
                width="600"
                height="600"
                viewBox="0 0 600 600"
                initial="hidden"
                animate="visible"
              ></motion.svg>
            </section>
          </motion.div>
        </main>
      </div>
    </ReactLenis>
  );
}
