import React from "react";
import Phone from "../public/img/phone.webp";
import Coco from "../public/svg/coco-1.svg";
import Coco2 from "../public/svg/coco-2.svg";
import Coco3 from "../public/svg/coco-3.svg";
import Coco4 from "../public/svg/coco-4.svg";
import AboutCard from "@/shared/AboutCard";
import Image from "next/image";
import Button from "@/shared/Button";
const About = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-20">
      <div className="grid justify-items-center">
        <div className="text-center">
          <p className="font-bold font-apercu700">
            WHY
            <span className="text-[#2ca066] "> KICHI? </span>
          </p>
          <h2 className="py-4 text-3xl font-bold font-apercu700">
            So much more than just a translation app
          </h2>
          <p className="opacity-70 text-[#212121] text-[18px]">
            Read more, forget less. Use any image and a few taps to read - and
            remember - anything you'd like
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 space-x-4 pt-28">
        <div className="flex flex-col items-center pt-36 space-y-28">
          <AboutCard
            text="A rapid-reuse image feature helps for learning lots of words from a single image"
            svg={<Coco />}
          />
          <AboutCard
            text="A review scheduler manages your reviews so you don't need to worry about it"
            svg={<Coco2 />}
          />
        </div>
        <div>
          <Image src={Phone} alt="About Image" />
        </div>
        <div className="flex flex-col items-center space-y-28 pt-14">
          <AboutCard
            text="An optional Japanese-Japanese dictionary means you can stay  as immersed in the language as you'd like"
            svg={<Coco3 />}
          />
          <AboutCard
            text="A warning will let you know when you've added the same word twice - no more  double-learning"
            svg={<Coco4 />}
          />
        </div>
      </div>
      <div className="my-24">
        <Button text="Sign Up & Download" className="bg-[#F45814]" />
      </div>
    </div>
  );
};

export default About;
