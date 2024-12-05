"use client";

import { useRef } from "react";
import useChannel from "@/hooks/useChannel";
import { motion, useTransform, useScroll } from "motion/react";

export default function ChapterThreeStat() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  useChannel((message) => {
    if (message.type === "scroll") {
      window.scrollTo(
        0,
        message.value *
          (document.body.scrollHeight - document.documentElement.clientHeight)
      );
    }
  });

  return (
    <div ref={targetRef} className="relative h-[400vh] font-mono text-base">
      <main className="fixed top-0">
        <div className="w-screen h-screen fixed z-10 flex items-center justify-center">
          <span>mouse move detected</span>
        </div>

        {/* This div is the scrolling content */}
        <motion.div style={{ x }} className="flex">
          <section className="w-screen flex">
            <div className="w-[100vw] h-screen p-8 bg-[#fe6c00]">
              <p>&lt;video src="../video/bird-flocking.mp4" &gt;</p>
              <p>&lt;p&gt;...&lt;/p&gt;</p>
            </div>
          </section>
          <section className="w-screen h-screen font-mono text-base p-8 flex">
            <div className="flex w-screen justify-between">
              <pre>
                <p>&lt;p&gt;...&lt;/p&gt;</p>
              </pre>
              <pre>
                <p>&lt;canvas&gt;canvas.draw&lt;/canvas&gt;</p>
                {/* <p>&lt;p&gt;Indigo-Bunting.webp&lt;/p&gt;</p>
                  <p>&lt;p&gt;Veery.webp&lt;/p&gt;</p> */}
              </pre>
            </div>
          </section>
        </motion.div>
      </main>
    </div>
  );
}
