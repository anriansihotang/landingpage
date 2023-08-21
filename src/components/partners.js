import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Partners() {
  return (
    <div className="bg-cream py-10">
      <section className="max-w-[80%] mx-auto">
        <h2 className="text-yellow lg:text-5xl text-4xl	font-bold mb-4">
          PARTNER KAMI
        </h2>
        <div className="overflow-hidden">
          <Swiper
            spaceBetween={25}
            slidesPerView={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              520: {
                slidesPerView: 2,
              },
              950: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay, Pagination]}
          >
            <SwiperSlide>
              <center>
                <img src="./images/web.png" alt="" />
              </center>
            </SwiperSlide>
            <SwiperSlide>
              <center>
                <img src="./images/web2.png" alt="" />
              </center>
            </SwiperSlide>
            <SwiperSlide>
              <center>
                <img src="./images/web3.png" alt="" />
              </center>
            </SwiperSlide>
            <SwiperSlide>
              <center>
                <img src="./images/web4.png" alt="" />
              </center>
            </SwiperSlide>
            <SwiperSlide>
              <center>
                <img src="./images/web5.png" alt="" />
              </center>
            </SwiperSlide>
            <SwiperSlide>
              <center>
                <img src="./images/web6.png" alt="" />
              </center>
            </SwiperSlide>
            .
          </Swiper>
        </div>
      </section>
    </div>
  );
}
