import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className="bg-cream" name="contact">
      <div className="max-w-[80%] mx-auto">
        <h2 className="text-4xl text-yellow md:text-5xl font-bold py-4">
          KONTAK KAMI
        </h2>
        <div className="flex flex-wrap w-full items-center">
          <section className="w-full md:w-1/2 self-center mb-2">
            <img src="./images/whatsapp.png" alt="" className="mx-auto mb-8" />
            <p className="text-2xl md:text-3xl font-medium mb-7">
              +62 815-1116-6115
            </p>
            <p className="text-xl font-bold">Senin - Jumat</p>
            <p className="text-xl font-bold">08:00 Pagi - 05:00 Sore</p>
          </section>
          <section className="w-full md:w-1/2 mb-2">
            <img src="./images/email.png" alt="" className="mx-auto mb-8" />
            <p className="text-2xl md:text-3xl font-medium mb-7">
              tanya@mitraalatternak.co.id
            </p>
            <p className="text-xl font-bold">Senin - Sabtu</p>
            <p className="text-xl font-bold">24/Jam</p>
          </section>
        </div>
        <section className="py-8">
          <img src="./images/punos.png" alt="" className="mx-auto" />
          <p className="text-xl font-bold md:text-3xl mb-4 mt-5">
            Jangan Lupa Ikuti Sosial Media Kami Agar Dapat Info Terupdate
            <br />
            Tentang Kami
          </p>
          <p className="texl-base">
            <FontAwesomeIcon
              icon="fa-brands fa-square-facebook"
              style={{ color: "#395794" }}
            />
            <a
              href="https://www.facebook.com/mitra.alatternak.1"
              className="text-contact mx-1 hover:underline hover:font-semibold"
            >
              Facebook
            </a>
            <FontAwesomeIcon
              icon="fa-brands fa-instagram"
              style={{ color: "#f55240" }}
            />
            <a
              href="https://www.instagram.com/punospoultryequipment/"
              className="text-contact mx-1 hover:underline hover:font-semibold"
            >
              Instagram
            </a>
            <FontAwesomeIcon icon="fa-brands fa-tiktok" />
            <a
              href="https://www.tiktok.com/@pt.mitra_alat_ternak?_t=8d0hreqxcws&_r=1"
              className="text-contact mx-1 hover:underline hover:font-semibold"
            >
              Tiktok
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Contact;
