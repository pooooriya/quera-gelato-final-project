import Image from "next/image";
import React from "react";

const CategoryCard = ({ title, customIcon }: any) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={customIcon} alt={title} width={50} height={50} />
      <h6 className="text-sm text-ellipsis overflow-hidden whitespace-nowrap">
        {title}
      </h6>
    </div>
  );
};

export default CategoryCard;
