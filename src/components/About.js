import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const About = () => {
  return (
    <section className="bg-cream py-10" name="about">
      <div className="max-w-[80%] mx-auto">
        <article className="tentang-kami">
          <h2 className="text-4xl text-yellow text-center md:text-5xl font-bold pt-4">
            TENTANG KAMI
          </h2>
          <p className="text-2xl text-black text-center md:text-4xl mt-6">
            PT. Mitra Alat Ternak merupakan perusahaan yang bergerak dalam
            bidang penjualan peralatan kandang ternak ayam yang berlokasi di
            Tangerang, Semarang, dan Pekanbaru.
          </p>
          <p className="text-2xl text-black text-center md:text-4xl mt-2">
            Dengan menerapkan prinsip kerja 5S, didukung teknisi berpengalaman,
            kami menjamin pelayanan yang aman dan terbaik.
          </p>
          <p className="text-2xl text-black text-center md:text-4xl mt-2">
            PT. Mitra Alat Ternak menjawab segala permasalahan peternakan ayam
            Anda. Kami menyediakan peralatan kandang ternak ayam terlengkap dan
            berkuliatas dengan harga terjangkau.
          </p>
        </article>
      </div>
      <article className="flex justify-center flex-wrap w-full mt-5">
        <div className="w-full md:w-full self-center md:pl-2 lg:w-1/2 lg:pl-64 ">
          <h3 className="text-2xl md:text-center lg:text-left font-bold md:text-5xl">
            KEUNTUNGAN
            <br />
            BERBELANJA DI
            <br />
            MITRA ALAT TERNAK
          </h3>
        </div>
        <div className="w-full md:w-full md:mx-auto lg:w-1/2">
          <table className="mx-auto md:mx-auto md:mt-4 lg:mx-0">
            <tbody>
              <tr>
                <td>
                  <p className="text-left md:text-3xl text-xl">
                    Peralatan Ternak Terlengkap
                  </p>
                </td>
                <td className="pl-2.5">
                  <FontAwesomeIcon
                    icon="fa-solid fa-check"
                    size="2xl"
                    style={{ color: "#00ff04" }}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <p className="text-left md:text-3xl text-xl">
                    Kualitas Produk Terjamin
                  </p>
                </td>
                <td className="pl-2.5">
                  <FontAwesomeIcon
                    icon="fa-solid fa-check"
                    size="2xl"
                    style={{ color: "#00ff04" }}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <p className="text-left md:text-3xl text-xl">
                    Garansi Produk Premium
                  </p>
                </td>
                <td className="pl-2.5">
                  <FontAwesomeIcon
                    icon="fa-solid fa-check"
                    size="2xl"
                    style={{ color: "#00ff04" }}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <p className="text-left md:text-3xl text-xl">
                    Harga Terjangkau
                  </p>
                </td>
                <td className="pl-2.5">
                  <FontAwesomeIcon
                    icon="fa-solid fa-check"
                    size="2xl"
                    style={{ color: "#00ff04" }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-left md:text-3xl text-xl">
                    Pengiriman Barang Cepat
                  </p>
                </td>
                <td className="pl-2.5">
                  <FontAwesomeIcon
                    icon="fa-solid fa-check"
                    size="2xl"
                    style={{ color: "#00ff04" }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-left md:text-3xl text-xl">
                    Pelayanan Ramah
                  </p>
                </td>
                <td className="pl-2.5">
                  <FontAwesomeIcon
                    icon="fa-solid fa-check"
                    size="2xl"
                    style={{ color: "#00ff04" }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
};

export default About;
