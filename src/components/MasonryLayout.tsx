import Masonry from "react-masonry-css";
import { Heading, Img } from ".";

interface Props {
  gallery: [];
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
        {gallery.map((pic) => (
          <div key={pic} className="overflow-hidden">
            <div className="w-full h-full rounded-xl overflow-hidden mt-3">
              <Img
                src={pic}
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
