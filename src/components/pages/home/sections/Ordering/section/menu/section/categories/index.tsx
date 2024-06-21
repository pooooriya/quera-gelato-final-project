import CategoryCard from "@/components/basic/card/category-card";
import React from "react";

const fetchCategories = async () => {
  return await fetch(
    "https://restaurant.delino.com/restaurant/menu/252983dd-4fce-4433-b9b0-793651952666"
  )
    .then((res) => res.json())
    .then((res) => res);
};

const Categories = async () => {
  const { categories } = await fetchCategories();

  return (
    <div className="p-3 flex overflow-auto w-[100%] ">
      {categories?.map((item: any) => (
        <div className="w-[100px] mx-10" key={item.id}>
          <CategoryCard {...item} />
        </div>
      ))}
    </div>
  );
};

export default Categories;
