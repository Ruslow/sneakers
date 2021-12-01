import React from "react";
import { useGlobalContext } from "../context/context";
import Button from "./Button";
import deleteIcon from "../images/icon-delete.svg";
import smallImg from "../images/image-product-1-thumbnail.jpg";
const Cart = () => {
  const { cartItems, clear } = useGlobalContext()!;

  return (
    <aside className="absolute w-full px-2 z-20 top-20 shadow-2xl xl:w-96 xl:right-72 xl:top-28">
      <div className="bg-neutral-white w-full rounded-xl min-h-need">
        <div className="heading">
          <h3 className="font-bold py-5 pl-6">Cart</h3>
          <hr />
        </div>
        <div className="relative">
          {cartItems.length === 0 ? (
            <h3 className="text-neutral-darkGrayishBlue font-bold text-center mt-20 tracking-wide">
              Your cart is empty.
            </h3>
          ) : (
            <div className="px-6 py-8">
              {cartItems.map((item) => {
                const { id, name, price, amount } = item;
                return (
                  <div
                    className="flex items-center mb-6 justify-between text-neutral-darkGrayishBlue"
                    key={id}
                  >
                    <img
                      src={smallImg}
                      alt="image1"
                      className="w-14 rounded-lg "
                    />
                    <article>
                      <h4 className="capitalize">{`${name.substring(
                        0,
                        22
                      )}...`}</h4>
                      <h4>
                        {price} x {amount}
                        <strong className="text-neutral-black">
                          {" "}
                          {`$${(+price.slice(1) * amount).toFixed(2)}`}
                        </strong>
                      </h4>
                    </article>
                    <button onClick={clear}>
                      <img src={deleteIcon} alt="delete" />
                    </button>
                  </div>
                );
              })}
              <Button>Checkout</Button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Cart;
