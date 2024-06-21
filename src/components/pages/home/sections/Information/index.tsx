import React from "react";
import { Button } from "@/components/ui/button";

const Information = () => {
  return (
    <div className="my-2 flex justify-between items-center">
      <div>
        <div className="flex items-center">
          <div className="w-2 h-2 ml-2 rounded-full bg-green-400 animate-pulse"></div>
          <h6 className="text-sm text-gray-600">سفارش میپذیریم</h6>
        </div>
        <div className="mt-2">
          <Button variant="outline">محدوده ی سرویس دهی با پیک</Button>
        </div>
      </div>
      <div className="border border-solid border-gray-300 rounded-sm p-2 w-[200px] bg-white">
        <h5 className="font-semibold">میانگین زمان تحویل</h5>
        <div className="flex items-center justify-between">
          <h6 className="text-sm">حضوری</h6>
          <h6 className="text-sm">تا ۱۵ دقیقه</h6>
        </div>
        <div className="flex items-center justify-between">
          <h6 className="text-sm">ارسال با پیک</h6>
          <h6 className="text-sm">تا 120 دقیقه</h6>
        </div>
      </div>
    </div>
  );
};

export default Information;
