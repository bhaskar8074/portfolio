import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  InstaClone,
  jobsearch,
  ecommerce,
  threejs,
  Kietlogo,
  nxtWave,
  diplomaLogo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "works",
    title: "Works",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "S.S.C",
    company_name: "Z.P.H School Urlam",
    icon: null,
    iconBg: "#383E56",
    date: "Jun 2014 - April 2015",
  },
  {
    title: "Diploma",
    company_name: "Government Polytechnic Pithapuram",
    icon: diplomaLogo,
    iconBg: "#E6DEDD",
    date: "Aug 2015 - April 2018",
  },
  {
    title: "B.Tech",
    company_name: "KIET College",
    icon: Kietlogo,
    iconBg: "#383E56",
    date: "july 2018 - April 2022",
  },
  {
    title: "Full stack Development",
    company_name: "Nxt Wave",
    icon: nxtWave,
    iconBg: "#E6DEDD",
    date: "july 2021 - Present",
  },
];

const projects = [
  {
    name: "Instagram Clone",
    description:
      "Implemented responsive Streaming Application like Instagram Clone where users can log in and see a list of stories and posts, user can also search posts with post caption, user can be able to like and dislike the post and also view the user specific posts",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: InstaClone,
    source_code_link: "https://github.com/bhaskar8074/Insta-clone",
    website_link: "https://instabh.ccbp.tech/",
  },
  {
    name: "Job Search",
    description:
      "Implemented Jobby App where users can log in and can see a list of jobs with search by Job title, filters based on Salary range and Employment type, etc",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobsearch,
    source_code_link: "https://github.com/bhaskar8074/b-jobby-app",
    website_link: "https://jobbybhh.ccbp.tech",
  },
  {
    name: "E-commerce",
    description:
      "Implemented Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart where users can login and can see list of products with search, filters, sort by, etc..",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/bhaskar8074/nxt-trendz-2",
    website_link: "https://nxttrendbhaa.ccbp.tech/",
  },
];

export { services, technologies, experiences, projects };
