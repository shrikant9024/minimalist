"use client";

import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  const fadeInAnimation = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.04,
      },
    }),
  };
  return (
    <section className=" -mt-[26rem]">
      <motion.p
        className=""
        variants={fadeInAnimation}
        initial="initial"
        whileInView="animate"
      >
        Reach me at{" "}
        <a className="underline" href="mailto:shrikantr9024@gmail.com">
          shrikantr9024@gmail.com,
        </a>{" "}
        let`s build together.
      </motion.p>
    </section>
  );
}

export default Contact;
