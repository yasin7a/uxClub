import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import logoDark from "../../public/img/logo-dark.png";
import LinkedInIcon from "../icons/LinkedInIcon";
import YouTubeIcon from "../icons/YouTubeIcon";

let SocialLink = ({ children }: { children: ReactNode }) => {
  return (
    <Link
      className="border border-black bg-[#f2f2f2] rounded-3xl px-4  sm:px-5 py-2 flex group  gap-2 font-roboto text-[14px] sm:text-[16px]"
      href={"/"}
    >
      {children}
    </Link>
  );
};
const Footer = () => {
  return (
    <div className="wrap bg-white py-8">
      <div className="container">
        <div className="flex gap-4 items-center justify-between flex-col sm:flex-row">
          {" "}
          <div className="flex gap-2 items-center self-stretch justify-center">
            <Link href="/">
              <Image src={logoDark} alt="" className="w-20" />
            </Link>
            <div className="divider w-[1px] h-full bg-[#989898]"></div>
            <p className="text-[#484848] font-roboto font-normal">
              Online <br /> Courses
            </p>
          </div>
          <div>
            <p className="text-[#a3a3a3] font-roboto font-normal text-[16px]">
              © {new Date().getFullYear()} UX Club
            </p>
          </div>
          <div className="flex gap-3">
            <SocialLink>
              <span className="text-black flex items-center group-hover:text-[#0077B5] transition-colors duration-300">
                <LinkedInIcon />
              </span>
            </SocialLink>
            <SocialLink>
              <span className="text-black flex items-center group-hover:text-[#ff0000] transition-colors duration-300">
                <YouTubeIcon />
              </span>
            </SocialLink>
            <SocialLink>
              <p className="text-[#3c3c3c] whitespace-nowrap">Find us</p>
              <strong className="text-black  group-hover:text-[#3b5998] transition-colors duration-300">
                facebook
              </strong>
            </SocialLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
