import { Link } from "react-router-dom";
import { Heading, TeamCard } from ".";
import { Team } from "../data";

interface Props {
  isShownAll: boolean;
}
function MeetTeam({ isShownAll }: Props) {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex justify-between items-center">
        <Heading size="4xl" className="dark:text-gray-50">
          Meet the team
        </Heading>
        {!isShownAll && (
          <Link to="/about">
            <Heading
              size="md"
              className="text-red-400 px-3 py-1.5 rounded-sm md:rounded-md lg:rounded-lg font-semibold hover:bg-gray-300/50 capitalize"
            >
              View all
            </Heading>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-12 mt-3">
        {!isShownAll
          ? Team.slice(0, 3).map((item) => (
              <TeamCard key={item.id} item={item} />
            ))
          : Team.map((item) => <TeamCard key={item.id} item={item} />)}
      </div>
    </div>
  );
}

export default MeetTeam;
