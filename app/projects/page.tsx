"use client";
import React from "react";
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section
      className="-mt-10  max-w-[20rem] md:max-w-[60rem] md:mt-20 md:m-auto 2xl:mt-44"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
    >
      <div className="grid  mb-10  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {projectsData.map((project, index) => (
          <div key={index}>
            <Project {...project} />
          </div>
        ))}
      </div>
    </motion.section>
  );
}

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, projecturl }: ProjectProps) {
  return (
    <div>
      <a
        href={projecturl}
        className="bg-neutral-950 text-neutral-40  inline-block  px-4 py-2 items-center justify-center rounded-lg outline-none focus:scale-110 hover:scale-110 hover:text-neutral-200 active:scale-105 transition cursor-pointer"
      >
        {title}
      </a>
      <p className="text-neutral-300 mt-4 font-light text-sm">{description}</p>
      <p className="text-neutral-400 mt-2 font-light text-xs">{tags}</p>
    </div>
  );
}
