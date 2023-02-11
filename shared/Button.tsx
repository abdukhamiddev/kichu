import React, { ReactNode } from "react";
type Props = {
  className?: string;
  text?: string;
  children?: ReactNode;
};
const Button = ({ className, text, children }: Props) => {
  return (
    <button
      type="button"
      className={`mb-[50px] w-auto rounded-[13px] bg-[#2CA066] px-[60px] py-[14px] text-white ${className} `}
    >
      {text} <div>{children}</div>
    </button>
  );
};

export default Button;
