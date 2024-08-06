"use client";
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import { useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-0 min-h-96 overflow-hidden">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Are you ready to expand <span className="text-purple">your</span> digital
          presence?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
        Get in touch with me today, and let&apos;s explore how I can help you reach your goals.
        </p>
        <a href="mailto:spiroioannou@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex my-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Spiros Ioannou
        </p>

        <div className="flex items-center md:gap-3 gap-6">
            <Link
              href="https://github.com/SprIoan"
              onMouseEnter={() => setHovered1(!hovered1)}
              onMouseLeave={() => setHovered1(!hovered1)}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-[#CBACF9] transition-colors"
            >
              <img src={hovered1 ? '/git-black.svg' : '/git.svg'} alt="icons" width={20} height={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/spiros-ioannou/"
              onMouseEnter={() => setHovered2(!hovered2)}
              onMouseLeave={() => setHovered2(!hovered2)}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-[#CBACF9] transition-colors"
            >
              <img src={hovered2 ? '/link-black.svg' : '/link.svg'} alt="icons" width={20} height={20} />
            </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;