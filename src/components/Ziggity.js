import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Ziggity = () => {
  return (
    <section className="bg-pink">
      <div className="max-w-[80%] mx-auto py-7">
        <div className="flex flex-wrap w-full">
          <article className="w-1/2">
            <img src="./images/Ziggity.png" alt="" />
          </article>
          <article className="w-1/2 self-center  md:pl-6">
            <h2 className="text-yellow text-left text-7xl font-bold mb-4">
              ZIGGITY
            </h2>
            <p className="text-black text-left text-4xl mb-4">KEUNGGULAN</p>
            <table>
              <tbody>
                <tr>
                  <td>
                    <p className="text-left text-2xl">
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
                    <p className="text-left text-2xl">
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
                    <p className="text-left text-2xl">
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
                    <p className="text-left text-2xl">
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
                    <p className="text-left text-2xl">
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
                    <p className="text-left text-2xl">
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
        <button className="bg-yellow text-white-light py-4 px-7 rounded-lg text-base">
          Pesan Sekarang
        </button>
      </div>
    </section>
  );
};

export default Ziggity;
