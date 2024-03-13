import { Button, Heading } from ".";

function Jumbotron() {
  return (
    <div className="max-w-screen-lg bg-emerald-200 mx-auto rounded-md md:rounded-lg lg:rounded-xl my-8 md:my-16 lg:my-20 flex flex-col md:flex-row px-8 md:px-16 ">
      <div className="flex-1 flex flex-col justify-between gap-8 md:gap-12 py-8 md:py-16">
        <div>
          <Heading size="6xl">Maximize your business with Jowis</Heading>
          <Heading size="lg" className="text-gray-600">
            Maximize your business with a variety of services from us
          </Heading>
        </div>
        <div className="flex gap-5 items-center">
          <Button
            onClick={() => {}}
            size="md"
            shape="round"
            className="font-semibold text-white border-2 border-gray-800 bg-gray-800 hover:text-gray-900 hover:bg-transparent transition-all duration-300"
          >
            Contact Us
          </Button>
          <Button
            size="md"
            variant="outline"
            className="font-semibold text-gray-900 bg-transparent border-gray-800 border-2 hover:bg-gray-800 hover:text-white transition-all duration-300"
            onClick={() => {}}
          >
            About Us
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
