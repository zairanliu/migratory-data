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
import AnimationWhiteOut from "@/components/AnimationWhiteOut";
import useSyncInteractives from "@/hooks/useSyncInteractives";
import FlockingSimulation from "./FlockingSimulation";

export default function ChapterThree() {
  useSyncInteractives();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const largeTextOffset = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  const messageChannel = useChannel();

  useMotionValueEvent(
    scrollYProgress,
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

  return (
    <ReactLenis root>
      {/* This div is the scrolling area */}
      <div ref={targetRef} className="h-[400vh]">
        <main className="fixed top-0">
          {/* This div is the scrolling content */}
          <motion.div
            style={{ x }}
            className="h-screen flex bg-themeblue text-white"
          >
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
                  in countless variations
                </motion.div>
                <div className="font-grotesk normal max-w-[250px] text-base mt-[10px]">
                  Birds flock together for several compelling reasons: safety in
                  numbers against predators, improved foraging efficiency as
                  many eyes spot food sources, and enhanced navigation during
                  migration as experienced birds guide the group.
                </div>
                <motion.div
                  className=" mt-[300px] self-end italic"
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

            <section className="w-[100vw] h-screen relative">
              <FlockingSimulation />
            </section>
          </motion.div>
        </main>
      </div>
    </ReactLenis>
  );
}
