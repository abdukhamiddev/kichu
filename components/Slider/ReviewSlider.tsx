import React from "react";
import Person1 from "../../public/img/person-1.webp";
import Person2 from "../../public/img/person-2.webp";
import Person3 from "../../public/img/person-3.webp";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ReviewCard from "../../shared/ReviewCard";

const ReviewSlider = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      mode: "free-snap",

      slides: {
        perView: 1,
        spacing: 10,
      },
      breakpoints: {
        "(min-width:768px)": {
          slides: {
            perView: 2,
          },
        },
        "(min-width:1180px)": {
          slides: {
            perView: 3,
          },
        },
      },
    },
    []
  );
  return (
    <div ref={sliderRef} className="keen-slider" id="reviewslider">
      <div className="keen-slider__slide">
        <ReviewCard
          imgSrc={Person1}
          text="Useful"
          name="Yasuhisa"
          position="M.D Urologist"
        />
      </div>
      <div className="keen-slider__slide">
        <ReviewCard
          imgSrc={Person2}
          text="Best app, 10/10
      The best app I've
      used thanks to the
      developers"
          name="Jesse"
          position="Nationally Licensed teacher"
        />
      </div>

      <div className="keen-slider__slide">
        <ReviewCard
          imgSrc={Person3}
          text="Useful"
          name="Yasuhisa"
          position="M.D Urologist"
        />
      </div>
    </div>
  );
};

export default ReviewSlider;
