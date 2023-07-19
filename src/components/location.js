import React from "react";

const Location = () => {
  return (
    <div className="bg-yellow">
      <div className="max-w-[80%] mx-auto py-7">
        <h2 className="text-3xl text-pink font-bold md:text-5xl py-4 text-center">LOKASI PENJUALAN</h2>
        <div className="flex flex-wrap w-full mt-4">
          <section className="md:w-1/2 flex md:pr-2">
            <div className="w-1/2 self-center">
              <img src="./images/semarang.png" alt="" className="img-card"/>
            </div>
            <div className="self-center w-1/2 pl-3">
              <h3 className="text-left md:text-4xl font-bold my-2">Semarang</h3>
              <p className="text-left md:text-base">
                Jl. Kanfer Raya No. 2A, Padangsari, Kec.Banyumanik, Kota
                Semarang, Jawa Tengah 50267
              </p>
            </div>
          </section>
          <section className="md:w-1/2 flex">
            <div className="w-1/2 md:pl-2 self-center">
              <img src="./images/tangerang.png" alt="" className="img-card"/>
              <p className="text-xl text-center mt-2 text-white-light md:text-2xl underline">HOUSE OFFICE</p>
            </div>
            <div className="self-center w-1/2 pl-2">
              <h3 className="text-left md:text-4xl font-bold my-2">Tangerang</h3>
              <p className="text-left md:text-base">
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
