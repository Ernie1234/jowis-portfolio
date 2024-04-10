import { Heading, Img } from ".";

interface Props {
  text: string;
  secondaryText: string;
  img1: string;
  img2: string;
  img3: string;
  bg: string;
}

function Banner({ text, secondaryText, img1, img2, img3, bg }: Props) {
  return (
    <div
      className={`flex flex-row justify-start w-full py-2 px-0 md:p-5 lg:p-8 ${bg} rounded-[90px] my-8 md:my-16 lg:my-20`}
    >
      <div className="flex flex-row md:flex-col justify-start items-start w-[88%] mt-[19px] ml-[60px] md:gap-5 md:ml-5">
        <div className="hidden md:flex flex-col items-start justify-start w-[10%] md:w-full gap-5">
          <Img
            src={img1}
            alt="circleimage"
            className="h-[89px] w-[89px] md:h-auto rounded-[50%]"
          />
          <div className="h-[14px] w-[14px] ml-[23px] md:ml-0 sm:ml-5 bg-pink-400 rounded-[50%]" />
        </div>
        <div className="flex flex-col items-end justify-start w-[91%] md:w-full">
          <div className="h-[14px] w-[14px] mr-[134px] md:mr-5 bg-orange-500 rounded-[50%]" />
          <div className="flex flex-row justify-end w-full">
            <div className="flex flex-row md:flex-col justify-end items-start w-full md:gap-5">
              <div className="flex flex-col items-center justify-start w-[91%] md:w-full gap-5 z-[1]">
                <h3 className="text-3xl dark:text-black md:text-4xl lg:text-6xl font-semibold">
                  {text}
                </h3>
                <Heading className="text-center" size="lg">
                  {secondaryText}
                </Heading>
              </div>
              <Img
                src={img2}
                alt="circleimage_one"
                className="h-[89px] w-[89px] md:h-auto ml-[-11px] md:ml-0 rounded-[50%]"
              />
            </div>
          </div>
          <Img
            src={img3}
            alt="circleimage_two"
            className="h-[89px] w-[89px] md:h-auto mr-[89px] md:mr-5 rounded-[50%]"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
