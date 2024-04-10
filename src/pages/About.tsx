import { useEffect, useState } from "react";
import { Banner, Loading, MasonryLayout, MeetTeam } from "../components";
import { IGallery } from "../Type";
import { client } from "../utils/client";
import { galleryQuery } from "../utils/query";

const img1 = "/assets/img_ellipse_11.png";
const img2 = "/assets/img_ellipse_12.png";
const img3 = "/assets/img_ellipse_13.png";
function About() {
  const [gallery, setGallery] = useState<IGallery[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    client
      .fetch(galleryQuery)
      .then((response) => setGallery(response))
      .catch((error) => console.log(error));

    setLoading(false);
  }, []);

  if (loading) {
    return <Loading title="Loading the gallery for you!" />;
  }

  return (
    <div className="max-w-screen-lg mx-auto px-8 md:px-0 min-h-screen">
      <Banner
        secondaryText=" We are an agency engaged in the creative industry and
                  business, we are ready to help you to improve your business
                  performance together with our great team"
        text="Get to know more about Us"
        img1={img1}
        img2={img2}
        img3={img3}
        bg="bg-yellow-100"
      />
      <MeetTeam isShownAll />
      <MasonryLayout gallery={gallery} />
    </div>
  );
}

export default About;
