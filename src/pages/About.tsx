import { MasonryLayout, MeetTeam } from "../components";
import { Gallery } from "../data";

function About() {
  return (
    <div className="max-w-screen-md mx-auto px-8 md:px-0 min-h-screen">
      <MeetTeam isShownAll />
      <MasonryLayout gallery={Gallery} />
    </div>
  );
}

export default About;
