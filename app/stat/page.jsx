"use client";

import { useRef } from "react";
import useChannel from "@/hooks/useChannel";
import { motion, useTransform, useScroll } from "motion/react";
import { ReactLenis } from "lenis/react";

export default function ChapterOne() {
  const mouseRef = useRef(null);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  useChannel((message) => {
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
      <div ref={targetRef} className="relative h-[300vh] font-mono text-base">
        <main className="fixed top-0">
          <div
            className="fixed z-10 w-[200px] h-[80px] bg-white border border-solid border-[#fe6c00]"
            ref={mouseRef}
          >
            <p className="p-2 ">
              Date
              <br />
              Time
            </p>
          </div>

          {/* This div is the scrolling content */}
          <motion.div style={{ x }} className="flex">
            <section className="w-screen flex">
              <div className="w-screen h-screen absolute flex items-center justify-center">
                mouse move detected
              </div>
              <div className="font-mono w-[40vw] p-8">
                <pre>
                  <p>&lt;p&gt;Bird Banding&lt;/p&gt;</p>
                  <p>&lt;p&gt;...&lt;/p&gt;</p>
                  <p>&lt;p&gt;...&lt;/p&gt;</p>
                </pre>
              </div>

              <div className="w-screen object-cover bg-[#fe6c00] flex items-center justify-center"></div>

              <div className=" text-[#fe6c00] pl-10 pt-10 text-[14px]">
                <div>
                  <motion.p
                    className="absolute -z-10 text-4xl pl-[150px] font-pitchSans p-5 text-black"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                    }}
                    transition={{ duration: 0.8, delay: 14, ease: "linear" }}
                  >
                    Subsequent Requests
                    <br /> (Browser {"->"} Server)
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
                <div className="-z-10 text-4xl pl-[150px] font-pitchSans p-5 text-black absolute">
                  <motion.p
                    className="absolute"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                    }}
                    transition={{ duration: 0.8, delay: 12, ease: "linear" }}
                  >
                    Physical Storage (cookie.txt)
                  </motion.p>
                  <motion.p
                    className="absolute"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                    }}
                    transition={{ duration: 0.8, delay: 10, ease: "linear" }}
                  >
                    Cookie Stored in Browser
                  </motion.p>
                  <motion.p
                    className="absolute"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                    }}
                    transition={{ duration: 0.8, delay: 8, ease: "linear" }}
                  >
                    Server Sets Cookie
                  </motion.p>
                  <motion.p
                    className="absolute"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                    }}
                    transition={{ duration: 0.8, delay: 6, ease: "linear" }}
                  >
                    Server Detection <br /> and Cookie Creation
                  </motion.p>
                  <motion.p
                    className="absolute"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                    }}
                    transition={{ duration: 0.8, delay: 4, ease: "linear" }}
                  >
                    Initial User Visit <br /> and Detection
                  </motion.p>
                  <motion.p
                    className="absolute"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                    }}
                    transition={{ duration: 0.8, delay: 18, ease: "linear" }}
                  >
                    IP Analysis
                  </motion.p>
                </div>
                <div>
                  user-id: 01254 <br />
                  login: 11/02/2024 15:33:26 EST <br />
                  device detection: Macintosh, chrome 15.1 <br />
                  Proxy: N/A <br />
                  cookie expires = Thu, 14-Nov-2024 12:00:00 GMT <br />
                  Name: session_data <br />
                  Value: uid:01254; <br />
                  ts:1707682406; <br />
                  os:mac;br:chr15.1;
                  <br />
                  px:0;exp:1731571200 <br />
                  Domain:.migratorydata.com <br />
                  Expires: Thu, 14-Nov-2024 12:00:00 GMT
                  <br />
                  HTTP/1.1 200{" "}
                  <span className="underline decoration-[#fe6c00] underline-offset-4">
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
                  Time detected:
                  <br />
                  15:33:26 EST <br />
                  Device detected: Macintosh <br />
                  Browser detected: Chrome 15.1 <br />
                  Proxy check: N/A <br />
                  Generated user-id: 01254 <br />
                  Browser Request {"->"} Server
                  <br />
                  GET / HTTP/1.1
                  <br />
                  User-Agent: Mozilla/5.0 (Macintosh) Chrome/15.1
                </div>
              </div>
              <motion.p
                className="h-screen pb-10 flex items-end font-pitch text-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 16 }}
              >
                User IP Detected: <br />
                68.229.79.117
                <br />
                Decimal: 1155878773
                <br />
                Hostname:ip68-229-79-117.ri.ri.cox.net
                <br />
                ASN:22773 ISP:Cox Communications LLC
                <br />
                Services:None detected
                <br />
                Country:United States State
                <br />
                Region:Rhode Island
                <br />
                City:Providence Latitude:41.8238 
                <br />
                (41° 49′ 25.80″ N) Longitude:-71.4127 
                <br />
                (71° 24′ 45.71″ W)
                <br />
              </motion.p>
            </section>
          </motion.div>
        </main>
      </div>
    </ReactLenis>
  );
}
