import React from "react";
import EmailIcon from "../public/svg/eva_email-fill.svg";
import Button from "@/shared/Button";

const Footer = () => {
  return (
    <div className="w-full bg-[#F3F3F1]  my-8  rounded-[2rem] flex flex-col items-center p-10 lg:flex-row lg:space-x-6">
      <div className="flex flex-col justify-between w-full h-full pb-8 lg:pb-0">
        <h1 className="text-[#2ca066] font-apercu700 font-bold">
          CONTACT <span className="text-[#737373]">US</span>
        </h1>
        <div>
          <h1 className="text-[#000000] text-2xl font-apercu700 font-bold pb-8">
            We want to hear from you!
          </h1>
          <p className="pb-4 font-apercu400 ">
            If you have something to say, we want to hear it.If you have a
            feature request,complaint,or something is unclear- we want to know
          </p>
        </div>
        <div className="flex items-center space-x-6">
          <EmailIcon />
          <p className="font-apercu500 ">hello@kichi.io</p>
        </div>
      </div>
      <div className="bg-[#FEFEFD] rounded-[2rem] w-full md:w-auto">
        <form
          action=""
          className="flex flex-col w-auto p-6 space-y-6"
          placeholder="Your Name"
        >
          <input
            type="text"
            name="name"
            id=""
            className="bg-[#f3f3f1] rounded-3xl  px-6 py-2"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="bg-[#f3f3f1] rounded-3xl px-6 py-2"
            placeholder="Your Email"
          />
          <textarea
            className="bg-[#f3f3f1] px-6 py-2 rounded-[1.4rem]"
            placeholder="Your message"
          />
          <Button
            text="Send request"
            className="lg:w-[250px]  whitespace-pre px-0 text-[12px] md:text-base"
          />
        </form>
      </div>
    </div>
  );
};

export default Footer;
