import React from "react";
import Images from "../data/Images";
import { useGlobalContext } from "../context/context";
import SliderButtons from "./SliderButtons";

const Slider = () => {
  const { sliderValue, mainImage } = useGlobalContext()!;
  return (
    <section className="h-76 overflow-hidden relative  xl:h-auto xl:flex">
      <div className="xl:flex xl:w-full xl:justify-between">
        {Images.map((image, index) => {
          const { src, id, alt } = image;
          if (index === sliderValue) {
            return (
              <div
                key={id}
                className="xl:border-solid xl:border-primary-orange xl:border-4 xl:rounded-2xl relative overflow-hidden"
              >
                <div className="hidden xl:block absolute w-full h-full bg-neutral-white opacity-75"></div>
                <img
                  src={src}
                  alt={alt}
                  className="opacity-100 xl:w-24 xl:h-24 cursor-pointer"
                />
              </div>
            );
          }
          return (
            <img
              key={id}
              src={src}
              alt={alt}
              onClick={() => {
                mainImage(index);
              }}
              className={`absolute object-cover opacity-0 xl:opacity-100 xl:relative xl:w-24 xl:h-24 xl:rounded-2xl hover:opacity-30 cursor-pointer`}
            />
          );
        })}
      </div>
      <SliderButtons
        stylesContainer={"xl:hidden px-3"}
        stylesButton={"w-10 h-10 p-3"}
      />
    </section>
  );
};

export default Slider;
