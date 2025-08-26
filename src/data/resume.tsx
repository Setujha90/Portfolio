import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { TbBrandLeetcode } from "react-icons/tb";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";

export const DATA = {
  name: "Setu Kumar",
  initials: "SK",
  url: "https://localhost:3000",
  location: "Kolkata, West Bengal",
  locationLink: "https://www.google.com/maps/place/Kolkata,+West+Bengal",
  description:
    "Relentless coder here to crush complex challenges and build epic solutions that dominate the tech game.",
  summary:
    "Eager software developer passionate about algorithms and problem-solving, aiming to contribute technical skills to impactful projects while continuously advancing my expertise in software development.",
  avatarUrl: "/me.jpg",
  skills: [
    "c++",
    "html5",
    "css3",
    "java",
    "python",
    "mysql",
    "mongodb",
    "reactjs",
    "nodejs",
    "nextjs2",
    "js",
    "typescript",
    "tailwindcss",
    "git",
    "github",
    "docker",
    "vscode",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "setukrjha9040@gmail.com",
    tel: "8287009496",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Setujha90",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/setujha90",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "#",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      Resume: {
        name: "Resume",
        url: process.env.RESUME as string || "",
        icon: Icons.googleDrive,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "Institute of Engineering and Management",
      href: "#",
      degree: "Bachelor of Technology in Information Technology: 9.65 CGPA",
      logoUrl: "/college.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "MB International School",
      href: "#",
      degree: "12th-CBSE Scored: 89.6%",
      logoUrl: "/12.png",
      start: "2019",
      end: "2021",
    },
    {
      school: "Kendriya Vidyalaya",
      href: "#",
      degree: "10th-CBSE Scored: 94.2%",
      logoUrl: "/10.jpeg",
      start: "2017",
      end: "2019",
    },
  ],
  profiles: [
    {
      title: "LeetCode",
      href: "https://leetcode.com/u/setukrjha9040/",
      icon: <TbBrandLeetcode className="text-xl" />,
      iconClassName: "text-yellow-500",
      active: false,
      description: [
        "Solved 500+ problems",
        "Contest rating: 1457",
        "Global rank: Under 158K"
      ],
      technologies: [
        "C++",  
        "TypeScript",
        "Oracle",
      ],
      image: "/me.jpg",
    },
    {
      title: "Geeks For Geeks",
      href: "https://www.geeksforgeeks.org/user/setukrj3jwe/",
      icon: <SiGeeksforgeeks className="text-xl" />,
      iconClassName: "text-green-500",

      active: false,
      description: [
        "Solved 200+ problems",
        "Institutional ranking: 241"
      ],
      technologies: [
        "C++", 
        "Java", 
        "Python",
        "C",
      ],
      image: "/me.jpg",
    },
    {
      title: "Coding Ninjas",
      href: "https://www.naukri.com/code360/profile/f0ccaf12-6c6e-4e83-afa8-7a178b688322",
      icon: <SiCodingninjas className="text-xl" />,
      iconClassName: "text-blue-500",

      active: false,
      description: [
        "Solved 200+ problems on Coding Ninjas",
        "League: Ninja Dominator"
      ],
      technologies: [
        "HTML", 
        "CSS", 
        "JavaScript",
        "MySQL",
      ],
      image: "/me.jpg",
    },
  ],
  projects: [
    {
      title: "Clash - Real-Time Voting Platform",
      href: "https://github.com/Setujha90/Clash",
      dates: "May 2025 - July 2025",
      active: false,
      description:
        "Developed a full-stack voting app. Implemented real-time vote updates and comments with background job handling Integrated NextAuth.js for JWT-based authentication with email verification, password reset, and secure user sessions, Built responsive, accessible UI using Tailwind CSS and enforced strong validation and API security.",
      technologies: [
        "HTML",
        "Tailwind CSS",
        "TypeScript",
        "Next.js",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Setujha90/Clash",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Clash.png",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "GameOn Mart",
      href: "https://github.com/Setujha90/GameOn-Mart",
      dates: "July 2025 - Aug 2025",
      active: false,
      description:
        "GameOn Mart is a full-stack e-commerce platform built with Node.js, React.js, Express.js, and TypeScript, specializing in sports accessories, equipment, and footwear. Designed for athletes and fitness enthusiasts, it delivers a seamless shopping experience with a modern React frontend and robust Express backend for reliable performance.",
      technologies: [
        "HTML",
        "Tailwind CSS",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",  
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Setujha90/GameOn-Mart",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/GameOn.png",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Rakshak",
      href: "https://github.com/Setujha90/Rakshak",
      dates: "June 2024 - Dec 2024",
      active: false,
      description:
        "A Spring Boot and HTML/CSS/JS-based system for managing criminal records, featuring role-based access, secure authentication, and powerful search/analytics tools to enhance law enforcement efficiency while ensuring data confidentiality.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "Spring Boot",
        "Mysql",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Setujha90/Rakshak",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/rak.png",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },   
  ],
  hackathons: [
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
  ],
} as const;
