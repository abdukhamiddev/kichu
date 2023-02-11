import React from "react";

const AboutCard = ({ text, svg }) => {
  return (
    <div className="flex  flex-row items-center md:w-[80vw] justify-center w-full h-[15vh] lg:m-0 m-6 gap-4 px-4 py-3 lg:w-[290px] lg:h-[116px] bg-[#ffffff] rounded-[14px] about">
      <div>{svg}</div>
      <p className={`text-xs font-apercu400  text-[#000000]`}>{text}</p>
    </div>
  );
};

export default AboutCard;
