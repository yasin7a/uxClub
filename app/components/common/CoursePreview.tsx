import React from "react";
import PlayBtnBorder from "../icons/PlayBtnBorder";
import coursePreviewImg from "../../public/img/course-preview.png";
import Image from "next/image";
import Modal from "./Modal";
import { changeModal } from "../../redux/features/modalState/modalStateSlice";
import { useDispatch } from "react-redux";
import YouTube, { YouTubeProps } from "react-youtube";
let youtubeLink = [
  {
    img: coursePreviewImg,
    linkID: "fq_OycNVzRA",
    title: "graphic video",
  },
  {
    img: coursePreviewImg,
    linkID: "fq_OycNVzRA",
    title: "graphic video",
  },
  {
    img: coursePreviewImg,
    linkID: "fq_OycNVzRA",
    title: "graphic video",
  },
  {
    img: coursePreviewImg,
    linkID: "fq_OycNVzRA",
    title: "graphic video",
  },
  {
    img: coursePreviewImg,
    linkID: "fq_OycNVzRA",
    title: "graphic video",
  },
  {
    img: coursePreviewImg,
    linkID: "fq_OycNVzRA",
    title: "graphic video",
  },
];
let mesure = "585px";
const opts: YouTubeProps["opts"] = {
  height: mesure,
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
};
const CoursePreview = () => {
  const dispatch = useDispatch();

  return (
    <div className="wrap py-12 bg-white">
      <div className="container ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {youtubeLink.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <Modal id={i}>
                  <YouTube videoId={item.linkID} opts={opts} />
                </Modal>
                <div
                  className="rounded-[15px] relative cursor-pointer overflow-hidden"
                  onClick={() => dispatch(changeModal(i))}
                >
                  <Image src={item.img} alt="" className="w-full" />
                  <div className="text-[rgba(255,255,255,0.7)] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20">
                    <PlayBtnBorder />
                  </div>
                  <div className="py-6 px-4 pb-3 [background-image:linear-gradient(0deg,#0F1B1B_0%,rgba(15,27,27,0)_55.73%)] absolute bottom-0 w-full">
                    <h3 className=" capitalize font-roboto font-bold text-[14px] text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CoursePreview;
