import React, { useContext, useState } from "react";
import Images from "../data/Images";

interface IContext {
  menu: boolean;
  cart: boolean;
  hideMenu: () => void;
  showMenu: () => void;
  toggleCart: () => void;
  showCart: () => void;
  closeCart: () => void;
  clear: () => void;
  addItems: (newItem: ISingleItem) => void;
  amount: number;
  sliderValue: number;
  cartItems: ISingleItem[];
  decreaseAmount: () => void;
  increaseAmount: () => void;
  increaseSlider: () => void;
  decreaseSlider: () => void;
  mainImage: (index: number) => void;
  totalAmount: number;
  lightBox: boolean;
  closeLightBox: () => void;
  openLightBox: () => void;
}

export interface ISingleItem {
  id: number;
  name: string;
  price: string;
  amount: number;
}

const MyContext = React.createContext<IContext | null>(null);

export const WrapperContext = ({ children }: { children: React.ReactNode }) => {
  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState(false);
  const [lightBox, setLightBox] = useState(false);
  const [cartItems, setCartItems] = useState<ISingleItem[]>([]);
  const [amount, setAmount] = useState(1);
  const [sliderValue, setSliderValue] = useState(0);
  const hideMenu = () => {
    setMenu(false);
  };
  const showMenu = () => {
    setMenu(true);
  };
  const toggleCart = () => {
    setCart(!cart);
  };
  const showCart = () => {
    setCart(true);
  };
  const closeCart = () => {
    setCart(false);
  };
  const clear = () => {
    setCartItems([]);
  };
  const addItems = (newItem: ISingleItem) => {
    setCartItems([...cartItems, newItem]);
  };

  const decreaseAmount = () => {
    setAmount((value: number) => {
      if (value === 1) {
        return 1;
      }
      return value - 1;
    });
  };
  const increaseAmount = () => {
    setAmount((value: number) => {
      return value + 1;
    });
  };

  const decreaseSlider = () => {
    setSliderValue((value: number) => {
      if (value <= 0) {
        return Images.length - 1;
      }
      return value - 1;
    });
  };
  const increaseSlider = () => {
    setSliderValue((value: number) => {
      if (value >= Images.length - 1) {
        return 0;
      }
      return value + 1;
    });
  };

  const mainImage = (index: number) => {
    setSliderValue(index);
  };

  const totalAmount = cartItems.reduce((acc: number, val: ISingleItem) => {
    acc += val.amount;
    return acc;
  }, 0);

  const closeLightBox = () => {
    setLightBox(false);
  };
  const openLightBox = () => {
    setLightBox(true);
  };

  return (
    <MyContext.Provider
      value={{
        menu,
        hideMenu,
        showMenu,
        cart,
        toggleCart,
        cartItems,
        addItems,
        clear,
        amount,
        decreaseAmount,
        increaseAmount,
        sliderValue,
        showCart,
        closeCart,
        decreaseSlider,
        increaseSlider,
        mainImage,
        totalAmount,
        lightBox,
        openLightBox,
        closeLightBox,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(MyContext);
};
