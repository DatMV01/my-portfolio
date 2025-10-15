const {
  Award,
  GraduationCap,
  BriefcaseBusiness,
} = require("lucide-react");

export const certificates = [
  "AWS Certified Developer - Associate",
  "AWS Cloud Practitioner",
  "React Advanced Certificate",
  "AWS Certified Solutions Architect - Associate",
];

export const skills = [
  { src: "/icons/icons8-java-96.png", name: "Java" },
  { src: "/icons/icons8-spring-boot-96.png", name: "Spring" },
  { src: "/icons/icons8-react-96.png", name: "ReactJS" },
  { src: "/icons/icons8-nextjs-96.png", name: "NextJS" },
  { src: "/icons/icons8-nodejs-96.png", name: "NodeJS" },
  { src: "/icons/icons8-aws-96.png", name: "AWS" },
  { src: "/icons/icons8-docker-96.png", name: "Docker" },
  { src: "/icons/icons8-mysql-96.png", name: "MySQL" },
  { src: "/icons/icons8-solidity-96.png", name: "Solidity" },
  { src: "/icons/icons8-nestjs-96.png", name: "NestJS" },
  { src: "/icons/icons8-javascript-96.png", name: "JavaScript" },
  { src: "/icons/icons8-mongodb-96.png", name: "Mongo" },
  { src: "/icons/icons8-wordpress-96.png", name: "WordPress" },
];

export const aboutData = [
  {
    icon: <Award />,
    title: "Experience",
    content: "1+ Years Working",
  },
  {
    icon: <GraduationCap />,
    title: "Education",
    content: "B.Sc. in Software Engineering",
  },
  {
    icon: <BriefcaseBusiness />,
    title: "Projects",
    content: "5+ Completed",
  },
];
