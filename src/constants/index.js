import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Full stack developer intern",
        company_name: "Edufied",
        icon:"",
        iconBg: "#accbe1",
        date: "April 2023 - Current",
        points: [
            "Implemented and integrated 15+ identity veri␜cation and member management features utilizing the MEAN stack and OpenAttestation framework, enhancing user data security and streamlining user account management processes at Edufied",
            "Implemented serverless architecture using AWS Lambda functions and API Gateway at Edufied,resulting in a 30% reduction in server costs and improved scalability of the platform",
            "Developed and optimized a custom design platform for Edu␜ed, utilized by 25+ universities and organizations, using TypeScript and ReactJS, resulting in improved user experience and increased platform adoption.",
            "Resolved 80+ bugs in Edu␜ed's software ecosystem by implementing TypeScript, Node.js, and React.js solutions, ensuring seamless functionality and user experience across various projects.",
        ],
    },
    {
        title: "Full stack developer",
        company_name: "Luster Network",
        icon: "",
        iconBg: "#fbc3bc",
        date: "April 2023 - October 2023",
        points: [
            "Designed and implemented interactive and user-friendly interfaces for 4 flagship products at LusterNetwork, utilizing React.js, Next.js, and Tailwind CSS to optimize performance and enhanceuser experience.",
            "Developed smart contracts and integrated web3 features across 3 platforms (ERC20 and ERC721) using Ether.js at Luster Network, elevating functionality and enhancing user experience.",
            "Crafted immersive interactive web3 experiences for Luster Network's educational platform, including 10+ courses that empowered students to acquire practical skills in blockchain technology and decentralized applications.",
            "Redesigned the user interface of Luster Network's learning platform, resulting in a 35% increase in user retention and engagement through enhanced accessibility and interactivity features",
        ],
    },

];

export const socialLinks = [
    {
        name: "Contact",
        iconUrl: contact,
        link: "/contact",
    },
    {
        name: "GitHub",
        iconUrl: github,
        link: "https://github.com/mildlycoder",
    },
    {
        name: "LinkedIn",
        iconUrl: linkedin,
        link: "https://www.linkedin.com/in/devpranavk",
    },
];

export const projects = [
  {
    name: "Prava",
    description: "Products for remittance, compliance, taxes, and cross-border payment",
    theme: "light",
    link: "https://www.prava.space"
  }
];
