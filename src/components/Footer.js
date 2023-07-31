import React from "react";

const Footer = () => {
  return (
    <footer className="bg-yellow">
      <div className="max-w-[80%] mx-auto">
        <div className="flex flex-wrap w-full pt-7">
          <div className="md:w-1/2">
            <h5 className="text-left text-base font-bold mb-3 lg:text-2xl">VISI KAMI</h5>
            <p className="text-left text-sm lg:text-xl">
              Menjadi Pemain besar dalam industri peternakan, dengan usaha
              peningkatan kesejahteraan hidup masyarakat
            </p>
          </div>
          <div className="md:w-1/4">
            <h5 className="text-left text-base font-bold mb-3 lg:text-2xl">MOTO</h5>
            <p className="text-left text-sm lg:text-xl">
              WE DO NOT ONLY SELL PRODUCTS, <br /> WE SELL SOLUTIONS
            </p>
          </div>
          <div className="md:w-1/4">
            <h5 className="text-left text-base font-bold mb-3 lg:text-2xl">
              DIDUKUNG OLEH
            </h5>
            <a href="https://punos.id/">
              <p className="text-left text-sm lg:text-xl hover:text-white hover:underline">
                PUNOS
              </p>
            </a>
            <a href="https://ziggity.com/">
              <p className="text-left text-sm lg:text-xl hover:text-white hover:underline">ZIGGITY</p>
            </a>
            <a href="https://svagritech.com/en/home/">
              <p className="text-left text-sm lg:text-xl hover:text-white hover:underline">ACRITECHS</p>
            </a>
            <a href="https://www.wassercare.com/">
              <p className="text-left text-sm lg:text-xl hover:text-white hover:underline">WASSERCARE</p>
            </a>
            <a href="https://e-master.pl/">
              <p className="text-left text-sm lg:text-xl hover:text-white hover:underline">MASTER</p>
            </a>
            <a href="https://www.azainternational.it/en/">
              <p className="text-left text-sm lg:text-xl hover:text-white hover:underline">AZA</p>
            </a>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-row sm:flex-col w-full py-6">
          <div className="w-full md:w-1/4">
            <h5 className="text-left text-base font-bold mb-3 lg:text-2xl">LOKASI KAMI</h5>
            <p className="text-left text-sm lg:text-xl">
              Jl. Rimpak Wetan, Sindangasih, Kec. Sindang <br />
              Jaya, Kabupaten Tangerang, Banten 15560
            </p>
          </div>
          <div className="w-1/2 md:w-1/4">
            <h5 className="text-left text-base font-bold mb-3 lg:text-2xl">JAM KERJA</h5>
            <p className="text-left text-sm lg:text-xl">
              Setiap Hari <br />
              jam 08.00 - 17.00 WIB
            </p>
          </div>
          <div className="w-1/2 md:w-1/4">
            <h5 className="text-left text-base font-bold mb-3 lg:text-2xl">HUBUNGI KAMI</h5>
            <p className="text-left text-sm lg:text-xl">+62 815-1116-6115</p>
            <h5 className="text-left text-base font-bold mb-3 lg:text-2xl">EMAIL</h5>
            <p className="text-left text-sm lg:text-xl">tanya@mitraalatternak.co.id</p>
          </div>
          <div className="w-full md:w-1/4">
            <h5 className="text-left text-base font-bold mb-3 lg:text-2xl">MARKETPLACE</h5>
            <div className="text-left flex w-full">
              <a
                className="w-1/4 md:w-12"
                href="https://shopee.co.id/pt.mitra_alat_ternak"
                aria-label="link to shopee"
              >
                <img src="./images/shopee.png" alt="" />
              </a>
              <a
                className="w-1/4 md:w-12 md:ml-2"
                href="https://www.tokopedia.com/mitralatternak?source=universe&st=product"
                aria-label="link to tokopedia"
              >
                <img src="./images/tokopedia.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="py-7 text-base lg:text-2xl">PT. MITRA ALAT TERNAK © 2023</p>
    </footer>
  );
};

export default Footer;
