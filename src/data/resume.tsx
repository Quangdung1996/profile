import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Dung Bui",
  initials: "DV",
  url: "https://github.com/Quangdung1996",
  location: "Ho Chi Minh, Viet Nam",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Full Stack Developer. I'm a web developer with 5+ years of experience in C#.NET technologies",
  summary:
    "Learning new languages and technologies is what I am passionate about. I am considered a team-player because I like to help other and tend to work well within group",
  avatarUrl: "/me.png",
  skills: [
    "Angular",
    "Next.js",
    "Typescript",
    "React.js",
    "C#",
    "Dotnet",
    "SQL",
    "Docker"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" }
  ],
  contact: {
    email: "quangdung1996.97@gmail.com",
    tel: "+84",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Quangdung1996",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/d%C5%A9ng-b%C3%B9i-3331b4194/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:quangdung1996.97@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Dws",
      href: "https://www.dws.cloud",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/dws.png",
      start: "Sep 2021",
      end: "Now",
      description:
        "Develop an application that handles manager drivers and loaders are responsible for delivering our services safely, packing and preparing goods for transport, loading and unloading vehicles, managing and recording work time and communicating effectively with customers and management.",
    },
    {
      company: "Silicon Stack Pty Ltd",
      badges: [],
      href: "https://siliconstack.com.au",
      location: "Full-time",
      title: "Software Engineer",
      logoUrl: "/silicon.jpg",
      start: "Feb 2021",
      end: "Sep 2021",
      description:
        "Developed product for food technology.Application development with large amounts of data. Use cloud azure service to help develop the system optimally.",
    },
    {
      company: "Gannha",
      href: "https://www.gannha.com/",
      badges: [],
      location: "Full-time",
      title: "Software Engineer",
      logoUrl: "/gannha.jpg",
      start: "Sep 2020",
      end: "Mar 2020",
      description:
        "Build a system to search for the nearest address (coffee shop, bar, restaurant...etc)",
    },
    {
      company: "Logix Technology",
      href: "https://www.logixtek.com/",
      badges: [],
      location: "Full-time",
      title: "Software Engineer",
      logoUrl: "/logixtechnology_logo.jpg",
      start: "Jul 2019",
      end: "Jul 2020",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    }
  ],
  education: [
    {
      school: "VNUHCM - University of Science",
      href: "https://en.hcmus.edu.vn/",
      degree: "Computer Science",
      logoUrl: "/1631355050079.jpg",
      start: "2015",
      end: "2020",
    },
  ],
  projects: [
  ],
  hackathons: [

  ],
} as const;
