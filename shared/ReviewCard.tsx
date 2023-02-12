import Image from "next/image";
import React from "react";

type Props = {
  imgSrc?: any;
  name?: string;
  position?: string;
  text?: string;
};
const ReviewCard = ({ imgSrc, name, position, text }: Props) => {
  return (
    <div className="about rounded-[40px] h-[400px]  lg:w-[25vw] my-6 md:w-[40vw]  w-[80vw] bg-white">
      <div className="flex flex-col justify-around w-full h-full">
        <p>"{text}"</p>
        <div className="flex flex-col items-center">
          <Image src={imgSrc} alt="Person1" className="w-16" />
          <p>{name}</p>
          <p>{position}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
