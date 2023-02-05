import React from "react";

const AboutCard = ({ text, svg }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-4 px-4 py-3 w-[290px] h-[116px] bg-[#ffffff] rounded-[14px] about">
      <div>{svg}</div>
      <p className={`text-xs font-apercu400  text-[#000000]`}>{text}</p>
    </div>
  );
};

export default AboutCard;
