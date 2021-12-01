import React from "react";
import { useGlobalContext } from "../context/context";
import Slider from "./Slider";
import closeBtn from "../images/icon-close-white.svg";
import SliderButtons from "./SliderButtons";
import BigImage from "./BigImage";
const LightBox = () => {
  const { closeLightBox } = useGlobalContext()!;
  return (
    <aside className="h-screen bg-neutral-black bg-opacity-75 z-50 w-screen absolute grid place-content-center">
      <div className="relative">
        <img
          onClick={closeLightBox}
          src={closeBtn}
          alt="close"
          className="absolute right-0 w-7 -top-16 cursor-pointer"
        />
        <BigImage />
        <SliderButtons stylesContainer={""} stylesButton={"w-16 h-16 p-5"} />
      </div>
      <Slider />
    </aside>
  );
};

export default LightBox;
