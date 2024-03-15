import { Link } from "react-router-dom";
import { Heading } from ".";

function Footer() {
  return (
    <footer className="max-w-screen-xl bg-gray-700  md:rounded-tr-[5rem] py-3 md:py-8 lg:py-16">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between px-8 lg:px-0 gap-12">
        <div className="flex flex-row md:flex-col justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-3xl font-semibold whitespace-nowrap text-red-400 uppercase">
              Jowis
            </span>
          </Link>
          <Heading size="lg" className="text-gray-300">
            &copy; {new Date().getFullYear()} Jowis.
            <br /> All rights reserved.
          </Heading>
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-12">
          <div className="flex flex-col items-start gap-5">
            <Heading size="2xl" className="text-white font-semibold">
              About
            </Heading>
            <Heading size="xs" className="text-gray-200 max-w-xs">
              Jowis is a full-stack software as a service development company
              based in Abuja, Nigeria.
            </Heading>
          </div>
          <div>
            <Heading size="2xl" className="text-white font-semibold pb-3">
              Company
            </Heading>
            <div>
              <Heading size="xs" className="pt-1 text-gray-200">
                About
              </Heading>
              <Heading size="xs" className="pt-1 text-gray-200">
                What we do
              </Heading>
              <Heading size="xs" className="pt-1 text-gray-200">
                Works
              </Heading>
              <Heading size="xs" className="pt-1 text-gray-200">
                Contact
              </Heading>
            </div>
          </div>
          <div>
            <Heading size="2xl" className="text-white font-semibold">
              Follow us
            </Heading>
            <div>
              <Link to="https://web.facebook.com/" target="_blank">
                <Heading
                  size="xs"
                  className="pt-1 text-gray-200 hover:text-white"
                >
                  Facebook
                </Heading>
              </Link>
              <Link to="https://www.instagram.com/" target="_blank">
                <Heading
                  size="xs"
                  className="pt-1 text-gray-200 hover:text-white"
                >
                  Instagram
                </Heading>
              </Link>
              <Link to="https://twitter.com/home" target="_blank">
                <Heading
                  size="xs"
                  className="pt-1 text-gray-200 hover:text-white"
                >
                  Twitter
                </Heading>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
