"use client";

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
import TransitionLink from "@/components/TransitionLink";

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

  return (
    <ReactLenis root>
      {/* This div is the scrolling area */}
      <div ref={targetRef} className="relative h-[300vh]">
        <main className="fixed top-0">
          <TransitionLink
            className="fixed top-12 left-20  block z-10 font-serif"
            href="/"
          >
            <div className="italic text-6xl  text-blue-900">
              Banding — Tagging
            </div>
          </TransitionLink>

          {/* This div is the scrolling content */}
          <motion.div style={{ x }} className="flex">
            <section className="w-screen flex">
              <video
                autoPlay
                playsInline
                muted
                loop
                className="w-3/5 h-screen object-cover bg-gray-200"
              >
                <source
                  src="https://asset.togusj.com/banding.mp4"
                  type="video/mp4"
                ></source>
              </video>
              <div className="flex flex-col justify-between">
                <div className="ml-8 flex-1 flex flex-col justify-center gap-10">
                  <motion.p
                    className="max-w-[500px] text-3xl leading-10 text-blue-900 font-Eiko"
                    initial={{ opacity: 0 }}
                    animate={{
                      y: [100, 0],
                      opacity: 1,
                      transition: { ease: "easeInOut", duration: 0.5 },
                    }}
                  >
                    In order to identify and keep track of individual birds,
                    scientists put aluminum or colored bands on birds’ legs.
                    Similar to the license plate on a car, each aluminum band is
                    engraved with a unique set of numbers.
                  </motion.p>
                </div>

                <motion.p
                  className="pl-8 py-12 text-xl justify-end text-blue-900 font-pitch"
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}
                >
                  scroll to continue
                </motion.p>
              </div>
            </section>

            <section className="w-screen flex py-40 items-end">
              <motion.p
                className="ml-40 max-w-[500px] text-3xl leading-10 text-blue-900 font-Eiko"
                initial={{ opacity: 0 }}
                animate={{
                  y: [100, 0],
                  opacity: 1,
                  transition: { ease: "easeInOut", duration: 0.5 },
                }}
              >
                Bird banding is one of the oldest and most important techniques
                used for studying and identifying individual birds. In the early
                1800s, John James Audubon tied threads to birds’ legs to
                identify individuals that were visiting his farm. In 1902, the
                first scientific study to use bird banding took place in the
                United States: Smithsonian scientists attached bands to the legs
                of black-crowned night herons at the Smithsonian’s National Zoo
                in Washington, D.C.
                <span className="font-pitch block mt-8 text-[14px]">
                  Smithsonian’s National Zoo and<br></br> Conservation Biology
                  Institute
                </span>
              </motion.p>
            </section>
          </motion.div>
        </main>
      </div>
    </ReactLenis>
  );
}
