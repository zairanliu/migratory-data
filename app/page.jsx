"use client";

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
        <motion.h1
          className="text-blue-900 text-8xl"
          initial={{
            scale: 1,
          }}
          animate={{
            scale: 2,
          }}
          transition={{ ease: "easeInOut", duration: 3, delay: 3 }}
        >
          Migratory Data
        </motion.h1>

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
        style={{
          animation: "grayOut 4s ease-out 4s forwards",
          clipPath: 'url("#myClip")',
        }}
      >
        <source
          src="https://asset.togusj.com/intro-birds-color.mp4"
          type="video/mp4"
        ></source>
      </video>

      <svg width="100%" height="100%" className="absolute inset-0 -z-10">
        <defs>
          <clipPath id="myClip">
            <circle cx="35%" cy="50%" r="25%">
              <animate
                attributeName="cx"
                values="35%; 65%;"
                dur="2s"
                begin="1s"
                fill="freeze"
                calcMode="spline"
                keySplines=".42 0 .58 1"
              />
              <animate
                attributeName="r"
                values="25%; 100%;"
                dur="3s"
                begin="3s"
                fill="freeze"
                calcMode="spline"
                keySplines=".42 0 .58 1"
              />
            </circle>
            <circle cx="65%" cy="50%" r="25%">
              <animate
                attributeName="cx"
                values="65%; 35%;"
                dur="2s"
                begin="1s"
                fill="freeze"
                calcMode="spline"
                keySplines=".42 0 .58 1"
              />
              <animate
                attributeName="r"
                values="25%; 100%;"
                dur="3s"
                begin="3s"
                fill="freeze"
                calcMode="spline"
                keySplines=".42 0 .58 1"
              />
            </circle>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
