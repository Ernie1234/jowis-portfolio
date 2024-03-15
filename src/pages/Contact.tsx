import { IoIosSend } from "react-icons/io";
import { IoIosMail } from "react-icons/io";

import { Banner, Button, Heading } from "../components";
import {
  FaDiscord,
  FaLocationDot,
  FaPhone,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdOutlineFacebook } from "react-icons/md";

const img1 = "/assets/img_group_767.svg";
const img2 = "/assets/img_support_1.svg";
const img3 = "/assets/img_rectangle_57 copy.svg";

function Contact() {
  return (
    <div className="max-w-screen-lg mx-auto px-8 md:px-0 min-h-screen">
      <Banner
        secondaryText="Stay connected with us, we will help you with your various needs. we will provide the best service in technical and consulting matters. You can provide your needs or something you ask in the form below"
        text="Get in touch"
        bg="bg-blue-100"
        img1={img1}
        img2={img2}
        img3={img3}
      />
      <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-8 mb-5 md:mb-10">
        <div className="flex flex-col justify-between md:w-[66%] w-full gap-6 lg:p-8 p-5 bg-white dark:bg-gray-900 dark:text-white shadow-2xl rounded-2xl">
          <div className="flex flex-col items-center justify-start w-full gap-6">
            <Heading size="2xl">Send us Message</Heading>
            <div className="flex flex-col items-center justify-start w-full gap-[30px]">
              <div className="flex flex-col justify-center items-center w-full gap-5">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full rounded-lg bg-gray-100 text-gray-600 py-3 px-4 placeholder:text-gray-400"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full rounded-lg bg-gray-100 text-gray-600 py-3 px-4 placeholder:text-gray-400"
                />
              </div>
              <textarea
                rows={6}
                required
                name="your_message"
                placeholder="Your Message"
                className="w-full rounded-lg bg-gray-100 placeholder:text-gray-400 text-gray-600 py-3 px-4"
              />
            </div>
          </div>
          <Button
            onClick={() => {}}
            size="sm"
            rightIcon={<IoIosSend />}
            className="bg-red-400 mb-4 gap-3 rounded-3xl w-full"
          >
            Send
          </Button>
        </div>

        <div className="flex flex-col items-center justify-center w-full md:w-[34%] mb-3 gap-5 p-12 md:p-5 bg-white-A700 shadow-2xl rounded-[20px]">
          <div className="flex flex-col items-start justify-start w-[97%] md:w-full mt-6 gap-[33px]">
            <input
              name="contact"
              placeholder="Contact Information"
              className="w-full sm:w-full"
            />
            <div className="flex flex-col items-start justify-start w-[92%] md:w-full ml-1 gap-7 md:ml-0">
              <div className="flex flex-row justify-start items-center gap-[25px]">
                <IoIosMail size={24} />
                <Heading size="s" className="!text-gray-400_01">
                  jowis@mail.com
                </Heading>
              </div>
              <div className="flex flex-row justify-start items-center gap-[25px]">
                <FaGlobeAmericas size={24} />
                <a href="www.abc.com" target="_blank" rel="noreferrer">
                  <Heading size="s" className="!text-gray-400_01">
                    www.jowis.com
                  </Heading>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center gap-[25px]">
                <FaPhone size={24} />
                <Heading size="s" className="!text-gray-400_01">
                  1234 - 5678
                </Heading>
              </div>
              <div className="flex flex-row justify-start items-start gap-[25px]">
                <FaLocationDot size={24} />
                <Heading size="s" className="w-[80%] !text-gray-400_01">
                  Sudirman street, holgan, melbourne
                </Heading>
              </div>
            </div>
          </div>
          <div className="h-px w-full bg-gray-200" />
          <div className="flex flex-col justify-between w-full gap-5">
            <Heading size="lg" className="text-gray-400">
              Social Media
            </Heading>
            <div className="flex gap-5 justify-center items-center">
              <Link to="www.twitter.com/home" target="_blank">
                <FaSquareXTwitter size={40} />
              </Link>
              <Link to="www.instagram.com/" target="_blank">
                <AiFillInstagram size={40} />
              </Link>
              <Link to="www.facebook.com/" target="_blank">
                <MdOutlineFacebook size={40} />
              </Link>
              <Link to="www.discord.com/" target="_blank">
                <FaDiscord size={40} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
