import React from "react";

const Ziggity = () => {
  return (
    <section className="bg-pink">
      <div className="max-w-[80%] mx-auto">
        <div className="flex flex-wrap w-full">
          <article className="w-1/2">
            <img src="./images/Ziggity.png" alt="" />
          </article>
          <article className="w-1/2 self-center">
            <h2 className="text-yellow text-left text-7xl font-bold">ZIGGITY</h2>
            <p className="text-black text-left text-4xl">KEUNGGULAN</p>
            <table>
              <tbody>
                <tr>
                  <td>
                    <p className="text-left text-3xl">Suku cadang terbuat dari material Stainless stell</p>
                  </td>
                  <td>ok</td>
                </tr>
                <tr>
                  <td>
                    <p className="text-left text-3xl">Valve Flushing otomatis</p>
                  </td>
                  <td>ok</td>
                </tr>
                <tr>
                  <td>
                    <p className="text-left text-3xl">Distribusi air merata dan tidak oversupply</p>
                  </td>
                  <td>ok</td>
                </tr>
                <tr>
                  <td>
                    <p className="text-left text-3xl">Sensitifitas pin pada nipple cukup tinggi</p>
                  </td>
                  <td>ok</td>
                </tr>
                <tr>
                  <td>
                    <p className="text-left text-3xl">Formula terbaik meningkatkan perfoma ayam</p>
                  </td>
                  <td>ok</td>
                </tr>
                <tr>
                  <td>
                    <p className="text-left text-3xl">Sekam kering, signifitkan mengurangi amonia</p>
                  </td>
                  <td>ok</td>
                </tr>
              </tbody>
            </table>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Ziggity;
