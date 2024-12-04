import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useUserAgent from "@/hooks/useUserAgent";

export default function LoopedUserAgent() {
  const userAgentInfo = useUserAgent();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (userAgentInfo.length === 0) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % userAgentInfo.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [userAgentInfo.length]);

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {userAgentInfo[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
