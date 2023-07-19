import React from "react";

const Punos = () => {
  return (
    <article className="max-w-[80%] mx-auto pb-5">
      <section className="flex flex-wrap">
        <div className="md:w-1/2">
          <img src="./images/best produk.png" alt="" className="w-full" />
        </div>
        <div className="self-center md:w-1/2">
          <h3 className="text-5xl text-left md:text-7xl text-white-light font-bold mb-4">
            Punos
          </h3>
          <p className="text-xl text-justify md:text-4xl text-black mb-4">
            pada tanggal 31 Oktober 2016 secara resmi PT. MITRA ALAT TERNAK
            mendaftarkan merk dagang “PUNOS” untuk semua produk hasil produksi nya.”PUNOS” dalam bahasa Yunani berarti “MONTOK”. Harapannya
            semua perternak dan pengguna peralatan ternak dengan merk ini
            menghasilkan unggas - unggas yang sehar dan montok.
          </p>
          <button className="text-xl bg-pink md:text-4xl px-14 py-4 rounded-lg text-white-light font-bold">
            PESAN SEKARANG
          </button>
        </div>
      </section>
    </article>
  );
};

export default Punos;
