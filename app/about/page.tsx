"use client";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] mt-14 flex flex-col text-left leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
    >
      <p>
        I'm <span className="font-semibold">Shrikant Ramani</span>, a passionate
        full-stack developer specializing in the{" "}
        <span className="font-semibold">MERN</span> stack.
        <br />
        <span>
          Graduated in Information Technology from Gl Bajaj Institute of
          Technology and Management, Greater Noida.
        </span>{" "}
        I excel in creating scalable applications, combining technical expertise
        with a strong commitment to innovation in every project I tackle.
        <br />
        <br />
        🌟 Currently, I'm on the lookout for new software development
        opportunities to leverage my skills and further my professional growth.
      </p>
      <br />
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, listening to music, watching psychological thriller and
        crime-based TV shows, and driving cars. I also enjoy{" "}
        <span className="font-medium">learning new things </span>.
        <span>
          {" "}
          In case you want to share a Spotify playlist
          <a
            href="https://open.spotify.com/user/smf3syz1xuvwhxymk5vvgp2gd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            Click here
            <FontAwesomeIcon
              className="h-8 w-8 cursor-pointer"
              icon={faSpotify}
            />
          </a>
        </span>
      </p>
    </motion.section>
  );
}
