import React from "react";

const Location = () => {
  return (
    <div className="bg-yellow">
      <div className="max-w-[80%] mx-auto">
        <h2 className="text-pink font-bold text-5xl py-4">LOKASI PENJUALAN</h2>
        <div className="flex flex-wrap w-full mt-4">
          <section className="w-1/2 flex ">
            <div className="w-1/2">
              <img src="./images/semarang.png" alt="" className="img-card"/>
            </div>
            <div className="self-center w-1/2 ml-3">
              <h3 className="text-left text-4xl font-bold my-2">Semarang</h3>
              <p className="text-left text-2xl">
                Jl. Kanfer Raya No. 2A, Padangsari, Kec.Banyumanik, Kota
                Semarang, Jawa Tengah 50267
              </p>
            </div>
          </section>
          <section className="w-1/2 flex">
            <div className="w-1/2">
              <img src="./images/tangerang.png" alt="" className="img-card"/>
              <p className="text-center mt-2 text-white-light text-2xl underline">HOUSE OFFICE</p>
            </div>
            <div className="self-center w-1/2 ml-2">
              <h3 className="text-left text-4xl font-bold my-2">Tangerang</h3>
              <p className="text-left text-2xl">
                Jl. Rimpak Wetan, Sindangasih, Kec. Sindang Jaya, Kabupaten
                Tangerang, Banten 15560
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Location;
