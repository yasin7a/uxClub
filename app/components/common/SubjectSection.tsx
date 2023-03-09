import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useRef, useState } from "react";
import Slider from "react-slick";
import sliderImg from "../../public/img/test-slider-img.png";
let data = [
  {
    img: sliderImg,
  },
  {
    img: sliderImg,
  },
  {
    img: sliderImg,
  },
  {
    img: sliderImg,
  },
  {
    img: sliderImg,
  },
  {
    img: sliderImg,
  },
  {
    img: sliderImg,
  },
  {
    img: sliderImg,
  },
];

const SubjectSection = () => {
  let settings: any = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const sliderRef = useRef<any>(null);
  const next = () => {
    sliderRef?.current.slickNext();
  };

  const previous = () => {
    sliderRef?.current.slickPrev();
  };
  const [swiped, setSwiped] = useState(false);

  const handleSwiped = useCallback(() => {
    setSwiped(true);
  }, [setSwiped]);

  const handleOnItemClick = useCallback(
    (e: any) => {
      if (swiped) {
        e.stopPropagation();
        e.preventDefault();
        setSwiped(false);
      }
    },
    [swiped]
  );
  return (
    <div className="wrap py-12 bg-white">
      <div className="container text-center">
        <h2 className="text-[24px] sm:text-[28px] font-roboto font-extrabold text-[#252525] leading-none mb-2">
          Learn subject wise
        </h2>
        <p className="text-[16px] sm:text-[18px] text-[#474747] font-hindi-siliguri font-medium">
          যেকোনো বিষয়ের উপর এক্সপার্ট হোন এই স্পেশাল কোর্সে
        </p>
        <div className="">
          <Slider ref={sliderRef} {...settings} onSwipe={handleSwiped}>
            {data.map((item, i) => {
              return (
                <div
                  key={i}
                  className="py-8 px-3"
                  onClickCapture={handleOnItemClick}
                >
                  <Link href="/">
                    <div className=" cursor-pointer  rounded-[18px] onhover:hover:-translate-y-3 transition-transform duration-500">
                      <Image src={item.img} alt="" className="w-full" />
                    </div>
                  </Link>
                </div>
              );
            })}
          </Slider>

          <div className="flex justify-center items-center">
            <button
              className="bg-[#f2f2f2] rounded-bl-full rounded-tl-full p-2 px-4 active:bg-[#e5e5e5]
              onhover:hover:bg-[#e5e5e5] flex justify-center items-center"
              onClick={previous}
            >
              <svg
                width="21"
                height="16"
                viewBox="0 0 21 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.81637 0.382207L9.12337 1.66091L4.01696 6.77571L20.0049 6.77571L20.0049 8.60242L4.01696 8.60242L9.15376 13.7477L7.84676 15.0264L0.521496 7.68906L7.81637 0.382207Z"
                  fill="#393939"
                />
              </svg>
            </button>
            <button
              className="bg-[#f2f2f2] rounded-br-full rounded-tr-full p-2 px-4 active:bg-[#e5e5e5]
              onhover:hover:bg-[#e5e5e5] "
              onClick={next}
            >
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.575 15.0262L11.268 13.7475L16.3745 8.63259H0.386391V6.80586H16.3745L11.2376 1.66055L12.5447 0.381836L19.87 7.71922L12.575 15.0262Z"
                  fill="#393939"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectSection;
