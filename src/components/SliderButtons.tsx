import React from "react";
import { useGlobalContext } from "../context/context";
import leftButton from "../images/icon-previous.svg";
import rightButton from "../images/icon-next.svg";

const ArrowButton = ({
  src,
  stylesButton,
  logic,
  direction,
}: {
  src: string;
  stylesButton?: string;
  logic: () => void;
  direction: string;
}) => {
  return (
    <button onClick={logic}>
      <img
        src={src}
        alt="buttons"
        className={`bg-neutral-lightGrayishBlue rounded-full transform ${stylesButton} ${
          stylesButton?.includes("w-16") && direction === "left"
            ? "-translate-x-8"
            : stylesButton?.includes("w-16") && direction === "right"
            ? "translate-x-8"
            : ""
        }`}
      />
    </button>
  );
};

const SliderButtons = ({
  stylesButton,
  stylesContainer,
}: {
  stylesButton?: string;
  stylesContainer?: string;
}) => {
  const { decreaseSlider, increaseSlider } = useGlobalContext()!;
  return (
    <div
      className={`absolute top-1/2 flex justify-between w-full transform -translate-y-1/2 ${stylesContainer}`}
    >
      <ArrowButton
        direction={"left"}
        src={leftButton}
        stylesButton={stylesButton}
        logic={decreaseSlider}
      />
      <ArrowButton
        direction={"right"}
        src={rightButton}
        stylesButton={stylesButton}
        logic={increaseSlider}
      />
    </div>
  );
};

export default SliderButtons;
