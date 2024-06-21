"use client";
import BasketCard from "@/components/basic/card/basket-card";
import { AppContext } from "@/context/store";
import React, { useContext } from "react";

const Basket = () => {
  const { basket } = useContext(AppContext);

  console.log(basket.reduce((acc, cur) => (acc += cur.count), 0));
  return (
    <div
      className="p-2 bg-white
  border border-solid border-gray-200 rounded-sm"
    >
      <h2>سبد خرید</h2>
      {basket.map((item: any) => (
        <BasketCard
          key={item.title}
          src={item.img?.replace("#SIZEOFIMAGE#", "560x350")}
          price={item.price}
          title={item.title}
          count={item.count}
        />
      ))}

      <div>
        مجموع : {basket.reduce((acc, cur) => (acc += cur.count * cur.price), 0)}
      </div>
      <div>تعداد : {basket.reduce((acc, cur) => (acc += cur.count), 0)}</div>
    </div>
  );
};

export default Basket;
