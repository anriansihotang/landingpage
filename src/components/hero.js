import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  return (
    <>
      <div className="bg-red max-w-[80%] mx-auto pt-32">
        <h1 className="text-2xl text-center text-yellow md:text-5xl pt-3">
          PT. MITRA ALAT TERNAK
        </h1>
        <h2 className="text-lg text-center text-pink-text md:text-4xl">
          Sahabat Peternak Broiler dan Breeder
        </h2>
        <p className="text-2xl text-center text-pink-text md:text-4xl mt-11 mb-10">
          Hubungi Kami
        </p>
        <a href="#about" className="drop-hero">
          <button>
            <FontAwesomeIcon
              icon="fa-solid fa-chevron-down"
			  size="xl"
              style={{ color: "#fefefe" }}
            />
          </button>
        </a>
      </div>
      <div className="bg-hero">
        <img
          src="./images/3D kandang Hero.png"
          className="img-hero w-3/4 md:w-1/2"
          alt="3D-kandang"
        />
      </div>
    </>
  );
};

export default Hero;
