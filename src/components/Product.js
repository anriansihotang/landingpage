import React from "react";
import Card from "./Cardproduct";

const Product = () => {
  return (
    <div className="bg-pink">
      <section className="max-w-[80%] mx-auto" id="produk">
        <h2 className="text-yellow text-5xl text-center font-bold pt-4">
          PRODUK
        </h2>
        <p className="text-pink-text text-center text-3xl">
          Kami Menyediakan Peralatan Ternak <br/>Terlengkap dan Terbaik Untuk Anda
        </p>
      </section>
	  <Card/>
    </div>
  );
};

export default Product;
