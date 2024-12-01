"use client";

import { useRef } from "react";
import useChannel from "@/hooks/useChannel";
import { motion, useTransform, useScroll } from "motion/react";
import { ReactLenis } from "lenis/react";

export default function ChapterOne() {
  const mouseRef = useRef(null);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  useChannel((message) => {
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
      <div ref={targetRef} className="relative h-[300vh] font-mono text-base">
        <main className="fixed top-0">
          <div
            className="fixed z-10 bg-white border border-solid border-[#fe6c00]"
            ref={mouseRef}
          >
            <p className="p-2 ">
              12/01/2024
              <br />
              16:40:15
            </p>
          </div>

          <div className="w-screen h-screen fixed z-10 flex items-center justify-center">
            <span>mouse move detected</span>
            <span className="fixed left-8 bottom-8">dynamic cookie</span>
          </div>

          {/* This div is the scrolling content */}
          <motion.div style={{ x }} className="flex">
            <section className="w-screen flex">
              <div className="font-mono w-[40vw] p-8">
                <pre>
                  <p>&lt;p&gt;Bird Banding&lt;/p&gt;</p>
                  <p>&lt;p&gt;...&lt;/p&gt;</p>
                  <p>&lt;p&gt;...&lt;/p&gt;</p>
                </pre>
              </div>

              <div className="w-[100vw] h-screen p-8 bg-[#fe6c00]">
                <p>&lt;video src="../video/bird-banding-capture.mp4" &gt;</p>
                <p>&lt;p&gt;...&lt;/p&gt;</p>
              </div>
            </section>
            <section className="w-screen h-screen font-mono text-base p-8 flex">
              <div className="flex w-screen justify-between">
                <pre>
                  <p>&lt;img&gt;Eastern-Meadowlark.webp&lt;/img&gt;</p>
                  <p>&lt;img&gt;Indigo-Bunting.webp&lt;/img&gt;</p>
                  <p>&lt;img&gt;Veery.webp&lt;/img&gt;</p>
                </pre>
                <pre>
                  <p>&lt;p&gt;Eastern-Meadowlark.webp&lt;/p&gt;</p>
                  {/* <p>&lt;p&gt;Indigo-Bunting.webp&lt;/p&gt;</p>
                  <p>&lt;p&gt;Veery.webp&lt;/p&gt;</p> */}
                </pre>
              </div>
              <div className="absolute flex justify-around w-screen h-[75vh] flex-row gap-20 mt-[100px]  p-8">
                {" "}
                <div className="flex items-start ">
                  <img
                    src="https://asset.togusj.com/migratory-data/stat/image-frame.svg"
                    alt=""
                    className="w-full"
                  ></img>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://asset.togusj.com/migratory-data/stat/image-frame.svg"
                    alt=""
                    className="w-full"
                  ></img>
                </div>
                <div className="flex items-end">
                  <img
                    src="https://asset.togusj.com/migratory-data/stat/image-frame.svg"
                    alt=""
                    className="w-full"
                  ></img>
                </div>
              </div>
            </section>
            <section className="w-screen h-screen font-mono text-base bg-[#fe6c00] p-8 flex">
              <div className="flex flex-row w-screen justify-between text-left">
                <pre className="w-1/2 ">
                  <p>&lt;video src="../video/bird-banding-capture.mp4" &gt;</p>
                  <p>&lt;p&gt;...&lt;/p&gt;</p>
                </pre>
                <pre className="w-1/2 pl-8">
                  <p>&lt;video src="../video/bird-banding-capture.mp4" &gt;</p>
                  <p>&lt;p&gt;...&lt;/p&gt;</p>
                </pre>
              </div>
            </section>
            <section className="w-screen h-screen flex">
              <pre></pre>
            </section>{" "}
          </motion.div>
        </main>
      </div>
    </ReactLenis>
  );
}
