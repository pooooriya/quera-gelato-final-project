import Image from "next/image";
import React from "react";

const BasketCard = ({ src, title, price, count }) => {
  return (
    <div>
      <Image src={src} width={50} height={50} alt="" />
      <div>
        <h6>
          {title} ({count})
        </h6>
        <h6>{price}</h6>
      </div>
    </div>
  );
};

export default BasketCard;
