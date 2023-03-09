import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import AvatarIcon from "../icons/AvatarIcon";
import AvatarNotAllow from "../icons/AvatarNotAllow";
import LoveIcon from "../icons/LoveIcon";
import PauseIcon from "../icons/PauseIcon";

let menu = [
  {
    name: "Guidelines",
  },
  {
    name: "My Course",
  },
  {
    name: "Review",
  },
  {
    name: "Certificate ",
  },
  {
    name: "Payments ",
  },
  {
    name: "Update",
  },
];

let TimelineBody = ({
  children,
  icon,

  islast = false,
  textWidth,
}: {
  icon: ReactNode;
  children: ReactNode;
  islast?: boolean;
  textWidth?: string;
}) => (
  <>
    <li className="relative flex items-center gap-6 pb-8">
      <div
        className={`${
          !islast ? "before:absolute" : ""
        } before:left-[20px] before:top-[42px] before:h-full before:w-[1px] before:bg-gray-400 `}
      >
        <div className="border-4 border-white bg-white rounded-full relative">
          {icon}
        </div>
      </div>
      <div>
        <p
          className={`mt-2 text-[#303030] text-[14px] font-hindi-siliguri font-medium ${textWidth}`}
        >
          {children}
        </p>
      </div>
    </li>
  </>
);
const ProfileSection = () => {
  let {
    query: { action },
  } = useRouter();
  return (
    <>
      <div className="bg-[#612F64] wrap py-8 relative">
        <div className="container">
          <div className="flex items-center gap-4">
            <div className="shrink-0  relative rounded-[50%] w-[160px] h-[160px] overflow-hidden ">
              <Image
                fill
                src={
                  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                }
                alt=""
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                className="object-cover object-center"
              />
            </div>
            <div className="font-roboto text-white">
              <h4 className="font-bold text-[24px]">Arif Hossain</h4>
              <p className="font-normal text-[16px]">arifemail@gmail.com</p>
              <button className="bg-white bg-opacity-30 rounded-full px-5 text-[16px] py-2 font-medium mt-2">
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white wrap py-8 relative">
        <div className="container">
          <ul className="flex gap-6 items-center border-b-2 border-[#D9D9D9] pb-3">
            {menu.map((item, i) => {
              return (
                <li key={i}>
                  {}
                  <Link
                    scroll={false}
                    href={`/?action=${item.name.toLowerCase()}`}
                    className={`${
                      item.name.toLowerCase() == action
                        ? "text-[#E30045] border-[#E30045]"
                        : "text-[#363636] border-transparent"
                    }                  
                    hover:text-[#E30045] transition-all font-roboto font-medium text-[16px] pb-3.5 border-b-2 border-transparent hover:border-[#E30045]`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="py-5">
            <div className=" rounded-lg sm:rounded-full bg-[#eeca6f1a] flex flex-col sm:flex-row   items-center gap-3  p-3">
              <div className="rounded-full text-[#303030] font-roboto font-normal bg-[#FFBE15] text-[16px] px-5 py-2">
                Update
              </div>
              <div>
                <p className=" font-hindi-siliguri text-[14px] text-[#303030] text-center  sm:text-left">
                  আমাদের ওয়েব ডিজাইন কোর্সে কয়েকটি লিসন আপডেট হয়েছে, দেখে নিন
                  এবং সাময়িক কারনে আমাদের অ্যাপ কোর্সের কিছু ক্লাস বাকি আছে।
                </p>
              </div>
            </div>
          </div>

          <div>
            <ul>
              <TimelineBody icon={<AvatarIcon />} textWidth="w-[36rem]">
                প্রিয় শিক্ষার্থী, প্রোফাইলে আপনার{" "}
                <strong>সঠিক নাম ও তথ্য দিয়ে আপডেট রাখুন</strong> কেননা এই
                তথ্যের ভিত্তিতেই আপনার <strong>সার্টিফিকেট তৈরি হবে</strong>,
                এবং গিফট পাঠানো যেতে পারে।
              </TimelineBody>

              <TimelineBody icon={<AvatarNotAllow />} textWidth="w-[34rem]">
                আপনার পাসওয়ার্ড অন্যের সাথে শেয়ার করবেন না, যাতে আপনার অ্যাক্সেস
                ত্রুটিমুক্ত থাকে আপনার যেকোনো প্রয়োজনে আমাদের সাপোর্ট থেকে
                সহায়তা নিতে পারেন।
              </TimelineBody>

              <TimelineBody icon={<PauseIcon />} textWidth="w-[26rem]">
                এগিয়ে থাকতে ধারাবাহিক ভাবে শিখুন, কোর্সে যেকোনো আপডেট আসলে তা
                Update-এ জািনয় েদেয়া হেব
              </TimelineBody>

              <TimelineBody icon={<LoveIcon />} islast>
                <strong>শুভকামনা, </strong> <br />
                এগিয়ে চলুন ইউ এক্স ক্লাবের সাথে।
              </TimelineBody>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSection;
