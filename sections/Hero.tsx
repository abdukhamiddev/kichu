/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";
import Navbar from "../components/Navbar";
import Calendar1 from "../public/svg/calendar1.svg";
import Calendar from "../public/svg/Iconly-Bold-Calendar.svg";
import Paper from "../public/svg/Iconly-Light-Outline-Paper.svg";
import Phone from "../public/svg/phoneHeader.svg";
import ArrowDown from "../public/svg/Option1-Vector.svg";
import slider from "@/components/Slider/Slider";
import Slider from "@/components/Slider/Slider";
import Button from "@/shared/Button";

const Hero = () => (
  <div className="w-full px-[8vw]">
    <Navbar />
    <div className="flex pt-8">
      <div className="md:w-[50vw] pt-8 w-full lg:w-full">
        <h1 className="font-apercu400 md:font-normal font-bold  lg:text-[3.5rem]   leading-[46px] lg:leading-[71px] text-[#262627eb] text-[42px]">
          There's a better way to read Japanese
        </h1>
        <p className="py-[22px] text-sm  md:text-base lg:text-[19px] text-[#212121] opacity-[0.7]">
          Read more, forget less. Use any image and a few taps to read - and
          remember - anything you'd like
        </p>
        <Button text="Sign Up & Download" className="hidden md:flex" />

        <div className="flex items-center justify-between lg:pr-24 font-apercu400 lg:text-sm text-xs text-[#515150]">
          <div className="flex items-center space-x-4">
            <Calendar1 />
            <p>
              Cancel <br /> Anytime
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Calendar />
            <p>
              7 Day <br /> Free Trial
            </p>
          </div>
          <div className="flex items-center">
            <Paper className="mr-4" />
            <p>
              Works with <br /> Printed & digital media
            </p>
          </div>
        </div>
      </div>
      <div className="hidden hero-image md:flex md:w-1/2">
        <Phone className="" />
      </div>
    </div>
    <div className="lg:w-[80vw] flex justify-center text-center pb-[40px] w-full pt-20 md:pt-10 lg:pt-0">
      <div className="lg:w-[60vw] w-full">
        <h1 className="text-[#737373] font-apercu700 font-bold">
          <span className="text-[#2ca066]">HOW</span> IT WORKS
        </h1>
        <p className="text-2xl leading-10 lg:text-3xl font-apercu700">
          Take an image with words you don't know and turn that new vocabulary
          into flashcards
        </p>
      </div>
    </div>
    <div className="section">
      <Slider />
    </div>
  </div>
);

export default Hero;
