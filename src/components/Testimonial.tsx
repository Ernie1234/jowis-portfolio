import { useEffect, useState } from "react";

import { Heading, Loading, TestimonialCard } from ".";
import { ITestimonials } from "../Type";
import { client } from "../utils/client";
import { testimonialQuery } from "../utils/query";

export function Testimonial() {
  const [testimonials, setTestimonial] = useState<ITestimonials[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    client
      .fetch(testimonialQuery)
      .then((response) => setTestimonial(response))
      .catch((error) => console.log(error));

    setLoading(false);
  }, []);

  if (loading) {
    return <Loading title="Loading the testimonials for you!" />;
  }
  return (
    <section className="px-8 py-10 lg:py-28">
      <div className="container mx-auto">
        <Heading className="dark:text-gray-50 mb-4 !text-2xl lg:!text-4xl">
          The heartfelt testimonials of our community
        </Heading>
        <Heading className="max-w-3xl !text-gray-500 mb-10 lg:mb-20">
          From life-enhancing gadgets to unparalleled customer support, and
          transformative learning opportunities.
        </Heading>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {testimonials?.map((props, key) => (
            <TestimonialCard
              img={props.img.asset.url}
              title={props.title}
              clientInfo={props.clientInfo}
              client={props.client}
              key={key}
            />
          ))}
        </div>

        <div className="mt-8 bg-gray-100/50 text-center rounded-2xl p-6">
          <div color="transparent">
            <Heading className="mb-4 !text-2xl lg:!text-3xl max-w-4xl !leading-snug mx-auto font-bold ">
              &quot;Its intuitive design and powerful features make it
              indispensable. I can&apos;t imagine going back to life before
              it!&quot;
            </Heading>
          </div>
          <div className="items-center mx-auto py-4">
            <img
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
              className="max-w-[8rem] mx-auto grayscale py-4"
              alt="spotify"
            />
            <Heading size="s" className="dark:text-black !font-bold">
              Emma Roberts
            </Heading>
            <Heading
              size="xs"
              className="font-medium text-gray-500 dark:text-gray-800"
            >
              Chief Executive @Spotify
            </Heading>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
