import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Ziggity = () => {
  return (
    <section className="bg-pink">
      <div className="max-w-[80%] mx-auto py-7">
        <div className="flex flex-wrap w-full mb-3">
          <article className="lg:w-1/2 ">
            <img src="./images/ziggity.png" alt="" />
          </article>
          <article className="md:w-full md:mx-auto lg:w-1/2 self-center lg:pl-6">
            <h2 className="text-5xl text-yellow md:text-center lg:text-left md:text-7xl font-bold mb-4">
              ZIGGITY
            </h2>
            <p className="text-4xl text-black md:text-center lg:text-left md:text-4xl mb-4">
              KEUNGGULAN
            </p>
            <table className="md:mx-auto lg:mx-0">
              <tbody>
                <tr>
                  <td>
                    <p className="text-xl text-left md:text-2xl">
                      Suku cadang terbuat dari material Stainless stell
                    </p>
                  </td>
                  <td className="pl-6">
                    <FontAwesomeIcon
                      icon="fa-solid fa-check"
                      size="2xl"
                      style={{ color: "#00ff04" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-xl text-left md:text-2xl">
                      Valve Flushing otomatis
                    </p>
                  </td>
                  <td className="pl-6">
                    <FontAwesomeIcon
                      icon="fa-solid fa-check"
                      size="2xl"
                      style={{ color: "#00ff04" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-xl text-left md:text-2xl">
                      Distribusi air merata dan tidak oversupply
                    </p>
                  </td>
                  <td className="pl-6">
                    <FontAwesomeIcon
                      icon="fa-solid fa-check"
                      size="2xl"
                      style={{ color: "#00ff04" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-xl text-left md:text-2xl">
                      Sensitifitas pin pada nipple cukup tinggi
                    </p>
                  </td>
                  <td className="pl-6">
                    <FontAwesomeIcon
                      icon="fa-solid fa-check"
                      size="2xl"
                      style={{ color: "#00ff04" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-xl text-left md:text-2xl">
                      Formula terbaik meningkatkan perfoma ayam
                    </p>
                  </td>
                  <td className="pl-6">
                    <FontAwesomeIcon
                      icon="fa-solid fa-check"
                      size="2xl"
                      style={{ color: "#00ff04" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-xl text-left md:text-2xl">
                      Sekam kering, signifitkan mengurangi amonia
                    </p>
                  </td>
                  <td className="pl-6">
                    <FontAwesomeIcon
                      icon="fa-solid fa-check"
                      size="2xl"
                      style={{ color: "#00ff04" }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
        </div>
        <a href="https://wa.me/6281511166115?textHalo,Kak%20saya%20mau%20tanya%20-%20tanya%20tentang%20produk%20MAT">
          <button className="bg-yellow text-white-light py-4 md:px-20 px-6 rounded-lg md:text-4xl text-2xl font-bold">
            Pesan Sekarang
          </button>
        </a>
      </div>
    </section>
  );
};

export default Ziggity;
