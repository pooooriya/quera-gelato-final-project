import React from "react";
import Menu from "./section/menu";
import Basket from "./section/basket";

const Ordering = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-9/12 pl-2">
        <Menu />
      </div>
      <div className="w-full md:w-3/12 pr-2">
        <Basket />
      </div>
    </div>
  );
};

export default Ordering;
