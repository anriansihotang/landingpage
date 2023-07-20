import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation } from "swiper/modules";

const Card = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={25}
        loop={true}
        fade={"true"}
        grabCursor={true}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        navigation={true}
        modules={[Navigation]}
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
        className="max-w-[80%]"
      >
        <SwiperSlide className="">
          <div className="image-content">
            <span className="overlay"></span>

            <div>
              <img
                src="./images/feeding system.png"
                alt=""
                className="card-img"
              />
            </div>
          </div>
          <div className="card-content">
            <h2 className="name">Feeding System</h2>
            <p className="description">
              Tempat Pakan Otomatis atau Feeding System adalah sistem pemberian
              pakan otomatis dengan teknologi terbaru yang mampu
              mendistribusikan pakan ayam ke Pan Feeder secara berkala
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-content">
            <span className="overlay"></span>

            <div>
              <img
                src="./images/filling system.png"
                alt=""
                className="card-img"
              />
            </div>
          </div>
          <div className="card-content">
            <h2 className="name">Filling System</h2>
            <p className="description">
              Filling System adalah sistem distribusi pakan otomatis dengan
              teknologi terbaru dan menjadi sistem yang melengkapi adanya
              Feeding system pada kandang peternakan ayam broiler Anda
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-content">
            <span className="overlay"></span>

            <div>
              <img
                src="./images/watering system.png"
                alt=""
                className="card-img"
              />
            </div>
          </div>
          <div className="card-content">
            <h2 className="name">Watering System</h2>
            <p className="description">
              Watering System adalah sistem pemberian minum otomatis dengan
              teknologi terbaru yang mampu menjamin ketersediaan air untuk
              kebutuhan minum ayam Broiler Anda.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-content">
            <span className="overlay"></span>

            <div>
              <img
                src="./images/medicating system.png"
                alt=""
                className="card-img"
              />
            </div>
          </div>
          <div className="card-content">
            <h2 className="name">MEDICATING SYSTEM</h2>
            <p className="description">
              Sistem yang menghubungkan sumber air dengan watering system dimana
              kita dapat mengatur sumber air langsung ke kandang atau akan
              mencampurkan larutan tertentu (vitamin, obat-obatan, dan
              sebagainya) sebelum dialirkan ke watering system.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-content">
            <span className="overlay"></span>

            <div>
              <img
                src="./images/evaporative system.png"
                alt=""
                className="card-img"
              />
            </div>
          </div>
          <div className="card-content">
            <h2 className="name">EVAPORATIVE SYSTEM</h2>
            <p className="description">
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
                src="https://mitraalatternak.co.id/supplierperalatanternak/wp-content/uploads/2023/07/feeding-system.png"
                alt=""
                className="card-img"
              />
            </div>
          </div>
          <div className="card-content">
            <h2 className="name">Feeding System</h2>
            <p className="description">
              Tempat Pakan Otomatis atau Feeding System adalah sistem pemberian
              pakan otomatis dengan teknologi terbaru yang mampu
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
              Tempat Pakan Otomatis atau Feeding System adalah sistem pemberian
              pakan otomatis dengan teknologi terbaru yang mampu
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
              Tempat Pakan Otomatis atau Feeding System adalah sistem pemberian
              pakan otomatis dengan teknologi terbaru yang mampu
              mendistribusikan pakan ayam ke Pan Feeder secara berkala
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Card;
