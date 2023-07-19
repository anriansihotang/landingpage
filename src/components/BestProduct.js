import React from "react";
import Cardbest from "./Carbest";
import Punos from "./Punos";

const Best = () => {
  return (
    <div className="bg-yellow">
      <article className="max-w-[80%] mx-auto pb-10 pt-6">
        <h2 className="text-pink text-center text-5xl font-bold pt-4 pb-5">PRODUK TERBAIK</h2>
		<Cardbest/>
      </article>
	  <Punos/>
    </div>
  );
};

export default Best;
