import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation } from "swiper/modules";

const Card = () => {
  return (
    <div className="max-w-[80%] mx-auto">
      <Swiper
        slidesPerView={3}
        spaceBetween={25}
        loop={true}
        fade={"true"}
        grabCursor={true}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        // navigation={true}
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            navigation: false,
          },
          520: {
            slidesPerView: 2,
            navigation: false,
          },
          950: {
            slidesPerView: 3,
          },
        }}
      >
        <div className="mx-5">
          <SwiperSlide className="card rounded-2xl bg-white-light">
            <div className="">
              <div className="">
                <img
                  src="./images/feeding system.png"
                  alt=""
                  className="rounded-t-2xl"
                />
              </div>
            </div>
            <div className="">
              <h2 className="text-xl text-yellow mt-2">Feeding System</h2>
              <p className="text-justify px-2 mb-2">
                Tempat Pakan Otomatis atau Feeding System adalah sistem
                pemberian pakan otomatis dengan teknologi terbaru yang mampu
                mendistribusikan pakan ayam ke Pan Feeder secara berkala
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="card rounded-2xl bg-white-light">
            <div className="">
              <div className="">
                <img
                  src="./images/filling system.png"
                  alt=""
                  className="rounded-t-2xl"
                />
              </div>
            </div>
            <div className="">
              <h2 className="text-xl text-yellow mt-2">Filling System</h2>
              <p className="text-justify px-2 mb-2">
                Filling System adalah sistem distribusi pakan otomatis dengan
                teknologi terbaru dan menjadi sistem yang melengkapi adanya
                Feeding system pada kandang peternakan ayam broiler Anda
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="card rounded-2xl bg-white-light">
            <div className="">
              <div className="">
                <img
                  src="./images/watering system.png"
                  alt=""
                  className="rounded-t-2xl"
                />
              </div>
            </div>
            <div className="">
              <h2 className="text-xl text-yellow mt-2">Watering System</h2>
              <p className="text-justify px-2 mb-2">
                Watering System adalah sistem pemberian minum otomatis dengan
                teknologi terbaru yang mampu menjamin ketersediaan air untuk
                kebutuhan minum ayam Broiler Anda.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="card rounded-2xl bg-white-light">
            <div className="">
              <div className="">
                <img
                  src="./images/medicating system.png"
                  alt=""
                  className="rounded-t-2xl"
                />
              </div>
            </div>
            <div className="">
              <h2 className="text-xl text-yellow mt-2">MEDICATING SYSTEM</h2>
              <p className="text-justify px-2 mb-2">
                Sistem yang menghubungkan sumber air dengan watering system
                dimana kita dapat mengatur sumber air langsung ke kandang atau
                akan mencampurkan larutan tertentu (vitamin, obat-obatan, dan
                sebagainya) sebelum dialirkan ke watering system.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="card rounded-2xl bg-white-light">
            <div className="">
              <div className="">
                <img
                  src="./images/evaporative system.png"
                  alt=""
                  className="rounded-t-2xl"
                />
              </div>
            </div>
            <div className="">
              <h2 className="text-xl text-yellow mt-2">EVAPORATIVE SYSTEM</h2>
              <p className="text-justify px-2 mb-2">
                Evaporative system berfungsi sebagai inlet udara yang berfungsi
                untuk mencapai suhu udara dalam kandang yang dikehendaki.
                Evaporative system dialiri air untuk menghasilkan cooling effect
                dengan memanfaatkan proses penguapan air.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-content">
              <span className="overlay"></span>

              <div>
                <img
                  src="./images/curtain system.png"
                  alt=""
                  className="card-img"
                />
              </div>
            </div>
            <div className="card-content">
              <h2 className="name">CURTAIN SYSTEM</h2>
              <p className="description">
                Curtain system merupakan sistem yang menutup sisi kandang bagian
                samping untuk melindungi ayam dari gangguan luar. Tirai pada
                kandang dihubungkan dengan katrol agar bisa dinaikkan atau
                diturunkan.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-content">
              <span className="overlay"></span>

              <div>
                <img
                  src="./images/lighting system.png"
                  alt=""
                  className="card-img"
                />
              </div>
            </div>
            <div className="card-content">
              <h2 className="name">LIGHTING SYSTEM</h2>
              <p className="description">
                Lighting system pada ternak ayam merupakan sistem program
                pencahayaan yang digunakan untuk memicu meratanya pertumbuhan
                ayam sehingga membuat ayam tumbuh secara seragam.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-content">
              <span className="overlay"></span>

              <div>
                <img
                  src="https://mitraalatternak.co.id/supplierperalatanternak/wp-content/uploads/2023/07/feeding-system.png"
                  alt=""
                  className="card-img"
                />
              </div>
            </div>
            <div className="card-content">
              <h2 className="name">Feeding System</h2>
              <p className="description">
                Tempat Pakan Otomatis atau Feeding System adalah sistem
                pemberian pakan otomatis dengan teknologi terbaru yang mampu
                mendistribusikan pakan ayam ke Pan Feeder secara berkala
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-content">
              <span className="overlay"></span>

              <div>
                <img
                  src="https://mitraalatternak.co.id/supplierperalatanternak/wp-content/uploads/2023/07/feeding-system.png"
                  alt=""
                  className="card-img"
                />
              </div>
            </div>
            <div className="card-content">
              <h2 className="name">Feeding System</h2>
              <p className="description">
                Tempat Pakan Otomatis atau Feeding System adalah sistem
                pemberian pakan otomatis dengan teknologi terbaru yang mampu
                mendistribusikan pakan ayam ke Pan Feeder secara berkala
              </p>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Card;
