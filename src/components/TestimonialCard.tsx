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
    <div className="bg-gray-100/50 rounded-2xl p-6">
      <div>
        <Heading
          size="2xl"
          className="dark:text-black lg:mb-20 mb-4 text-2xl font-bold"
        >
          &quot;{title}&quot;
        </Heading>
      </div>
      <Heading className="px-4 py-0 flex flex-wrap-reverse gap-x-6 justify-between items-center">
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
        <img src={img} className="max-w-[8rem]" alt={client} />
      </Heading>
    </div>
  );
}
export default TestimonialCard;
