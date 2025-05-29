import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

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
    "C++",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Next.js",
    "Typescript",
    "MySQL",
    "Mongodb",
    "Git",
    "Github",
    "VS Code",
    "Python",
    "Postgres",
    "Docker",
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
      Email: {
        name: "Send Email",
        url: "https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCJDkWSbTtpRQNhQfbTzrwtTXMkpGqMPGFXLkxvBgsLVkzwKQGzJhrbSmnnpHQDvfVBvQq",
        icon: Icons.email,

        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: process.env.RESUME_LINK || "https://drive.google.com/file/d/1GWV8535MaFmb-exbL_akCyU4DHXnnvnK/view?usp=drivesdk",
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
      logoUrl: "/12th_school.png",
      start: "2020",
      end: "2021",
    },
      {
      school: "Kendriya Vidyalaya",
      href: "#",
      degree: "10th-CBSE Scored: 94.2%",
      logoUrl: "/10th_school.jpeg",
      start: "2019",
      end: "2020",
    },
  ],
  projects: [
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
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
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
