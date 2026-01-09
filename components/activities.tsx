"use client";

import React from "react";
import Image from "next/image";

import SectionHeading from "./section-heading";

import { FaLocationDot, FaMedal, FaCalendarDays } from "react-icons/fa6";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { activityData, hackathonData } from "@/lib/data";
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

function ImageCarousel({
  imgs,
  altPrefix = "",
}: {
  imgs: string[];
  altPrefix?: string;
}) {
  const [idx, setIdx] = React.useState(0);
  const prev = () => setIdx((i) => (i - 1 + imgs.length) % imgs.length);
  const next = () => setIdx((i) => (i + 1) % imgs.length);

  return (
    <div className="relative w-full aspect-video">
      {imgs.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 50 }}
          animate={i === idx ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.35 }}
          className={`${i === idx ? "block" : "hidden"} absolute inset-0`}
        >
          <div className="relative w-full h-full rounded-md overflow-hidden">
            <Image
              src={img}
              alt={`${altPrefix} image ${i + 1}`}
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>
      ))}

      <button
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/40 rounded-full p-1 shadow-md hover:bg-white dark:hover:bg-black"
      >
        <HiChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={next}
        aria-label="Next image"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/40 rounded-full p-1 shadow-md hover:bg-white dark:hover:bg-black"
      >
        <HiChevronRight className="h-4 w-4" />
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {imgs.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-2 h-2 rounded-full ${
              i === idx ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Activities() {
  const { ref } = useSectionInView("Activities");
  const { theme } = useTheme();

  return (
    <section id="activities" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Hackathons</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {hackathonData.map((item, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 pt-3 pb-5 dark:bg-white/10 dark:text-white/80 list-none w-full mb-10 flex flex-col"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            key={index}
            custom={index}
          >
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold mb-1">{item.title}</h3>

              <div className="flex flex-row items-center gap-2">
                <FaMedal />
                <span>{item.pos}</span>
              </div>

              <div className="flex flex-row items-center gap-2 text-gray-400">
                <FaLocationDot/>
                <span>{item.loc}</span> •
                <span>{item.date}</span>
              </div>


            </div>

            <div className="mt-5 w-full h-full">
              <ImageCarousel imgs={item.imgs} altPrefix={item.title} />
            </div>
          </motion.li>
        ))}
      </ul>

        <div className="scroll-mt-28 mb-28 sm:mb-40" />

      <SectionHeading>Activities</SectionHeading>

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
