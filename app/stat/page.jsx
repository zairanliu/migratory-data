"use client";

import { useRef } from "react";
import useSocket from "@/hooks/useSocket";
import { motion, useTransform, useScroll } from "motion/react";
import { ReactLenis } from "lenis/react";

export default function ChapterOne() {
  const mouseRef = useRef(null);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  useSocket((message) => {
    if (message.type === "scroll") {
      window.scrollTo(0, message.value);
    }
    if (message.type === "mousemove") {
      if (mouseRef.current) {
        mouseRef.current.style.transform = `translate(${message.value.x}px, ${message.value.y}px)`;
      }
    }
  });

  return (
    <ReactLenis root>
      {/* This div is the scrolling area */}
      <div ref={targetRef} className="relative h-[300vh]">
        <main className="fixed top-0">
          <div
            className="fixed z-10 w-4 h-4 bg-black rounded-full transition-transform duration-1000"
            ref={mouseRef}
          ></div>
          {/* This div is the scrolling content */}
          <motion.div style={{ x }} className="flex">
            <section className="w-screen flex">
              <div className="w-3/5 h-screen object-cover bg-stone-300 flex items-center justify-center text-xl">
                ../video/bird-banding-1080p.mp4
              </div>
            </section>

            <section className="w-screen flex py-40 items-end">
              <motion.p className="ml-40 text-2xl font-serif max-w-[600px]">
                In order to identify and keep track of individual birds,
                scientists put aluminum or colored bands on birds’ legs. Similar
                to the license plate on a car, each aluminum band is engraved
                with a unique set of numbers. Bird banding is one of the oldest
                and most important techniques used for studying and identifying
                individual birds. In the early 1800s, John James Audubon tied
                threads to birds’ legs to identify individuals that were
                visiting his farm. In 1902, the first scientific study to use
                bird banding took place in the United States: Smithsonian
                scientists attached bands to the legs of black-crowned night
                herons at the Smithsonian’s National Zoo in Washington, D.C.
                <span className="block mt-8 text-sm">
                  Smithsonian’s National Zoo &<br></br> Conservation Biology
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
