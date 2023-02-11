import React from "react";
import Logo from "../public/svg/logo.svg";
import Globe from "../public/svg/Globe.svg";
import ArrowDown from "../public/svg/arrow.svg";

const Navbar = () => (
  <div className="">
    <div className="flex justify-between items-center pt-4 font-apercu400 md:text-[16px] lg:text-[16px] leading-[24px] xl:text-[18px]">
      <Logo className="" />
      <ul className="hidden whitespace-pre lg:space-x-12 lg:flex font-apercu400 nav md:px-4 lg:px-0">
        <li>How it works</li>
        <li>Why Kichi</li>
        <li>Pricing</li>
        <li>Download</li>
        <li>Contact</li>
      </ul>
      <div className="flex items-center ">
        <button type="submit" className="items-center hidden space-x-2 lg:flex">
          <Globe />
          <span>Eng </span>
          <ArrowDown />
        </button>
      </div>

      <div className="flex space-x-4">
        <button>Login</button>
        <button className="whitespace-pre text-[#2CA066]">Sign up</button>
      </div>
    </div>
  </div>
);

export default Navbar;
