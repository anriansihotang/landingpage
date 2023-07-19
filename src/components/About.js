import React from "react";
import Benefits from "./Benefits";

const About = () => {
  return (
    <section className="bg-white pt-20 pb-10" id="about">
      <div className="max-w-[80%] mx-auto">
        <article className="tentang-kami">
          <h2 className="text-4xl text-yellow text-center md:text-5xl font-bold pt-4">
            TENTANG KAMI
          </h2>
          <p className="text-justify text-2xl text-black md:text-center md:text-3xl mt-6">
            PT. Mitra Alat Ternak merupakanperusahaan yang bergerak dalam bidang
            penjualan peralatan kandang ternak ayam yang berlokasi di Tangerang,
            Semarang, dan Pekanbaru.
          </p>
          <p className="text-justify text-2xl text-black md:text-center md:text-3xl mt-2">
            Dengan menerapkan prinsip kerja 5S, didukung teknisi berpengalaman,
            kami menjamin pelayanan yang aman dan terbaik.
          </p>
          <p className="text-justify text-2xl text-black md:text-center md:text-3xl mt-2">
            PT. Mitra Alat Ternak menjawab segala permasalahan peternakan ayam
            Anda. Kami menyediakan peralatan kandang ternak ayam terlengkap dan
            berkuliatas dengan harga terjangkau.
          </p>
        </article>
        <Benefits />
      </div>
    </section>
  );
};

export default About;
