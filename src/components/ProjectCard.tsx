import { Link } from "react-router-dom";
import { Heading, Img } from ".";

interface Props {
  bg: string;
  img: string;
  title: string;
  projectDesc: string;
  url: string;
  skills: string[];
}

function ProjectCard({ bg, img, title, projectDesc, url, skills }: Props) {
  return (
    <div
      className={`flex flex-col md:flex-row gap-5 md:gap-8 justify-center p-5 w-full rounded-3xl ${bg} overflow-hidden`}
    >
      <div className="flex-1 overflow-hidden">
        <Img
          src={img}
          alt="image_three"
          className="w-full object-cover hover:scale-105 transition-all duration-500"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between gap-5 py-0 md:py-8">
        <div className="flex flex-col items-start justify-center">
          <Heading size="4xl" className="font-bold">
            {title}
          </Heading>
          <Heading size="lg" className="text-gray-900">
            {projectDesc}
          </Heading>
          <div className="flex gap-5 mt-3 flex-wrap">
            {skills.map((sk) => (
              <Heading
                size="lg"
                className="text-gray-900 bg-slate-950/10 p-2 rounded-md min-w-fit hover:bg-slate-900/5 transition-all duration-500"
                key={sk}
              >
                {sk}
              </Heading>
            ))}
          </div>
        </div>
        <Link
          to={url}
          className="font-semibold text-white border-2 border-gray-800 bg-gray-800 hover:text-gray-900 hover:bg-transparent transition-all duration-300 max-w-fit px-4 py-2 rounded-xl"
        >
          See Site
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
