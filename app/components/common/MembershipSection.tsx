import React, { ReactNode } from "react";

let GradientText = ({ children }: { children: ReactNode }) => {
  return (
    <span className="text-transparent bg-clip-text [background-image:linear-gradient(-40deg,#FF00A8EB_-15%,#FC2930_77%)]">
      {children}
    </span>
  );
};
const MembershipSection = () => {
  return (
    <>
      <div className="wrap py-12   relative ">
        <div className="relative bg-[url('../../public/img/celebration-banner.png')] h-0 pt-[32%] bg-no-repeat bg-cover after:w-full after:h-full after:bg-[#431e4ea2] after:z-10 after:absolute after:inset-0"></div>
        <div className="container bg-white p-5 sm:p-10 rounded-2xl shadow-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-0 z-10 absolute">
          <h2 className="font-roboto text-[9vw] sm:text-[5vw] leading-none font-black text-center sm:text-left">
            <GradientText>
              Become a<br />
            </GradientText>
            <GradientText>Member</GradientText>
            <GradientText>
              <br /> Get
            </GradientText>
            <span className="text-[#4F1E52]"> All Courses</span>
          </h2>
          <div className="md:flex justify-between items-end gap-5 ">
            <ul className="text-[#606060] font-hindi-siliguri font-medium text-[16px] mt-8 list-disc ml-[0.9rem] ">
              <li>
                <p>
                  মেম্বার হয়ে আমাদের সবগুলো কোর্স পান{" "}
                  <span className="text-[#FC2B48]">৫০% কম খরচে</span>
                </p>
              </li>
              <li>
                <p>ধারাবাহিক ভাবে স্কিল বাড়বে</p>
              </li>
              <li>
                <p>পরবর্তী কোর্সগুলো পেতে থাকবেন</p>
              </li>
              <li>
                <p>স্পেশাল কেয়ার পাবেন মেন্টরের কাছে</p>
              </li>
              <li>
                <p> প্রিমিয়াম মেম্বারশিপে থাকবে স্পেশাল গিফট বক্স</p>
              </li>
            </ul>
            <div className="mt-4 md:mt-0 flex justify-center">
              <button className="bg-[#EFEDEF] px-14 py-5 rounded-full flex justify-center hover:[background-image:linear-gradient(-90deg,#FF036A_0%,#FB520A_100%)] group transition-all duration-500 w-20 hover:w-52 relative">
                <span className="absolute font-roboto text-white scale-0 group-hover:scale-100 transition-all opacity-0 group-hover:opacity-100 -translate-x-48 group-hover:-translate-x-16 whitespace-nowrap  duration-500 left-1/2 top-1/2 -translate-y-1/2 origin-left">
                  Get 50% Off
                </span>
                <span className="inline-block w-6 shrink-0 translate-x-0 group-hover:translate-x-11 transition-transform duration-500 ">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.575 15.0262L11.268 13.7475L16.3745 8.63259H0.386391V6.80586H16.3745L11.2376 1.66055L12.5447 0.381836L19.87 7.71922L12.575 15.0262Z"
                      className="fill-[#7E7E7E] onhover:group-hover:fill-[#FFF]"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-80 sm:h-64"></div>
    </>
  );
};

export default MembershipSection;
