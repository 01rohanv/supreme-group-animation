"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const SectionAnimated = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const passengerOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const commercialOpacity = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative bg-black text-white w-full overflow-x-hidden"
    >
      <div className="h-[400vh] font-manrope relative">
        {/* Fullscreen Centered Hero Title */}
        <div className="h-screen flex items-center justify-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-light leading-tight"
          >
            Evolving the drive with{" "}
            <span className="font-bold">360-degree</span>
            <br />
            nonwoven solutions
          </motion.h2>
        </div>

        <motion.div
          style={{ opacity: passengerOpacity }}
          className="sticky top-28 h-screen flex flex-col md:flex-row items-center justify-between px-10 z-30"
        >
          <div className="max-w-xl">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Passenger vehicles
            </h3>
            <p className="text-lg mt-2 text-gray-400">
              Revving up innovation from interior to exterior.
            </p>
          </div>
          <video
            className="w-full max-w-xl"
            src="/Passenger Alpha.bc06b347f5b526ad9a60.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </motion.div>

        <motion.div
          style={{ opacity: commercialOpacity }}
          className="sticky top-28 h-screen flex flex-col md:flex-row items-center justify-between px-10 z-20"
        >
          <div className="max-w-xl">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Commercial vehicles
            </h3>
            <p className="text-lg mt-2 text-gray-400">
              Advancing engineering for heavy-duty vehicles.
            </p>
          </div>
          <video
            className="w-full max-w-xl"
            src="/Commercial Alpha.92c92d40f9116c837d1d.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SectionAnimated;
