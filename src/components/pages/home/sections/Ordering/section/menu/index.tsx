import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import Information from "./section/information";
import Categories from "./section/categories";
import FoodList from "./section/foodlist";

const Menu = () => {
  return (
    <Tabs defaultValue="account">
      <TabsList className="grid w-full grid-cols-2 p-0">
        <TabsTrigger value="information">اطلاعات مجموعه</TabsTrigger>
        <TabsTrigger value="menu">منوی سفارش</TabsTrigger>
      </TabsList>
      <TabsContent value="menu" className="m-0">
        <div className="bg-white w-full rounded-sm justify-center items-center ">
          <Categories />
          <FoodList />
        </div>
      </TabsContent>
      <TabsContent value="information" className="m-0">
        <div className="bg-white w-full rounded-sm">
          <Information />
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default Menu;
