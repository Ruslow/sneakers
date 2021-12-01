import React from "react";
import { useGlobalContext } from "../context/context";
import Images from "../data/Images";

const BigImage = () => {
  const { openLightBox, sliderValue } = useGlobalContext()!;
  const displayedImage = (val: number) => {
    return Images.find((image) => image.id === val + 1)?.src;
  };
  return (
    <img
      onClick={openLightBox}
      src={displayedImage(sliderValue)}
      alt="sneakers"
      className={`hidden xl:block object-cover rounded-2xl w-full mb-10 h-120 cursor-pointer`}
    />
  );
};

export default BigImage;
