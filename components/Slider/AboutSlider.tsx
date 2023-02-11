import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Coco from "../../public/svg/coco-1.svg";
import Coco2 from "../../public/svg/coco-2.svg";
import Coco3 from "../../public/svg/coco-3.svg";
import Coco4 from "../../public/svg/coco-4.svg";
import AboutCard from "@/shared/AboutCard";

export default function AboutSlider() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      mode: "free-snap",

      slides: {
        perView: 1.5,
        spacing: 20,
      },
    },
    []
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <AboutCard
            text="A rapid-reuse image feature helps for learning lots of words from a single image"
            svg={<Coco />}
          />
        </div>
        <div className="keen-slider__slide ">
          <AboutCard
            text="A review scheduler manages your reviews so you don't need to worry about it"
            svg={<Coco2 />}
          />
        </div>
        <div className="keen-slider__slide ">
          <AboutCard
            text="An optional Japanese-Japanese dictionary means you can stay  as immersed in the language as you'd like"
            svg={<Coco3 />}
          />
        </div>
        <div className="keen-slider__slide ">
          <AboutCard
            text="A warning will let you know when you've added the same word twice - no more  double-learning"
            svg={<Coco4 />}
          />
        </div>
      </div>
    </>
  );
}
