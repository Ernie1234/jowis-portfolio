import { Banner, Heading, ProjectCard } from "../components";
import { projectData } from "../data";

const img1 = "/assets/img_rectangle_57.svg";
const img2 = "/assets/img_group_776.svg";
const img3 = "/assets/img_polygon_1.svg";
function Work() {
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
        {projectData.map((project) => (
          <ProjectCard
            bg={project.color}
            img={project.img}
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
