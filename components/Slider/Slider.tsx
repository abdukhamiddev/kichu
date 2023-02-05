import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import {
  Autoplay,
  EffectFade,
  Lazy,
  Navigation,
  Pagination,
  SwiperOptions,
} from "swiper";
import { type Swiper as SwiperRef } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { AutoplayOptions } from "swiper/types";
import { Slider } from "../../@types/slider";
import { isDesktop } from "../../utils/isDesktop";
import SliderControls from "./SliderControls";

import styles from "../../styles/components/Slider.module.scss";
import WorkSlide from "./WorkSlide";
import { WorkSlides } from "../../data";

type Props = {
  className?: string;
  controlsContainerClass?: string;
  swiperOption?: SwiperOptions;
  children?: React.ReactNode;
};

const Slider = ({ controlsContainerClass }: Props) => {
  const swiper = useSwiper();
  const [arrowNextActive, setArrowNextActive] = useState("");
  const [arrowNextHovered, setArrowNextHovered] = useState("");
  const [total, setTotal] = useState<number | string>("");
  const [index, setIndex] = useState<number>();
  const [current, setCurrent] = useState<number | string>("01");
  const swiperRef = useRef<Slider>(null);
  const clazzNextButton = clsx(
    "arrow arrow--next _icon-arrow timer",
    arrowNextActive === "animating" && " animating",
    arrowNextHovered === "hovered" && " hovered"
  );
  const propsSwiper = {
    modules: [Navigation, Pagination, EffectFade, Autoplay, Lazy],
    slidesPerView: "auto",
    spaceBetween: 50,
    speed: 800,
    effect: "fade",
    observer: true,
    observeParents: true,
    autoHeight: true,
    fadeEffect: { crossFade: true },
    preloadImages: false,
    lazy: { checkInView: true, loadOnTransitionStart: true },
    navigation: {
      nextEl: ".arrow--next",
      prevEl: ".arrow--prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    breakpoints: {
      320: {
        allowTouchMove: true,
      },
      768: {
        allowTouchMove: true,
      },
    },
    onSwiper: (swiper: SwiperRef) => {
      swiperRef.current = swiper;
    },
    onInit: (swiper: SwiperRef) => {
      setArrowNextActive("animating");
      updateCounter(swiper);
      autoplayStart(swiper);
      setIndex(swiper.activeIndex);
    },
  } as SwiperOptions;
  const propsControls = {
    isDesktop,
    autoplayStop,
    autoplayStart,
    total,
    current,
    clazzNextButton,
    controlsContainerClass,
  };
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on("slideChange", () => {
        handleSlideChange(swiperRef.current);
        setIndex(swiperRef.current?.activeIndex);
      });
      swiperRef.current.on("transitionStart", () => {
        setArrowNextActive("");
      });

      swiperRef.current.on("transitionEnd", () => {
        setArrowNextActive("animating");
      });
      swiperRef.current.on("touchStart", () => {
        !isDesktop && autoplayStop(swiperRef.current);
      });
      swiperRef.current.on("touchEnd", () => {
        !isDesktop && autoplayStart(swiperRef.current);
      });
    }
  }, [swiperRef]);
  function formatFraction(number: number | string) {
    return +number < 10 ? `0${number}` : number;
  }
  function autoplayStart(swiper: Slider) {
    if (swiper?.params.autoplay) {
      const params = swiper.params.autoplay as AutoplayOptions;
      if (params.delay && params.disableOnInteraction) {
        params.delay = 5000;
        params.disableOnInteraction = false;
      }
    }
    swiper?.autoplay.start();
    setArrowNextHovered("");
  }
  function autoplayStop(swiper: Slider) {
    swiper?.autoplay.stop();
    setArrowNextHovered("hovered");
  }
  function handleSlideChange(swiper: Slider) {
    swiper && setCurrent(formatFraction(++swiper.realIndex));
  }
  function updateCounter(swiper: Slider) {
    if (swiper?.destroyed === true) return;
    const number = formatFraction(swiper?.slides.length || 0);

    setTotal(number);
  }

  const renderText = (i: number) => {
    let text = "";
    switch (i) {
      case 1:
        text = "Take image";
        break;
      case 2:
        text = "Share";
        break;
      case 3:
        text = "Kichu";
        break;
      case 4:
        text = "Save";
        break;
      default:
        break;
    }
    return text;
  };

  return (
    <div className={styles.section}>
      <div className={styles.stepsContainer}>
        <div className={styles.steps}>
          {[...Array(4)].map((_, i) => (
            <button
              key={i}
              className={clsx(
                styles.step,
                index === i && "_active mobile",
                i < index! && "_prev-active"
              )}
            >
              <p className="step-text font-apercu500">
                {i + 1}.<span> {renderText(i + 1)} </span>
              </p>
            </button>
          ))}
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className={styles.pagination}>
            <div className="swiper-pagination"></div>
          </div>
          <div className="hidden md:block">
            <SliderControls
              {...propsControls}
              controlsContainerClass="controls__shell"
            />
          </div>
        </div>
      </div>

      <Swiper className={styles.slider} {...propsSwiper}>
        {WorkSlides.map((obj, index) => {
          return (
            <SwiperSlide className={styles.slide} key={index}>
              <WorkSlide step={index} img={obj.img.webp} text={obj.text} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
