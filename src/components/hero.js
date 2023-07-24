import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <header name="home" className="w-full bg-red">
      <div className="bg-red max-w-[80%] mx-auto pt-14">
        <h1 className="text-2xl text-center text-yellow md:text-5xl pt-3">
          PT. MITRA ALAT TERNAK
        </h1>
        <h2 className="text-lg text-center text-white md:text-5xl">
          Sahabat Peternak Broiler dan Breeder
        </h2>
        <p className="text-2xl text-center text-white md:text-5xl mt-11 mb-10">
          Hubungi Kami
        </p>
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-80}
          className="drop-hero"
        >
          <button className="text-center mx-auto">
            <FontAwesomeIcon
              icon="fa-solid fa-chevron-down"
              size="xl"
              style={{ color: "#fefefe" }}
            />
          </button>
        </Link>
      </div>
      <div className="bg-hero mx-auto">
        <img
          src="./images/3D kandang Hero.png"
          className="img-hero w-3/4 md:w-1/2 mx-auto"
          alt="3D-kandang"
        />
      </div>
    </header>
  );
};

export default Hero;
