import { Heading, Img } from ".";
import { TItem } from "../Type";

interface Props {
  item: TItem;
}

function TeamCard({ item }: Props) {
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-md">
        <Img
          alt={item.name}
          className="w-full object-cover overflow-hidden hover:scale-110 transition-all duration-500"
          src={item.img}
        />
      </div>
      <Heading size="lg" className="dark:text-gray-50 font-semibold">
        {item.name}
      </Heading>
      <Heading size="lg" className="dark:text-gray-300">
        {item.job}
      </Heading>
    </div>
  );
}

export default TeamCard;
