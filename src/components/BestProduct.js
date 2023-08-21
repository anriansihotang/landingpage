import React from "react";

const Best = () => {
  return (
    <div className="bg-yellow py-7">
      <article className="max-w-[80%] mx-auto pb-10 pt-6">
        <h2 className="text-pink text-center text-5xl font-bold pt-4 pb-5">
          PRODUK TERBAIK
        </h2>
        <div className="flex w-full flex-col md:flex-col lg:flex-row self-auto md:self-end">
          <div className="card mb-5 rounded-2xl bg-white shadow-card md:mr-5">
            <div className="px-3 py-3 md:px-8 md:py-6">
              <h3 className="text-2xl text-pink text-center md:text-4xl pt-3.5 pb-4">
                CLIMATE CONTROLLER PUNOS
              </h3>
              <p className="text-xl m-auto text-center md:text-3xl">
                Climate Controller Punos merupakan alat pengatur iklim yang
                sangat efektif, sistematis, dan fungsional. Di desain khusus
                oleh tim R&D, teruji terbaik secara penelitian dan pengembangan.
              </p>
            </div>
          </div>
          <div className="card mb-5 rounded-2xl bg-white shadow-card md:mr-5">
            <div className="px-3 py-3 md:px-8 md:py-6">
              <h3 className="text-2xl text-pink text-center md:text-4xl pt-3.5 pb-4">
                CONE FAN & BOX FAN PUNOS
              </h3>
              <p className="text-xl m-auto text-center md:text-3xl">
                Selain digunakan untuk mengeluarkan suhu panas, Cone Fan & Box
                Fan Punos bergunakan juga untuk mengeluarkan bau amonia dalam
                kandang. Sehingga ayam tidak mudah terkena penyakit.
              </p>
            </div>
          </div>
          <div className="card mb-5 rounded-2xl bg-white shadow-card md:mr-5">
            <div className="px-3 py-3 md:px-8 md:py-6">
              <h3 className="text-2xl text-pink text-center md:text-4xl pt-3.5 pb-4 md:mb-6">
                COOLING PAD PUNOS
              </h3>
              <p className="text-xl m-auto text-center md:text-3xl">
                Cooling Pad Punos merupakan produk yang digunakan untuk
                menurunkan suhu dalam kandang.Cooling Pad Punos dapat menyerap
                air lebih banyak dan lebih cepat dibandingkan Cooling Pad
                lainnya
              </p>
            </div>
          </div>
        </div>
      </article>
      <article className="max-w-[80%] mx-auto pb-5">
        <section className="flex flex-wrap">
          <div className="md:w-full lg:w-1/2">
            <img src="./images/best produk.png" alt="" className="w-full" />
          </div>
          <div className="self-center md:w-full lg:w-1/2">
            <h3 className="text-5xl text-left md:text-7xl text-white-light font-bold mb-4">
              Punos
            </h3>
            <p className="text-xl text-justify md:text-4xl text-black mb-4">
              pada tanggal 31 Oktober 2016 secara resmi PT. MITRA ALAT TERNAK
              mendaftarkan merk dagang “PUNOS” untuk semua produk hasil produksi
              nya.”PUNOS” dalam bahasa Yunani berarti “MONTOK”. Harapannya semua
              perternak dan pengguna peralatan ternak dengan merk ini
              menghasilkan unggas - unggas yang sehar dan montok.
            </p>
            <a href="https://wa.me/6281511166115?text=Halo,Kak%20saya%20mau%20tanya%20-%20tanya%20tentang%20produk%20MAT">
              <button className="text-xl bg-pink md:text-4xl px-14 py-4 rounded-lg text-white-light font-bold hover:bg-white	">
                PESAN SEKARANG
              </button>
            </a>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Best;
