"use client";
import React from "react";
import { skillsData } from "@/lib/data";
import { animate, delay, motion } from "framer-motion";
import { Anuphan } from "next/font/google";

const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.02 * index,
    },
  }),
};
export default function page() {
  return (
    <section>
      <div className="max-w-[53rem] -mt-28">
        <ul className="flex flex-wrap justify-center gap-2 text-s  text-neutral-400 ">
          {skillsData.map((skill, index) => (
            <motion.li
              className="rounded-full  border border-black/[0.1] px-5 py-3 shadow-md"
              key={index}
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
