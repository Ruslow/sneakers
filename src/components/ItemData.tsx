import React from "react";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import iconCart from "../images/icon-cart-button.svg";
import { useGlobalContext } from "../context/context";
import Button from "./Button";

const ItemData = () => {
  const { amount, showCart, addItems, decreaseAmount, increaseAmount } =
    useGlobalContext()!;

  const name = "Fall limited edition sneakers";
  const price = "$125.00";
  const singleItem = {
    id: Math.random() * 1000000,
    name,
    price,
    amount,
  };
  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    addItems(singleItem);
    showCart();
  };
  return (
    <section className="px-6 pt-5 xl:w-2/4 xl:mt-16">
      <h3 className="text-primary-orange uppercase font-bold text-xs tracking-widest xl:text-lg">
        sneaker company
      </h3>
      <h1 className="font-bold text-3xl capitalize my-4 xl:text-6xl">{name}</h1>
      <p className="text-neutral-darkGrayishBlue xl:text-xl xl:my-11">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <article className="flex justify-between my-6 xl:flex-col xl:gap-y-4">
        <div className="flex gap-x-3 items-center xl:gap-x-5">
          <h2 className="font-bold text-3xl xl:text-4xl">{price}</h2>
          <div className="bg-primary-paleOrange text-primary-orange font-bold px-2 rounded-md xl:text-xl">
            50%
          </div>
        </div>
        <span className="text-neutral-grayishBlue font-bold line-through xl:text-xl xl:mb-6">
          $250.00
        </span>
      </article>
      <div className="xl:flex xl:gap-x-5">
        <div className="flex justify-between items-center w-full bg-neutral-lightGrayishBlue py-4 px-6 mb-4 rounded-xl xl:mb-0 xl:w-5/12 xl:py-5">
          <button onClick={decreaseAmount}>
            <img src={minus} alt="minus" className="xl:w-4" />
          </button>
          <span className="font-bold xl:text-xl">{amount}</span>
          <button onClick={increaseAmount}>
            <img src={plus} alt="plus" className="xl:w-4" />
          </button>
        </div>
        <Button onClick={handleButton}>
          <img src={iconCart} alt="cart" className="w-5" />
          Add to cart
        </Button>
      </div>
    </section>
  );
};

export default ItemData;
