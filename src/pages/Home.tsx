import { Jumbotron, MeetTeam, Testimonial, WhatWeDo } from "../components";

function Home() {
  return (
    <div>
      <Jumbotron />
      <MeetTeam isShownAll={false} />
      <WhatWeDo />
      <Testimonial />
    </div>
  );
}

export default Home;
