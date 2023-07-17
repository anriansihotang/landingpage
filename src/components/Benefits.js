import React from "react";

const Benefits = () => {
  return (
    <article className="flex justify-center flex-wrap w-full mt-5">
      <div className="md:w-1/2 self-center md:pl-36">
        <h3 className="text-4xl text-left font-bold">
          KEUNTUNGAN
          <br />
          BERBELANJA DI
          <br />
          MITRA ALATA TERNAK
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
              <td className="about-checklist">
                <i className="fa-solid fa-check fa-2xl"></i>
              </td>
            </tr>

            <tr>
              <td>
                <p className="text-left text-3xl">Kualitas Produk Terjamin</p>
              </td>
              <td className="about-checklist">
                <i className="fa-solid fa-check fa-2xl"></i>
              </td>
            </tr>

            <tr>
              <td>
                <p className="text-left text-3xl">Garansi Produk Premium</p>
              </td>
              <td className="about-checklist">
                <i className="fa-solid fa-check fa-2xl"></i>
              </td>
            </tr>

            <tr>
              <td>
                <p className="text-left text-3xl">Harga Terjangkau</p>
              </td>
              <td className="about-checklist">
                <i className="fa-solid fa-check fa-2xl"></i>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-left text-3xl">Pengiriman Barang Cepat</p>
              </td>
              <td className="about-checklist">
                <i className="fa-solid fa-check fa-2xl"></i>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-left text-3xl">Pelayanan Ramah</p>
              </td>
              <td className="about-checklist">
                <i className="fa-solid fa-check fa-2xl"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
};

export default Benefits;
