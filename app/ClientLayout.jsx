"use client";

import PageTransitionEffect from "@/components/PageTransitionEffect";
import MobileMessage from "./MobileMessage";
import useIsMobile from "@/hooks/useIsMobile";

export default function RootClientLayout({ children }) {
  const isMobile = useIsMobile();

  return isMobile ? (
    // Display Mobile Message
    <MobileMessage />
  ) : (
    // PC View
    <PageTransitionEffect>{children}</PageTransitionEffect>
  );
}
