import React from "react";

const BannerSection = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const formattedTitlt = title.replace(
    /<(.*?)>/g,
    '<span class="text-[#ffc600]">$1</span>'
  );
  return (
    <div className="bg-[#0F1B1B] wrap">
      <div className="container">
        <div className=" text-center min-h-[22rem] flex flex-col justify-center">
          <div>
            <h2
              className="text-[28px] md:text-[40px] lg:text-[60px] text-white font-black font-roboto leading-none"
              dangerouslySetInnerHTML={{ __html: formattedTitlt }}
            ></h2>
            <p className="text-[16] md:text-[22px] lg:text-[30px] text-white font-semibold font-hindi-siliguri mt-4">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
