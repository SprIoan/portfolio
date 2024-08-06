"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center  justify-center p-4 gap-x-40 gap-y-48 md:gap-y-64 lg:gap-y-28 xl:gap-y-32 xl:gap-x-52  mt-24 md:mt-28 lg:mt-24">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] flex items-center  justify-center sm:w-[23rem] w-[80vw] "
            key={item.id}
          >
            <PinContainer
              title={item.link}
              href={item.link}
              className=""
            >
              <div className="relative flex items-center justify-center sm:w-[450px] w-[80vw] overflow-hidden h-[30vh] lg:h-[40vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl "
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className={`z-10 absolute bottom-0 scale-90 top-1 lg:top-4 lg:scale-95 ${item.imgType === "image" ? 'scale-[0.85] lg:scale-90 rotate-3 ' : ''}`}
                />
              </div>

              <h1 className="font-bold lg:text-xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-lg md:text-xs text-sm text-purple hover:underline underline-offset-4 font-semibold">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;