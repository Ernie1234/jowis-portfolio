import { Jumbotron, MeetTeam, Testimony, WhatWeDo } from "../components";

function Home() {
  return (
    <div>
      <Jumbotron />
      <MeetTeam isShownAll={false} />
      <WhatWeDo />
      <Testimony />
    </div>
  );
}

export default Home;
