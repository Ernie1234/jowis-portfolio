import { Heading, Img } from ".";
import { TTeam } from "../Type";
import { urlFor } from "../utils/client";

interface Props {
  item: TTeam;
}

function TeamCard({ item }: Props) {
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-md">
        <Img
          alt={item.username}
          className="w-full object-cover overflow-hidden hover:scale-110 transition-all duration-500"
          src={urlFor(item.profileImage)
            .width(250)
            .height(100)
            .quality(100)
            .url()}
        />
      </div>
      <Heading size="lg" className="dark:text-gray-50 font-semibold">
        {item.username}
      </Heading>
      <Heading size="lg" className="dark:text-gray-300">
        {item.position}
      </Heading>
    </div>
  );
}

export default TeamCard;
