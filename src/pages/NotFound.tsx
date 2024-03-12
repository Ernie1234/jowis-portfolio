import Button from "../components/Button";
import Heading from "../components/Heading";

const NotFound = () => {
  return (
    <div>
      <Heading size="4xl" className="text-red-600">
        hello
      </Heading>
      <Button
        onClick={() => {}}
        size="md"
        shape="pill"
        className="sm:px-5 font-bold text-white bg-red-400 rounded-[5px]"
      >
        Contact us
      </Button>
      <h1>Opps! We ran out of code</h1>
    </div>
  );
};

export default NotFound;
