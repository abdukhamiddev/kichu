/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";
import Navbar from "../components/Navbar";
import Calendar1 from "../public/svg/calendar1.svg";
import Calendar from "../public/svg/Iconly-Bold-Calendar.svg";
import Paper from "../public/svg/Iconly-Light-Outline-Paper.svg";
import Phone from "../public/svg/phoneHeader.svg";
import slider from "@/components/Slider/Slider";
import Slider from "@/components/Slider/Slider";

const Hero = () => (
  <div className="w-full px-[8vw]">
    <Navbar />
    <div className="flex pt-8">
      <div className="w-[50vw] pt-8">
        <h1 className="font-apercu400 text-[3.5rem] leading-[71px] text-[#262627eb]">
          There's a better way to read Japanese
        </h1>
        <p className="py-[22px] text-[19px] text-[#212121] opacity-[0.7]">
          Read more, forget less. Use any image and a few taps to read - and
          remember - anything you'd like
        </p>
        <button
          type="button"
          className=" mb-[50px] w-[250px] rounded-[13px] bg-[#2CA066] px-[24px] py-[14px] text-white"
        >
          Sign Up & Download{" "}
        </button>
        <div className="flex items-center justify-between pr-24 font-apercu400 text-sm text-[#515150]">
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
      <div className="hero-image">
        <Phone />
      </div>
    </div>
    <div className="w-[80vw] flex justify-center text-center pb-[40px]">
      <div className="w-[60vw]">
        <h1 className="text-[#737373] font-apercu700 font-bold">
          <span className="text-[#2ca066]">HOW</span> IT WORKS
        </h1>
        <p className="text-3xl leading-10 font-apercu700">
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
