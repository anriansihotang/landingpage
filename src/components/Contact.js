import React from "react";

const Contact = () => {
  return (
    <div className="bg-white" id="kontak">
      <div className="max-w-[80%] mx-auto">
        <h2 className="text-yellow text-5xl font-bold py-3">KONTAK KAMI</h2>
        <div className="flex flex-wrap w-full items-center">
          <section className="w-1/2 self-center">
            <img src="./images/whatsapp.png" alt="" className="mx-auto" />
            <p>+62 815-1116-6115</p>
            <p>Senin - Jumat</p>
            <p>08:00 Pagi - 05:00 Sore</p>
          </section>
          <section className="w-1/2">
            <img src="./images/email.png" alt="" className="mx-auto" />
            <p>tanya@mitraalatternak.co.id</p>
            <p>Senin - Sabtu</p>
            <p>24/Jam</p>
          </section>
        </div>
        <section>
          <img src="./images/punos.png" alt="" className="mx-auto"/>
          <p>
            Jangan Lupa Ikuti Sosial Media Kami Agar Dapat Info Terupdate
            Tentang Kami
          </p>
          <p className="texl-base">
            <i class="fa-brands fa-square-facebook"></i>
            <a href="https://www.facebook.com/mitra.alatternak.1">Facebook</a>
            <i class="fa-brands fa-instagram"></i>
            <a href="https://www.instagram.com/punospoultryequipment/">
              Instagram
            </a>
            <i class="fa-brands fa-tiktok"></i>
            <a href="https://www.tiktok.com/@pt.mitra_alat_ternak?_t=8d0hreqxcws&_r=1">
              Tiktok
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Contact;
