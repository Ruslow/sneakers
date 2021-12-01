import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import ItemData from "./components/ItemData";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";
import { useGlobalContext } from "./context/context";
import Cart from "./components/Cart";
import LightBox from "./components/LightBox";
import BigImage from "./components/BigImage";

function App() {
  const { menu, cart, lightBox } = useGlobalContext()!;

  return (
    <BrowserRouter>
      {menu ? <Menu /> : null}
      {cart ? <Cart /> : null}
      {lightBox ? <LightBox /> : null}
      <Navbar />
      <section className="xl:flex gap-x-28 xl:mt-16 max-w-my mx-auto xl:px-20">
        <div className="xl:w-2/4">
          <BigImage />
          <Slider />
        </div>
        <ItemData />
      </section>
    </BrowserRouter>
  );
}

export default App;
