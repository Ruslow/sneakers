import React from "react";
import iconMenu from "../images/icon-menu.svg";
import cartIcon from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import logo from "../images/logo.svg";
import Links from "../data/Links";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const Navbar = () => {
  const { showMenu, toggleCart, cartItems, totalAmount } = useGlobalContext()!;

  return (
    <>
      <nav className="px-6 py-5">
        <div className="max-w-my mx-auto">
          <div className="bg-neutral-white flex justify-between items-center">
            <div className="flex items-center gap-x-3 xl:gap-x-16">
              <button onClick={showMenu} className="xl:hidden">
                <img src={iconMenu} alt="bar" />
              </button>
              <img src={logo} alt="sneakers" className="xl:w-36" />
              <ul className="hidden xl:flex gap-x-10 text-base text-neutral-darkGrayishBlue">
                {Links.map((link) => {
                  const { name, to, id } = link;
                  return (
                    <li key={id}>
                      <Link to={to}>{name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex items-center gap-x-5 xl:gap-x-12">
              <button className="relative" onClick={toggleCart}>
                {cartItems.length !== 0 ? (
                  <span className="absolute -top-1 bg-primary-orange text-neutral-white rounded-full px-2 text-xs font-bold">
                    {totalAmount}
                  </span>
                ) : null}
                <img src={cartIcon} alt="cart" className="xl:w-6" />
              </button>
              <img
                src={avatar}
                alt="avatar"
                className="w-6 hover:border-primary-orange cursor-pointer hover:border-solid xl:border-2 rounded-full xl:w-14 transition-colors"
              />
            </div>
          </div>
          <hr className="hidden mt-9 lg:block" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
