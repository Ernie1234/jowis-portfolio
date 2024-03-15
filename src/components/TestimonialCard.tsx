import { Heading } from ".";

interface TestimonialCardPropsType {
  img: string;
  client: string;
  title: string;
  clientInfo: string;
}

function TestimonialCard({
  img,
  client,
  title,
  clientInfo,
}: TestimonialCardPropsType) {
  return (
    <div className="bg-gray-100/50 rounded-2xl p-6 pb-0 flex flex-col justify-between">
      <div className="text-center md:text-left">
        <Heading size="2xl" className="dark:text-black text-2xl font-bold">
          &quot;{title}&quot;
        </Heading>
      </div>
      <div className="pt-8 md:pt-3 md:px-4 flex gap-1 md:gap-6 justify-between items-center">
        <div>
          <Heading size="s" className="dark:text-black !font-bold">
            {client}
          </Heading>
          <Heading
            size="xs"
            className="font-medium text-gray-500 dark:text-gray-800"
          >
            {clientInfo}
          </Heading>
        </div>
        <img
          src={img}
          className="max-w-16 md:max-w-24 lg:max-w-32 max-h-min"
          alt={client}
        />
      </div>
    </div>
  );
}
export default TestimonialCard;
