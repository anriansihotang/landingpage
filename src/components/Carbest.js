import React from "react";

const Cardbest = () => {
  return (
    <div className="flex w-full  flex-col md:flex-row self-auto md:self-end">
      <div className="card bg-white md:mr-3">
        <h3 className="text-pink text-center text-3xl pt-3.5 pb-4">
          CLIMATE CONTROLLER PUNOS
        </h3>
        <p className="m-auto text-justify px-4 pb-3 text-2xl">
          Climate Controller Punos merupakan alat pengatur iklim yang sangat
          efektif, sistematis, dan fungsional. Di desain khusus oleh tim R&D,
          teruji terbaik secara penelitian dan pengembangan.
        </p>
      </div>
      <div className="card bg-white md:mr-3">
        <h3 className="text-pink text-center text-3xl pt-3.5 pb-4">
          CONE FAN & BOX FAN PUNOS
        </h3>
        <p className="m-auto text-justify px-4 pb-3 text-2xl">
          Selain digunakan untuk mengeluarkan suhu panas, Cone Fan & Box Fan
          Punos bergunakan juga untuk mengeluarkan bau amonia dalam kandang.
          Sehingga ayam tidak mudah terkena penyakit.
        </p>
      </div>
      <div className="card bg-white">
        <h3 className="text-pink text-center text-3xl pt-3.5 pb-4">
          COOLING PAD PUNOS
        </h3>
        <p className="m-auto text-justify px-4 pb-3 text-2xl">
          Cooling Pad Punos merupakan produk yang digunakan untuk menurunkan
          suhu dalam kandang.Cooling Pad Punos dapat menyerap air lebih banyak
          dan lebih cepat dibandingkan Cooling Pad lainnya
        </p>
      </div>
    </div>
  );
};

export default Cardbest;
