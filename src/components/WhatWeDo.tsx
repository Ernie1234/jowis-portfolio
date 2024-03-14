import { Heading } from ".";
import { Service } from "../data";

function WhatWeDo() {
  return (
    <div className="max-w-screen-lg mx-auto my-8 md:my-16 lg:my-20">
      <Heading
        size="4xl"
        className="dark:text-gray-50 font-semibold text-center pb-3"
      >
        What we do
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-8 p-8 md:p-16 lg:p-20 bg-pink-300 rounded-md md:rounded-lg lg:rounded-xl">
        {Service.map((serve) => {
          const Icon = serve.icon;
          return (
            <div
              className="hover:bg-pink-900/10 backdrop-blur-md p-2 md:p-5 rounded-md"
              key={serve.id}
            >
              <div
                className={`${serve.color} w-fit p-2 rounded-md backdrop-blur-xl shadow-2xl shadow-red-500`}
              >
                <Icon size={28} className="text-gray-800" />
              </div>
              <Heading size="3xl" className="font-semibold  py-1.5">
                {serve.head}
              </Heading>
              <Heading size="xs">{serve.body}</Heading>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WhatWeDo;
