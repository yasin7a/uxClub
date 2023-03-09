import React from "react";
import Image from "next/image";
import Link from "next/link";
import coursImg from "../../public/img/text-course-img.png";

let data = [
  {
    title: "Graphic Design Master Course",
    img: coursImg,
    time: "13 Jan 2023",
    price: "1,480",
  },
  {
    title: "Graphic Design Master Course",
    img: coursImg,
    time: "13 Jan 2023",
    price: "1,480",
  },
  {
    title: "Graphic Design Master Course",
    img: coursImg,
    time: "13 Jan 2023",
    price: "1,480",
  },
];

const CourseList = ({
  isTitle = false,
  chnagehover = false,
}: {
  isTitle?: boolean;
  chnagehover?: boolean;
}) => {
  return (
    <div className="wrap py-12 bg-[#F5F5F5]">
      <div className="container">
        {isTitle && (
          <div className="text-center pb-10">
            <h2 className="text-[24px] sm:text-[28px] font-roboto font-extrabold text-[#252525] leading-none mb-2">
              Learn subject wise
            </h2>
            <p className="text-[16px] sm:text-[18px] text-[#474747] font-hindi-siliguri font-medium">
              যেকোনো বিষয়ের উপর এক্সপার্ট হোন এই স্পেশাল কোর্সে
            </p>
          </div>
        )}

        <div className=" gap-5 grid sm:grid-cols-2 md:grid-cols-3 course-list">
          {data.map((item, i) => {
            return (
              <Link key={i} href="/">
                <div
                  className={`rounded-[14px] cursor-pointer bg-white group 
                ${!chnagehover ? "hover:bg-[#4F1E52]" : ""}
                transition-colors duration-500 font-roboto shadow-sm`}
                >
                  <Image
                    src={item.img}
                    alt=""
                    className="rounded-[14px] transition-transform onhover:onhover:group-hover:translate-x-4 duration-500 w-full"
                  />
                  <div className="py-4 px-5">
                    <h3
                      className={`text-[#252525] ${
                        chnagehover
                          ? "onhover:group-hover:text-[#E30045]"
                          : "onhover:group-hover:text-white"
                      } text-[22px] font-bold leading-[1.2]`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-[#5C5C5C] ${
                        chnagehover
                          ? "onhover:group-hover:text-[#E30045]"
                          : "onhover:group-hover:text-white"
                      } flex gap-1 items-center my-3 text-[12px]`}
                    >
                      <span>
                        <svg
                          width="16px"
                          height="16px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                            className={`stroke-[#5C5C5C] ${
                              chnagehover
                                ? "onhover:group-hover:stroke-[#E30045]"
                                : "onhover:group-hover:stroke-white"
                            }`}
                            strokeWidth="2"
                          />
                          <path
                            d="M12 7L12 11.5L12 11.5196C12 11.8197 12.15 12.1 12.3998 12.2665V12.2665L15 14"
                            className={`stroke-[#5C5C5C] ${
                              chnagehover
                                ? "onhover:group-hover:stroke-[#E30045]"
                                : "onhover:group-hover:stroke-white"
                            }`}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>Updated on {item.time}</span>
                    </p>
                    <div className="flex justify-between items-center">
                      <p
                        className={`text-[18px] font-semibold font-roboto text-[#5C5C5C]  ${
                          chnagehover
                            ? "onhover:group-hover:text-[#E30045]"
                            : "onhover:group-hover:text-white"
                        }`}
                      >
                        ৳ {item.price}
                      </p>
                      <span className="w-6 onhover:group-hover:rotate-[360deg] transition-transform duration-500">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 31 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.5771 23.304L17.5545 21.3284L25.4568 13.426H0.714844V10.6037H25.4568L17.5074 2.65431L19.5301 0.678711L30.8662 12.0149L19.5771 23.304Z"
                            className={`fill-[#5C5C5C] ${
                              chnagehover
                                ? "onhover:group-hover:fill-[#E30045]"
                                : "onhover:group-hover:fill-white"
                            }`}
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
