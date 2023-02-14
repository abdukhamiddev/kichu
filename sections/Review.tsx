import React from "react";
import Person1 from "../public/img/person-1.webp";
import Person2 from "../public/img/person-2.webp";
import Person3 from "../public/img/person-3.webp";
import Image from "next/image";
import ReviewCard from "../shared/ReviewCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ReviewSlider from "@/components/Slider/ReviewSlider";

const Review = () => {
  return (
    <div className="z-10 pt-20 bg-cover review">
      <div className="grid pt-32 text-center lg:pt-80">
        <div className="pb-10">
          <h4 className="text-[#2ca066] font-bold font-apercu700">REVIEWS</h4>
          <h2 className="text-lg font-apercu400">
            Here's what people say about us
          </h2>
        </div>
        <ReviewSlider />
      </div>
    </div>
  );
};

export default Review;
