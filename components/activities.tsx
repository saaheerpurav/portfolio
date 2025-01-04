"use client";

import React from "react";
import Image from "next/image";

import SectionHeading from "./section-heading";

import { FaLocationDot } from "react-icons/fa6";
import { CgWorkAlt } from "react-icons/cg";

import { activityData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Activities() {
  const { ref } = useSectionInView("Activities");
  const { theme } = useTheme();

  return (
    <section id="activities" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Activites</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {activityData.map((item, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 list-none w-full mb-2 flex flex-row items-center"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            key={index}
            custom={index}
          >
            <Image
              src={item.img}
              alt="Saaheer portrait"
              width="56"
              height="56"
              quality="95"
              priority={true}
              className="h-14 w-14 rounded-full object-cover shadow-xl"
            />
            <div className="flex flex-col ml-5">
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <span>{item.club}</span>
              <span className="text-gray-400">{item.start}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
