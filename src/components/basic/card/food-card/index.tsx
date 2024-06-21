import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const FoodCard = ({ img, title, price, handleIncrement, HandleDecrement }) => {
  return (
    <div>
      <div>
        <Image
          src={img?.replace("#SIZEOFIMAGE#", "560x350")}
          width={300}
          height={300}
          alt=""
        />
      </div>
      <div className="flex flex-col p-2">
        <div className="self-end">
          <h2 className="text-sm font-semibold">{title}</h2>
        </div>
        <div className="flex items-center justify-between">
          <div className="[&>button]:mx-1">
            <Button onClick={handleIncrement}>+</Button>
            <Button onClick={HandleDecrement}>-</Button>
          </div>
          <div>{price} ت</div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
