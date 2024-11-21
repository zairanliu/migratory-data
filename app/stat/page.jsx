"use client";

import { useRef } from "react";
import useSocket from "@/hooks/useSocket";
import { motion, useTransform, useScroll } from "motion/react";
import { ReactLenis } from "lenis/react";

export default function ChapterOne() {
  const mouseRef = useRef(null);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  useSocket((message) => {
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
      <div ref={targetRef} className="relative h-[300vh]">
        <main className="fixed top-0">
          <div
            className="fixed z-10 w-[200px] h-[300px] bg-white border border-solid border-orange-600 transition-transform duration-1000"
            ref={mouseRef}
          >
            <p className="p-2 font-pitch">
              <span className="text-sm">current user cookie</span>
              <br />
              <br />
              <br />
              user-id: 01254
              <br />
              device: Macintosh, M2, Sequoia 15.1
              <br />
              browser: chrome
              <br />
              expires=Thu, 07-Dec-2025 12:00:00 GMT
            </p>
          </div>
          {/* This div is the scrolling content */}
          <motion.div style={{ x }} className="flex">
            <section className="w-screen flex">
              <div className="w-3/5 h-screen object-cover bg-orange-600 flex items-center justify-center text-xl text-white font-pitch">
                ../video/bird-banding-1080p.mp4
              </div>

              <div className=" text-orange-600 font-pitch pl-10 pt-10 text-[14px]">
                <div>
                  <motion.p
                    className="absolute -z-10 text-4xl pl-[150px] font-pitchSans p-5 text-black"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                    }}
                    transition={{ duration: 0.8, delay: 6, ease: "linear" }}
                  >
                    Subsequent Requests (Browser {"->"} Server)
                  </motion.p>
                  GET / HTTP/1.1 <br />
                  Cookie: session_data=uid:01254;
                  <br />
                  ts:1707682406;
                  <br />
                  os:mac;br:chr15.1;px:0;
                  <br />
                  exp:1731571200 <br />
                </div>
                <div>
                  <motion.p
                    className="absolute -z-10 text-4xl pl-[200px] font-pitchSans p-5 text-black"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                    }}
                    transition={{ duration: 0.8, delay: 5, ease: "linear" }}
                  >
                    Physical Storage (cookie.txt)
                  </motion.p>
                  user-id: 01254 <br />
                  login: 11/02/2024 15:33:26 EST <br />
                  device detection: Macintosh, chrome 15.1 <br />
                  Proxy: N/A <br />
                  cookie expires = Thu, 14-Nov-2024 12:00:00 GMT <br />
                </div>
                <div>
                  <motion.p
                    className="absolute -z-10 text-4xl pl-[200px] font-pitchSans p-5 text-black"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                    }}
                    transition={{ duration: 0.8, delay: 10, ease: "linear" }}
                  >
                    Cookie Stored in Browser
                  </motion.p>
                  Name: session_data <br />
                  Value: uid:01254; <br />
                  ts:1707682406; <br />
                  os:mac;br:chr15.1;
                  <br />
                  px:0;exp:1731571200 <br />
                  Domain:.migratorydata.com <br />
                  Expires: Thu, 14-Nov-2024 12:00:00 GMT
                  <br />
                </div>
                <div>
                  <motion.p
                    className="absolute -z-10 text-4xl pl-[200px] font-pitchSans p-5 text-black"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                    }}
                    transition={{ duration: 0.8, delay: 8, ease: "linear" }}
                  >
                    Server Sets Cookie
                  </motion.p>
                  HTTP/1.1 200{" "}
                  <span className="underline decoration-orange-600 underline-offset-4">
                    OK{" "}
                  </span>
                  <br />
                  Set-Cookie: <br />
                  session_data=uid:01254; <br />
                  ts:1707682406;os:mac; <br />
                  br:chr15.1;px:0;
                  <br />
                  exp:1731571200;
                  <br />
                  path=/; <br />
                  domain=.migratorydata.com <br />
                </div>
                <div>
                  <motion.p
                    className="absolute -z-10 text-4xl pl-[200px] font-pitchSans p-5 text-black"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                    }}
                    transition={{ duration: 0.8, delay: 6, ease: "linear" }}
                  >
                    Server Detection <br /> and Cookie Creation
                  </motion.p>
                  Time detected:
                  <br />
                  15:33:26 EST <br />
                  Device detected: Macintosh <br />
                  Browser detected: Chrome 15.1 <br />
                  Proxy check: N/A <br />
                  Generated user-id: 01254 <br />
                </div>
                <div>
                  <motion.p
                    className="absolute -z-10 text-4xl font-pitchSans pl-[200px] text-black"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                    }}
                    transition={{ duration: 0.8, delay: 4, ease: "linear" }}
                  >
                    Initial User Visit <br /> and Detection
                  </motion.p>
                  Browser Request {"->"} Server
                  <br />
                  GET / HTTP/1.1
                  <br />
                  User-Agent: Mozilla/5.0 (Macintosh) Chrome/15.1
                </div>
              </div>
            </section>
          </motion.div>
        </main>
      </div>
    </ReactLenis>
  );
}
