import { useEffect, useState } from "react";

import { client } from "../utils/client";
import { projectQuery } from "../utils/query";
import { Banner, Heading, Loading, ProjectCard } from "../components";
import { IProject } from "../Type";

const img1 = "/assets/img_rectangle_57.svg";
const img2 = "/assets/img_group_776.svg";
const img3 = "/assets/img_polygon_1.svg";
function Work() {
  const [project, setProject] = useState<IProject[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    client
      .fetch(projectQuery)
      .then((response) => setProject(response))
      .catch((error) => console.log(error));

    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-screen-lg mx-auto px-8 md:px-0 min-h-screen">
      <Banner
        secondaryText="We have completed many projects from various companies in the world, we have made many of our clients feel happy and satisfied with the results we have provided"
        text="What we do"
        bg="bg-green-200"
        img1={img1}
        img2={img2}
        img3={img3}
      />
      <div className="flex justify-between items-center ">
        <Heading size="4xl" className="dark:text-gray-50">
          Latest Project
        </Heading>

        <Heading
          size="lg"
          className="text-gray-500 dark:text-gray-50 px-3 py-1.5 rounded-sm md:rounded-md lg:rounded-lg font-semibold "
        >
          see the lastest variety of projects we have worked on
        </Heading>
      </div>
      <div className="flex flex-col items-start justify-start w-full gap-24 mt-5 mb-10">
        {project?.map((project) => (
          <ProjectCard
            projectColor={project.color}
            img={project.img.asset.url}
            projectDesc={project.description}
            title={project.title}
            key={project.title}
            url={project.url}
            skills={project.skills}
          />
        ))}
      </div>
    </div>
  );
}

export default Work;
