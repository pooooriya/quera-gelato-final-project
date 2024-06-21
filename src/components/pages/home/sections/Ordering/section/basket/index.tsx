"use client";
import BasketCard from "@/components/basic/card/basket-card";
import React, { useContext } from "react";
import { useSelector } from "react-redux";

const Basket = () => {
  const basket = useSelector((elm) => elm.basket);
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
