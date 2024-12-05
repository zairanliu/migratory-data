"use client";

import Link from "next/link";
import useSyncInteractives from "@/hooks/useSyncInteractives";
import { motion } from "motion/react";

export default function about() {
  useSyncInteractives();

  return (
    <section className=" bg-themeblue w-screen  text-white">
      <div className=" flex items-center justify-center p-20">
        <div className="font-grotesk">about</div>
      </div>

      <div className="flex flex-row w-screen mx-40 gap-40">
        <div className="max-w-[500px]">
          <p className="font-grotesk text-lg">
            This project draws parallels between bird tracking and user tracking
            in digital spaces, comparing how researchers tag birds with physical
            bands as websites track users through digital cookies and device ID,
            and how birds migrate along specific routes to how users navigate
            across websites.
          </p>
          <p className="font-grotesk text-lg mt-5">
            Through my ten plates reinterpreting John James Audubon's original
            drawings, I examine several ideas that intrigue me: seeing birds as
            both living organisms and data points, the growing dependence on
            digital tools for birdwatching, and the ethical considerations
            surrounding database construction. This project sits at the
            intersection of these themes.
          </p>
        </div>
        <motion.video
          autoPlay
          playsInline
          muted
          loop
          className="w-[600px] object-cover "
          style={{
            animation: "grayOut 4s ease-out 4s forwards",
          }}
        >
          <source
            src="https://asset.togusj.com/intro.mp4"
            type="video/mp4"
          ></source>
        </motion.video>
      </div>
      <div className=" flex items-center justify-center mt-20">
        <div className="font-grotesk">10 plates</div>
      </div>
      <div className="grid grid-cols-4 grid-rows-3 gap-4 mt-20">
        {/* Row 1 */}
        <div className="aspect-square bg-gray-700 rounded-lg">
          <img
            src="/api/placeholder/300/300"
            alt="Grid image 1"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="aspect-square bg-gray-700 rounded-lg">
          <img
            src="/api/placeholder/300/300"
            alt="Grid image 2"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="aspect-square bg-gray-700 rounded-lg">
          <img
            src="/api/placeholder/300/300"
            alt="Grid image 3"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="aspect-square" />

        {/* Row 2 */}
        <div className="aspect-square" />
        <div className="aspect-square bg-gray-700 rounded-lg">
          <img
            src="/api/placeholder/300/300"
            alt="Grid image 5"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="aspect-square bg-gray-700 rounded-lg">
          <img
            src="/api/placeholder/300/300"
            alt="Grid image 6"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="aspect-square bg-gray-700 rounded-lg">
          <img
            src="/api/placeholder/300/300"
            alt="Grid image 7"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Row 3 */}
        <div className="aspect-square bg-gray-700 rounded-lg">
          <img
            src="/api/placeholder/300/300"
            alt="Grid image 8"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="aspect-square bg-gray-700 rounded-lg">
          <img
            src="/api/placeholder/300/300"
            alt="Grid image 9"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="aspect-square bg-gray-700 rounded-lg">
          <img
            src="/api/placeholder/300/300"
            alt="Grid image 10"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="aspect-square bg-gray-700 rounded-lg">
          <img
            src="/api/placeholder/300/300"
            alt="Grid image 11"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
