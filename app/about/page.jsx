"use client";

import Link from "next/link";
import useSyncInteractives from "@/hooks/useSyncInteractives";
import { motion } from "motion/react";

export default function about() {
  useSyncInteractives();

  return (
    <section className=" bg-themeblue w-screen h-screen text-white">
      <div className=" flex items-center justify-center p-20">
        <p className="font-grotesk">about</p>
      </div>
    </section>
  );
}
