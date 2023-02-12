import React from "react";
import GreenCheck from "../public/svg/check-green.svg";
import OrangeCheck from "../public/svg/check-orange.svg";
import Button from "@/shared/Button";

const Pricing = () => {
  return (
    <div className="bg-[#263238] grid justify-items-center mt-28">
      <div className="pt-8 space-y-2 text-center">
        <h1 className="text-[#c4c4c4] font-bold font-apercu400">
          CHOOSE <span className="text-[#2ca066]">YOUR PLAN</span>
        </h1>
        <h2 className="text-[#eeeeee] font-apercu500 lg:text-[36px] text-3xl">
          Kichi's pricing is super simple
        </h2>
        <p className="text-[#cccccc] lg:text-base font-apercu400 text-sm">
          Pick between monthly or annual pricing and get 7 DAYS FREE TRIAL
          now...
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 py-10 space-y-8 md:space-y-0 md:grid-cols-2 justify-items-center">
        <div className="bg-[#ffffff] w-[300px] h-[400px] rounded-[10px]">
          <div className="flex flex-col items-center justify-between w-full h-full pt-6">
            <div>
              <p className="text-3xl">
                7.90 <span className="text-xl">$</span>
                <span className="text-lg"> /month</span>
              </p>
            </div>

            <ul className="flex flex-col price ">
              <li className="">
                <GreenCheck /> <p> 7 day free trial</p>
              </li>
              <li className="">
                <GreenCheck /> <p> Unlimited Flashcards</p>
              </li>
              <li className="">
                <GreenCheck /> <p> Cloud sync and backup</p>
              </li>

              <li className="">
                <GreenCheck /> <p> Cancel anytime</p>
              </li>
            </ul>
            <Button text="Start FREE" className="w-[210px]" />
          </div>
        </div>
        <div className="bg-[#ffffff] w-[300px] h-[400px] rounded-[10px]">
          <div className="flex flex-col items-center justify-between w-full h-full pt-6">
            <div>
              <p className="text-3xl">
                9.90 <span className="text-xl">$</span>
                <span className="text-lg"> /month</span>
              </p>
            </div>

            <ul className="flex flex-col price">
              <li className="">
                <OrangeCheck /> <p> 7 day free trial</p>
              </li>
              <li className="">
                <OrangeCheck /> <p> Unlimited Flashcards</p>
              </li>
              <li className="">
                <OrangeCheck /> <p> Cloud sync and backup</p>
              </li>

              <li className="">
                <OrangeCheck /> <p> Cancel anytime</p>
              </li>
            </ul>
            <Button text="Start FREE" className="w-[210px] bg-[#ffa033]" />
          </div>
        </div>
      </div>
      <Button text="Sign up & try Kichi now" className=" bg-[#F45814] my-14" />
    </div>
  );
};

export default Pricing;
