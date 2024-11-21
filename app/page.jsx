"use client";

import { useEffect } from "react";
import { socket } from "@/services/socket";
import { motion } from "motion/react";
import TransitionLink from "@/components/TransitionLink";

export default function Home() {
  return (
    <div className="w-fit mx-auto min-h-screen flex flex-col items-start justify-center">
      <motion.main
        className="flex flex-col gap-8 row-start-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <h1 className="text-[144px] text-blue-900">Migratory Data</h1>
       
          <TransitionLink
            className="flex items-center  mx-auto text-3xl transition-colors font-pitch text-blue-900 hover:underline decoration-1 underline-offset-4"
            href="/chapter-one"
          >
            Launch story
          </TransitionLink>
         
      </motion.main>
      <video
                autoPlay
                playsInline
                muted
                loop
                className="absolute -z-10 w-screen h-screen object-cover inset-0"
              >
                <source
                  src="https://asset.togusj.com/intro.mov"
                  type="video/mp4"
                ></source>
              </video>
    </div>
  );
}
