import React from "react";
import { Link } from "react-router-dom";
import Links from "../data/Links";
import closeImage from "../images/icon-close.svg";
import { useGlobalContext } from "../context/context";

const Menu = () => {
  const { hideMenu } = useGlobalContext()!;
  return (
    <aside className="w-full h-screen absolute bg-neutral-black bg-opacity-75 z-40">
      <div className={`bg-neutral-white w-4/6 h-full px-7 pt-5`}>
        <img src={closeImage} alt="close" onClick={hideMenu} />
        <ul className="font-bold mt-12 leading-extra-loose text-lg">
          {Links.map((link) => {
            const { id, name, to } = link;
            return (
              <li key={id}>
                <Link to={to}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Menu;
