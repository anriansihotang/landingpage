import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-red max-w-[80%] mx-auto">
        <h1 className="text-center text-yellow text-5xl pt-3">
          PT. MITRA ALAT TERNAK
        </h1>
        <h2 className="text-center text-pink-text text-4xl">
          Sahabat Peternak Broiler dan Breeder
        </h2>
        <p className="text-center text-pink-text text-4xl mt-11">Hubungi Kami</p>
		<button>next</button>
      </div>
      <div className="bg-hero">
        <img
          src="./images/3D kandang Hero.png"
          className="img-hero"
          alt="3D-kandang"
        />
      </div>
    </>
  );
};

export default Hero;
