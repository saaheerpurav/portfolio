"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Currently in my second year of pursuing a bachelor's degree in  <span className="font-medium">Computer Science</span>. <br />
        <div style={{height: 10}} />
        Dedicated and versatile <span className="font-medium">Full Stack Developer</span> with expertise in creating&nbsp;
        <span className="font-medium">web, desktop, and mobile</span> applications.
        Proficient in a wide range of technologies and frameworks, with a proven track record of delivering&nbsp;
        <span className="font-medium">high quality software</span> solutions and <span className="font-medium">only positive reviews</span>.<br />
        <div style={{height: 10}} />
        Committed to continuous learning and staying updated with the latest industry trends.
      </p>
    </motion.section>
  );
}
