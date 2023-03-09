import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logoLight from "../../public/img/logo-light.png";
import aboutIcon from "../../public/img/about-icon.png";
import blogIcon from "../../public/img/blog-icon.png";
import termsIcon from "../../public/img/terms-icon.png";
import supportICon from "../../public/img/support-icon.png";
import chooeseUsImg from "../../public/img/choose-us-banner.png";
import CrossNoBorder from "../icons/CrossNoBorder";

let dataMore = [
  {
    img: aboutIcon,
    title: "About Us",
    description: "More about UX Club",
  },
  {
    img: blogIcon,
    title: "Blog",
    description: "From the trend",
  },
  {
    img: supportICon,
    title: "Support",
    description: "Get help if you need",
  },
  {
    img: termsIcon,
    title: "Terms &",
    description: "Conditions",
  },
];

const Header = ({ test = false }: { test?: boolean }) => {
  let [isNavOPen, setIsNavOpen] = useState(false);
  return (
    <div className="bg-[#0F1B1B] wrap py-2 relative">
      <div className="container">
        <div className="flex items-center ">
          <div className="shrink-0">
            <Link href="/">
              <Image src={logoLight} alt="" className="w-24" />
            </Link>
          </div>

          <button
            className={`${
              isNavOPen ? "toggle" : ""
            } block md:hidden ml-auto hamburger z-[1] relative`}
            onClick={() => {
              setIsNavOpen((prev) => !prev);
            }}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </button>

          <nav
            className={`md:pl-[8%]  self-stretch flex-col md:flex-row items-center  flex justify-center md:justify-between w-full fixed md:static inset-0 transition-all 
          ${
            isNavOPen
              ? "[clip-path:circle(1000px_at_90%_-10%)] visible"
              : "[clip-path:circle(50px_at_90%_-20%)] invisible"
          }  h-screen bg-[#1c3b3b] md:bg-transparent md:visible md:h-[unset] md:[clip-path:unset] duration-1000 md:duration-[0]`}
          >
            <ul className="flex  self-stretch md:h-full items-center menu flex-col md:flex-row">
              <li className="px-5 py-2.5">
                <Link
                  href="/"
                  className=" text-white font-semibold font-roboto text-[16px] flex items-center gap-2 onhover:hover:text-[#E30045] transition-colors duration-200"
                >
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 640 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z"></path>
                    </svg>
                  </span>
                  Membership
                </Link>
              </li>
              <li className="px-5 py-2.5">
                <Link
                  className="text-white font-semibold font-roboto text-[16px] onhover:hover:text-[#E30045] transition-colors duration-200"
                  href="/"
                >
                  Inspiration
                </Link>
              </li>
              {!test ? (
                <li className="text-white font-semibold font-roboto text-[16px] transition-colors duration-200 group  flex items-center cursor-pointer px-5 py-2.5">
                  <span className="">More</span>
                  <div className="absolute left-0 -bottom-[80px] p-4 bg-white w-full opacity-0 group-hover:opacity-100 duration-500 invisible transition-opacity group-hover:visible">
                    <div className="container">
                      <div className="flex justify-between">
                        {dataMore.map((item, i) => {
                          return (
                            <div className="flex items-center gap-3 " key={i}>
                              <div>
                                <Image src={item.img} alt="" className="w-14" />
                              </div>
                              <div>
                                <h5 className="text-[#252525] font-bold text-[18px] leading-none">
                                  {item.title}
                                </h5>
                                <p className="text-[#505050] font-normal text-[16px]">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                        <div></div>
                      </div>
                    </div>
                  </div>
                </li>
              ) : (
                <li className="text-white font-semibold font-roboto text-[16px] transition-colors duration-200 group  flex items-center cursor-pointer px-5 py-2.5">
                  <span className="">More</span>
                  <div className="absolute left-0 -bottom-[385px] p-8 bg-white w-full opacity-0 group-hover:opacity-100 duration-500 invisible transition-opacity group-hover:visible">
                    <div className="container">
                      <div className="flex justify-betweenm  gap-10 items-center">
                        <div className="grid grid-cols-2 gap-x-16 gap-y-24 py-2 shrink-0">
                          {dataMore.map((item, i) => {
                            return (
                              <div className="flex items-center gap-3 " key={i}>
                                <div>
                                  <Image
                                    src={item.img}
                                    alt=""
                                    className="w-14"
                                  />
                                </div>
                                <div>
                                  <h5 className="text-[#252525] font-bold text-[18px] leading-none">
                                    {item.title}
                                  </h5>
                                  <p className="text-[#505050] font-normal text-[16px]">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <div className="shrink-0">
                          <Image src={chooeseUsImg} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              )}
            </ul>
            <div className="flex gap-3 mt-5 md:mt-0 md:ml-auto">
              <Link
                href="/"
                className="px-6 py-3 font-roboto text-[16px] font-semibold text-white bg-[#3E3E3E] rounded-full"
              >
                Log In
              </Link>
              <Link
                href="/"
                className="px-6 py-3 font-roboto text-[16px] font-semibold text-white bg-[#E30045] rounded-full"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
