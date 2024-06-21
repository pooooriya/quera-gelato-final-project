"use client";
import FoodCard from "@/components/basic/card/food-card";
import { AppContext } from "@/context/store";
import React, { useContext, useEffect, useState } from "react";

const FoodList = () => {
  const { basket, setBasket } = useContext(AppContext);

  const [state, setstate] = useState([]);
  useEffect(() => {
    fetchFood();
  }, []);

  const fetchFood = async () => {
    const { categories } = await fetch(
      "https://restaurant.delino.com/restaurant/menu/252983dd-4fce-4433-b9b0-793651952666"
    )
      .then((res) => res.json())
      .then((res) => res);
    setstate(categories);
  };

  const handleAddToBasket = (item: any) => {
    let currentItem = basket.filter((x) => x.id === item.id);

    const copyBasket = [...basket];

    if (currentItem.length > 0) {
      for (const elem of copyBasket) {
        if (elem.id === item.id) {
          if (elem.count) {
            elem.count += 1;
          } else {
            elem.count = 1;
          }
        }
      }

      setBasket(copyBasket);
      return;
    }

    item.count = 1;
    setBasket([...basket, item]);
  };
  const handleRemoveFromBasket = (item: any) => {
    // 1. is exist !

    const currentItem = basket.filter((x) => x.id === item.id);

    if (currentItem.length > 0) {
      let copyBasket = [...basket];
      for (const elem of copyBasket) {
        if (elem.id === item.id) {
          if (elem.count > 1) {
            elem.count -= 1;
          } else {
            copyBasket = copyBasket.filter((x) => x.id !== item.id);
          }
        }
      }
      setBasket(copyBasket);
    }
  };

  return (
    <div>
      {state.map((item: any) => {
        return (
          <div key={item.title} className="flex flex-col">
            <h2 className="text-sm font-semibold">{item.title}</h2>
            <div className="flex flex-wrap [&>div]:mx-2">
              {item.sub[0].food.map((item: any) => (
                <div className="w-4/12" key={item.title}>
                  <FoodCard
                    {...item}
                    handleIncrement={() => handleAddToBasket(item)}
                    HandleDecrement={() => handleRemoveFromBasket(item)}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FoodList;
