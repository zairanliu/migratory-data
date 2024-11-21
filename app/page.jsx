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
        <h1 className="text-5xl text-blue-900">Migatory Data</h1>


        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <TransitionLink
            className="flex items-center rounded-full transition-colors bg-foreground text-background hover:bg-[#ccc] h-12 px-5"
            href="/chapter-one"
          >
            Launch story
          </TransitionLink>

          <video
                autoPlay
                playsInline
                muted
                loop
                className="absolute object-cover -z-10"
              >
                <source
                  src="https://asset.togusj.com/banding.mp4"
                  type="video/mp4"
                ></source>
              </video>

        </div>
      </motion.main>
    </div>
  );
}
