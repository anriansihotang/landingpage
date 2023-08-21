/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination, Navigation } from "swiper/modules";

const Product = () => {
  return (
    <div className="bg-pink py-10" name="product">
      <section className="max-w-[80%] mx-auto">
        <h2 className="text-yellow text-5xl text-center font-bold ">PRODUK</h2>
        <p className="text-pink-text text-center text-3xl mb-3">
          Kami Menyediakan Peralatan Ternak <br />
          Terlengkap dan Terbaik Untuk Anda
        </p>
      </section>
      <div className="max-w-[80%] mx-auto flex overflow-hidden">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          fade={"true"}
          grabCursor={true}
          navigation={false}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
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
          className="myswiper"
        >
          <div className="mx-5">
            <SwiperSlide className="card rounded-2xl bg-white">
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
                <h2 className="text-3xl text-black mt-2">Feeding System</h2>
                <p className="text-2xl text-center px-2 mb-2">
                  Tempat Pakan Otomatis atau Feeding System adalah sistem
                  pemberian pakan otomatis dengan teknologi terbaru yang mampu
                  mendistribusikan pakan ayam ke Pan Feeder secara berkala.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="card rounded-2xl bg-white">
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
                <h2 className="text-3xl text-black mt-2">Filling System</h2>
                <p className="text-2xl text-center px-2 mb-2">
                  Filling System adalah sistem distribusi pakan otomatis dengan
                  teknologi terbaru dan menjadi sistem yang melengkapi adanya
                  Feeding system pada kandang peternakan ayam broiler Anda.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="card rounded-2xl bg-white">
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
                <h2 className="text-3xl text-black mt-2">Watering System</h2>
                <p className="text-2xl text-center px-2 mb-2">
                  Watering System adalah sistem pemberian minum otomatis dengan
                  teknologi terbaru yang mampu menjamin ketersediaan air untuk
                  kebutuhan minum ayam Broiler Anda.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="card rounded-2xl bg-white">
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
                <h2 className="text-3xl text-black mt-2">MEDICATING SYSTEM</h2>
                <p className="text-2xl text-center px-2 mb-2">
                  Medicating system berfungsi untuk mencampurkan larutan
                  tertentu seperti vitamin dan obat-obatan sebelum dialirkan ke
                  watering system.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="card rounded-2xl bg-white">
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
                <h2 className="text-3xl text-black mt-2">EVAPORATIVE SYSTEM</h2>
                <p className="text-2xl text-center px-2 mb-2">
                  Evaporative system berfungsi sebagai inlet udara yang
                  berfungsi untuk mencapai suhu udara dalam kandang yang
                  dikehendaki.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="card rounded-2xl bg-white">
              <div className="">
                <div>
                  <img
                    src="./images/curtain system.png"
                    alt=""
                    className="rounded-t-2xl"
                  />
                </div>
              </div>
              <div className="">
                <h2 className="text-3xl text-black mt-2">CURTAIN SYSTEM</h2>
                <p className="text-2xl text-center px-2 mb-2">
                  Curtain system merupakan sistem yang menutup sisi kandang
                  bagian samping untuk melindungi ayam dari gangguan luar. Tirai
                  pada kandang dihubungkan dengan katrol agar bisa dinaikkan
                  atau diturunkan.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="card rounded-2xl bg-white">
              <div className="">
                <div>
                  <img
                    src="./images/lighting system.png"
                    alt=""
                    className="rounded-t-2xl"
                  />
                </div>
              </div>
              <div className="">
                <h2 className="text-3xl text-black mt-2">LIGHTING SYSTEM</h2>
                <p className="text-2xl text-center px-2 mb-2">
                  Lighting system pada ternak ayam merupakan sistem program
                  pencahayaan yang digunakan untuk memicu meratanya pertumbuhan
                  ayam sehingga membuat ayam tumbuh secara seragam.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="card rounded-2xl bg-white">
              <div className="image-content">
                <div>
                  <img
                    src="./images/brooding system.png"
                    alt=""
                    className="rounded-t-2xl"
                  />
                </div>
              </div>
              <div className="">
                <h2 className="text-3xl text-black mt-2">BROODING SYSTEM</h2>
                <p className="text-2xl text-center px-2 mb-2">
                  Brooding system merupakan sistem peralatan kandang yang
                  menunjang saat masa brooding ayam. Masa brooding ayam dimulai
                  saat ayam chick in hingga berumur 14 hari.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="card rounded-2xl bg-white">
              <div className="image-content">
                <div>
                  <img
                    src="./images/ventilation system.png"
                    alt=""
                    className="rounded-t-2xl"
                  />
                </div>
              </div>
              <div className="">
                <h2 className="text-3xl text-black mt-2">VENTILATION SYSTEM</h2>
                <p className="text-2xl text-center px-2 mb-2">
                  Ventilation system adalah alat yang digunakan untuk menjaga
                  sirkulasi udara dalam kandang ayam tetap nyaman dengan cara
                  mengeluarkan udara panas di dalam kandang.
                </p>
              </div>
            </SwiperSlide>
          </div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
      <a href="https://mitraalatternak.co.id/system-product/">
        <button className="bg-yellow text-xl py-4 px-5 rounded-lg font-bold mt-2 hover:bg-white">CEK PRODUK KAMI</button>
      </a>	
    </div>
  );
};

export default Product;
