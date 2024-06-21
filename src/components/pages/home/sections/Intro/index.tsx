import Slider from "@/components/basic/slider";
import React from "react";

const fetchSliders = async () => {
  return await fetch(
    "https://restaurant.delino.com/subscriber/sliders/10tQStiKTniALgYpYQ4hm0UCuadXWbHdMklMIpyTE5DSzkNSfx1r2p02pqg3QKx3"
  )
    .then((res) => res.json())
    .then((res) => res);
};

const Intro = async () => {
  const sliders = await fetchSliders();
  return (
    <div className="my-5 max-h-[400px] overflow-hidden">
      <Slider images={sliders} />
    </div>
  );
};

export default Intro;
