import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Benefits = () => {
  return (
    <article className="flex justify-center flex-wrap w-full mt-5">
      <div className="md:w-1/2 self-center md:pl-52">
        <h3 className="text-4xl text-left font-bold">
          KEUNTUNGAN
          <br />
          BERBELANJA DI
          <br />
          MITRA ALAT TERNAK
        </h3>
      </div>
      <div className="md:w-1/2">
        <table>
          <tbody>
            <tr>
              <td>
                <p className="text-left text-3xl">
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
                <p className="text-left text-3xl">Kualitas Produk Terjamin</p>
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
                <p className="text-left text-3xl">Garansi Produk Premium</p>
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
                <p className="text-left text-3xl">Harga Terjangkau</p>
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
                <p className="text-left text-3xl">Pengiriman Barang Cepat</p>
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
                <p className="text-left text-3xl">Pelayanan Ramah</p>
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
  );
};

export default Benefits;
