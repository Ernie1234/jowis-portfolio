import Masonry from "react-masonry-css";
import { Heading, Img } from ".";
import { IGallery } from "../Type";
import { urlFor } from "../utils/client";

interface Props {
  gallery: IGallery[] | null;
}

export default function MasonryLayout({ gallery }: Props) {
  const breakpointColumnsObj = {
    default: 3,
    1000: 3,
    800: 2,
    300: 1,
  };
  return (
    <div className="my-8 md:my-16 lg:my-20">
      <Heading size="4xl" className="dark:text-gray-50">
        Our Moment
      </Heading>
      <Masonry breakpointCols={breakpointColumnsObj} className="flex gap-3">
        {gallery &&
          gallery?.map((pic) => (
            <div key={pic.title} className="overflow-hidden">
              <div className="w-full h-full rounded-xl overflow-hidden mt-3">
                <Img
                  src={urlFor(pic.picture.asset.url)
                    .width(250)
                    .quality(100)
                    .url()}
                  alt="gallery image"
                  className="rounded-xl  shadow-md hover:scale-105 transit duration-500"
                />
              </div>
            </div>
          ))}
      </Masonry>
    </div>
  );
}
