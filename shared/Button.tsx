import React from "react";
type Props = {
  className?: string;
  text?: string;
};
const Button = ({ className, text }: Props) => {
  return (
    <button
      type="button"
      className={`mb-[50px] w-auto rounded-[13px] bg-[#2CA066] px-[60px] py-[14px] text-white ${className} `}
    >
      {text}
    </button>
  );
};

export default Button;
