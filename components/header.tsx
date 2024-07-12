"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("Home");
  const router = useRouter();

  // useEffect(() => {
  //   // Redirect to home if the current path is not home
  //   if (router.pathname !== "/") {
  //     router.replace("/");
  //   } else {
  //     // Find the link that matches the current path
  //     const currentLink = links.find((link) => link.href === router.pathname);
  //     if (currentLink) {
  //       setActiveSection(currentLink.name);
  //     }
  //   }
  // }, [router]);

  return (
    <motion.nav
      className="fixed top-[2rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-1/4 sm:h-[initial] sm:py-0 2xl:-mx-12 md:-mx-12"
      initial={{ opacity: 0, x: 100, y: 0 }}
      animate={{ opacity: 1, x: -160, y: 0 }}
      transition={{
        delay: 0.1,
      }}
    >
      <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-s text-neutral-400 sm:w-[initial] sm:flex-nowrap sm:gap-5">
        {links.map((link) => (
          <li
            className="h-3/4 flex items-center justify-center relative"
            key={link.href}
          >
            <Link
              className={clsx(
                "flex w-full items-center justify-center px-3 py-3 transition",
                { "text-gray-800": activeSection === link.name }
              )}
              href={link.href}
              onClick={() => setActiveSection(link.name)}
            >
              {link.name}
              {link.name === activeSection && (
                <motion.span
                  className="bg-neutral-300 rounded-lg absolute top-1 bottom-1 inset-0.5 -z-10"
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 700,
                    damping: 40,
                  }}
                ></motion.span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
