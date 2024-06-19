import React from "react";
import { CgWorkAlt } from "react-icons/cg";

import fyldrop from "@/public/fyldrop.png";
import polartrace from "@/public/polartrace.png";
import chat from "@/public/chat.png";
import eduly from "@/public/eduly.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Freelancer at Fiverr",
    location: "Remote",
    description: "Built and sold custom desktop applications to clients from the United States, France, United Kingdom and Poland for Windows, MacOS and Linux operating systems.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Current",
  }
] as const;

export const projectsData = [
  {
    title: "FylDrop",
    url: "https://fyldrop.com",
    description: "Built a desktop app to share files to any device connected on a local network wirelessly, simply by scanning a QR code",
    tags: ["React", "Electron", "Express", "Firebase", "Paypal"],
    imageUrl: fyldrop,
  },
  {
    title: "PolarTrace",
    url: "https://www.polartrace.com",
    description: "Built a PDF comparison tool to compare PDF documents side-by-side instantly, highlighting the created, deleted and modified lines.",
    tags: ["Flask", "Python", "React", "Firebase", "Vercel"],
    imageUrl: polartrace,
  },
  {
    title: "Realtime Chat",
    url: "https://realtime-web-chat.glitch.me",
    description: "Built a real-time web chat application that enables seamless communication among users in chat rooms.",
    tags: ["Flask", "Python", "MySQL", "Socket.IO", "HTML", "CSS"],
    imageUrl: chat,
  },
  {
    title: "EduLy",
    url: "https://github.com/saaheerpurav/school-management",
    description: "Developed a school management app that facilitates communication and cooperation between a school administrator and teachers",
    tags: ["Flutter", "Dart", "Firebase", "Android"],
    imageUrl: eduly,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MySQL",
  "PostgreSQL",
  "Firebase",
  "Express",
  "Electron",
  "Python",
  "OpenCV",
  "Selenium",
  "Pandas",
  "Flask",
  "Dart",
  "Flutter",
  "Framer Motion",
] as const;