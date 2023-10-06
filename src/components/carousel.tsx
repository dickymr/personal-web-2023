'use client';

import React from 'react';
import Image from 'next/image';

import Slider from 'react-slick';

import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

export type CarouselProps = {
  images: { secure_url: string }[];
};

const Carousel = ({ images }: CarouselProps) => {
  const NextArrow = ({ className, onClick }: any): JSX.Element => (
    <div
      className={cn(
        className,
        'absolute right-1 z-10',
        'flex items-center justify-center',
        'h-7 w-7 border text-xl text-primary/50 hover:text-primary/75',
      )}
      onClick={onClick}>
      <Icons.chevronRightCircle className="h-full w-full" />
    </div>
  );

  const PrevArrow = ({ className, onClick }: any): JSX.Element => (
    <div
      className={cn(
        className,
        'absolute left-1 z-10',
        'flex items-center justify-center',
        'h-7 w-7 border text-xl text-primary/50 hover:text-primary/75',
      )}
      onClick={onClick}>
      <Icons.chevronLeftCircle className="h-full w-full" />
    </div>
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings}>
      {/* ts-ignore */}
      {images.map((image, i) => (
        <div key={i} className="relative h-[15rem] md:h-[25rem]">
          <Image className="object-contain" src={image.secure_url} alt="image" fill />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
