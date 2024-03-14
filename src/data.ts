import { SiTaichigraphics } from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaCode } from "react-icons/fa6";

export const Team = [
  {
    id: 1,
    name: "Samuel Aderemi",
    job: "Backend Development",
    img: "/assets/img_rectangle_15.png",
  },
  {
    id: 2,
    name: "Martins Wilson",
    job: "Product Development/Design",
    img: "/assets/img_rectangle_16.png",
  },
  {
    id: 3,
    name: "Ayanda Johnson",
    job: "Project Management",
    img: "/assets/img_rectangle_17.png",
  },
];

export const Service = [
  {
    id: 1,
    head: "uiux design",
    body: "We can make your website or application design better with this service",
    icon: MdOutlineDesignServices,
    color: "bg-red-400",
  },
  {
    id: 2,
    head: "development",
    body: "We can make your website or application design better with this service",
    icon: FaCode,
    color: "bg-amber-400",
  },
  {
    id: 3,
    head: "graphic design",
    body: "We can make your website or application design better with this service",
    icon: SiTaichigraphics,
    color: "bg-green-400",
  },
];
