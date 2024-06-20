"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const Slider = ({ images }: any) => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      {images?.map((image: any) => (
        <SwiperSlide key={image.src}>
          <Image
            src={image.src}
            width={1000}
            height={1000}
            alt="gelato"
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
