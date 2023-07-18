import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
const Card = () => {
  return (
    <Swiper
      slidesPerView={3}
	  spaceBetween={50}
	  loop={true}
	  fade={'true'}
	  grabCursor={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}

    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
	  <SwiperSlide>Slide 5</SwiperSlide>
	  <SwiperSlide>Slide 6</SwiperSlide>
	  <SwiperSlide>Slide 7</SwiperSlide>
    </Swiper>
  );
};

export default Card;
