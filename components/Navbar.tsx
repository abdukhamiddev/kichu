import React from "react";
import Logo from "../public/svg/logo.svg";
import Globe from "../public/svg/Globe.svg";
import ArrowDown from "../public/svg/arrow.svg";

const Navbar = () => (
  <div className="">
    <div className="grid grid-cols-11 items-center pt-4 font-apercu400 text-[18px] leading-[24px]">
      <Logo />
      <ul className="flex col-start-2 col-end-9 pl-12 space-x-12 whitespace-pre font-apercu400 ">
        <li>How it works</li>
        <li>Why Kichi</li>
        <li>Pricing</li>
        <li>Download</li>
        <li>Contact</li>
      </ul>
      <div className="flex items-center space-x-10 ">
        <button type="submit" className="flex items-center space-x-2">
          <Globe />
          <span>Eng </span>
          <ArrowDown />
        </button>
        <div className="flex space-x-4">
          <p>Login</p>
          <p className="whitespace-pre text-[#2CA066]">Sign up</p>
        </div>
      </div>
    </div>
  </div>
);

export default Navbar;
