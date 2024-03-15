import { Heading } from "../components";

function Work() {
  return (
    <div className="max-w-screen-lg mx-auto px-8 md:px-0 min-h-screen">
      <div className="flex justify-between items-center">
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
    </div>
  );
}

export default Work;
