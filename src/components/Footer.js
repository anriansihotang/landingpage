import React from "react";

const Footer = () => {
  return (
    <footer className="bg-yellow">
      <div className="max-w-[80%] mx-auto">
        <div className="flex flex-wrap w-full pt-7">
          <div className="md:w-1/2">
            <h5 className="text-left text-base font-bold mb-3">VISI KAMI</h5>
            <p className="text-left text-sm">
              Menjadi Pemain besar dalam industri peternakan, dengan usaha
              peningkatan kesejahteraan hidup masyarakat
            </p>
          </div>
          <div className="md:w-1/4">
            <h5 className="text-left text-base font-bold mb-3">MOTO</h5>
            <p className="text-left text-sm">
              WE DO NOT ONLY SELL PRODUCTS, <br/>	WE SELL SOLUTIONS
            </p>
          </div>
          <div className="md:w-1/4">
            <h5 className="text-left text-base font-bold mb-3">
              DIDUKUNG OLEH
            </h5>
            <p className="text-left text-sm">PUNOS</p>
            <p className="text-left text-sm">ZIGGITY</p>
            <p className="text-left text-sm">ACRITECHS</p>
            <p className="text-left text-sm">WASSERCARE</p>
            <p className="text-left text-sm">MASTER</p>
            <p className="text-left text-sm">AZA</p>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-row sm:flex-col w-full py-6">
          <div className="w-full md:w-1/4">
            <h5 className="text-left text-base font-bold mb-3">LOKASI KAMI</h5>
            <p className="text-left text-sm">
              Jl. Rimpak Wetan, Sindangasih, Kec. Sindang <br />
              Jaya, Kabupaten Tangerang, Banten 15560
            </p>
          </div>
          <div className="w-1/2 md:w-1/4">
            <h5 className="text-left text-base font-bold mb-3">JAM KERJA</h5>
            <p className="text-left text-sm">
              Setiap Hari <br />
              jam 08.00 - 17.00 WIB
            </p>
          </div>
          <div className="w-1/2 md:w-1/4">
            <h5 className="text-left text-base font-bold mb-3">HUBUNGI KAMI</h5>
            <p className="text-left text-sm">+62 815-1116-6115</p>
            <h5 className="text-left text-base font-bold mb-3">EMAIL</h5>
            <p className="text-left text-sm">tanya@mitraalatternak.co.id</p>
          </div>
          <div className="w-full md:w-1/4">
            <h5 className="text-left text-base font-bold mb-3">MARKETPLACE</h5>
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
      <p className="py-7">PT. MITRA ALAT TERNAK © 2023</p>
    </footer>
  );
};

export default Footer;
