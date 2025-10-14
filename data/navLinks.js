import {
  BriefcaseBusiness,
  CircleUserRound,
  Contact,
  House,
} from "lucide-react";

const navLinks = [
  { id: "home", link: "#home", title: "Home", icon: <House /> },
  { id: "about", link: "#about", title: "About", icon: <CircleUserRound /> },
  {
    id: "projects",
    link: "#projects",
    title: "Projects",
    icon: <BriefcaseBusiness />,
  },
  { id: "contact", link: "#contact", title: "Contact", icon: <Contact /> },
];

export default navLinks;
