"use client";
import { useEffect, useRef } from "react";
import { motion, useTransform, useScroll } from "motion/react";
import { ReactLenis } from "lenis/react";
import TransitionLink from "@/components/TransitionLink";

export default function ChapterOne() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <ReactLenis root>
      {/* This div is the scrolling area */}
      <div ref={targetRef} className="relative h-[300vh]">
        <main className="fixed top-0">
          <TransitionLink
            className="fixed top-12 left-20 text-4xl block z-10 font-serif"
            href="/"
          >
            <div className="italic">Chapter 1</div>
            <div className="font-bold">Banding - Tagging</div>
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
                  <p className="max-w-[500px] text-2xl">
                    This website uses cookies to create a secure and effective
                    browsing experience and to understand how you use our site.
                  </p>
                  <p className="text-2xl flex items-center gap-2">
                    <span className="h-6 w-6 border border-black rounded-full"></span>
                    understand and proceed
                  </p>
                </div>

                <motion.p
                  className="pl-8 py-12 text-xl justify-end text-gray-800"
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}
                >
                  scroll to continue {"->"}
                </motion.p>
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
