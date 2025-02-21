"use client";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <motion.section
      className="  -mt-[20rem] max-w-[75rem]   "
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
    >
      <div className="flex flex-col items-center sm:flex-row sm:items-start justify-center sm:justify-start text-center sm:text-left ">
        <div className="sm:absolute items-center justify-center sm:-mt-12   2xl:left-[32rem] 2xl:-mt-12  md:absolute md:left-[20rem] md:top-[16rem] text-center">
          <Image
            src="/images/ls.png"
            alt="batman"
            width="300"
            height="300"
            quality="95"
            priority={true}
            className="h-36 w-36 object-cover rounded-full mx-auto"
          />
          <p className="indent-0 pt-6 text-3xl font-reenie-beanie">
            Shrikant Ramani
          </p>
          <p className="mt-2 -indent-4 font-light text-sm md:mx-8 md:mb-2">
            Fullstack Developer
          </p>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/shrikantramani/"
              target="_blank"
              className="p-4 text-white flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110  active:scake-105 transiton cursor-pointer"
            >
              <FontAwesomeIcon className="text-xl" icon={faLinkedinIn} />
            </a>
            <a
              href="https://github.com/shrikant9024"
              className="p-4 text-white flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110  active:scake-105 transiton cursor-pointer"
            >
              <FontAwesomeIcon className="text-xl" icon={faGithub} />
            </a>
            <a
              href="https://x.com/shrikantramani"
              className="p-4 text-white flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110  active:scake-105 transiton cursor-pointer"
            >
              <FontAwesomeIcon className="text-xl" icon={faXTwitter} />
            </a>
          </div>
        </div>

        <p></p>
      </div>
      <div className="text-center max-w-[400rem]  ">
        <p className="mb-2 px-4 pt-4 text-[1rem] font-light 3xl:text-yellow-900  md:mt-24 md:indent-[20rem]">
          Turning visions into reality through code, I thrive on building
          impactful and scalable applications.
        </p>
      </div>

      <div
        className="absolute mt-10 left-1/3 flex flex-col sm:flex-row items-start gap-2 px-4 2xl:left-[45rem]"

        // className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 py-10"
      >
        <a
          className="group bg-neutral-500 text-neutral-950 px-4 py-2 flex items-center justify-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer md:mx-20"
          href="/CV.pdf"
          download
        >
          Resume
          <HiDownload className="w-4 h-4" /> {/* Adjust size here */}
        </a>

        {/* /// */}
      </div>
    </motion.section>
  );
}
