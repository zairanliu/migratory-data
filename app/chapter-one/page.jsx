"use client";

import Link from "next/link";
import throttle from "lodash-es/throttle";
import { useRef } from "react";
import useChannel from "@/hooks/useChannel";
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

  const messageChannel = useChannel();

  useMotionValueEvent(
    scrollY,
    "change",
    throttle((latest) => {
      messageChannel.send({ type: "scroll", value: latest });
    }, 10)
  );

  useMousemoveEvent(
    throttle(({ x, y }) => {
      messageChannel.send({ type: "mousemove", value: { x, y } });
    }, 10)
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
            className="fixed top-12 left-20  block z-10 font-seif text-5xl   text-white italic "
            href="/"
          >
            <div className="flex">
              <div className=" flex">
                {"Bird - ".split("").map((letter, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{
                      y: [20, 0],
                      opacity: 1,
                      transition: {
                        ease: "easeOut",
                        duration: 1,
                        delay: index * 0.04,
                      },
                    }}
                  >
                    {letter}
                  </motion.div>
                ))}
              </div>

              <div className="flex">
                {"Banding".split("").map((letter, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{
                      y: [20, 0],
                      opacity: 1,
                      transition: {
                        ease: "easeOut",
                        duration: 1,
                        delay: 0.3 + index * 0.02,
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
            <section className="w-screen relative">
              <motion.video
                autoPlay
                playsInline
                muted
                loop
                className="w-screen h-screen object-cover bg-white"
                initial={{ opacity: 0 }}
                animate={{ y: [-10, 0], opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1 }}
              >
                <source
                  src="https://asset.togusj.com/banding.mp4"
                  type="video/mp4"
                ></source>
              </motion.video>

              <div className="flex flex-col justify-between z-10 absolute top-0 bottom-0 right-[300px]  text-white ">
                <div className=" flex-1 flex flex-col justify-center gap-10">
                  <p className="font-grotesk text-[12pt] leading-tight max-w-[300px]">
                    Bird banding is one of the oldest and most important
                    techniques used for studying and identifying individual
                    birds.
                  </p>
                  <motion.p
                    className="max-w-[600px] text-5xl leading-tight  text-white font-Eiko -indent-5"
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
                    “In order to identify and keep track of individual birds,
                    scientists put aluminum or colored bands on birds’ legs.”
                  </motion.p>
                </div>
                <motion.p
                  className="py-12 text-xl justify-end   text-white  font-pitch"
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
                className="ml-40 mb-[45px] max-w-[600px] text-3xl leading-10  text-[#123CA8] font-Eiko"
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
