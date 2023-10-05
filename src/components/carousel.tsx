'use client';

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export type CarouselProps = {
  images: { secure_url: string }[];
};

const Carousel = ({ images }: CarouselProps) => {
  return (
    <Swiper
      wrapperClass="flex items-center"
      navigation={true}
      modules={[Navigation, Keyboard]}
      pagination={{}}
      keyboard={{ enabled: true }}>
      {images.map((image, i) => (
        <SwiperSlide key={i}>
          <div className="flex items-center justify-center">
            <img
              src={image.secure_url}
              alt="image"
              className="h-full max-h-[22.5rem] w-full max-w-[100%] select-none object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
