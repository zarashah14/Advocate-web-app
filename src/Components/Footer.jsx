import React from "react";
import Container from "../MyContainer/Container";
import Logo from "../assests/Logo";
import Vect1 from "../assests/Vect1";
import Vect2 from "../assests/Vect2";


function Footer() {
  return (
    <Container>
      <div className="bg-black mt-28 px-8 pt-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="bg-[#1D4B5B] w-7 h-0.5" />
              <span className="text-[#F0EEE9] text-base font-normal">
                KONSULTACJE
              </span>
            </div>
            <h1 className="text-[38px] text-[#F0EEE9]">Potrzebujesz pomocy?</h1>
          </div>

          <span className="bg-[#1D4B5B] text-white py-2 px-3">
            Zasięgnij porady online
          </span>
        </div>
        <hr className="bg-[#C7C7C9] h-[1px] mt-10" />
        <div className="flex flex-col md:flex-row items-center justify-center gap-52">

        
        <div className="mt-8">
          <Logo />
          <p className="text-[#F0EEE9] mt-5">Dane kontaktowe:</p>
          <div className="flex items-center gap-3 mt-3">
            <Vect1 />
            <span className="text-[#C7C7C9]">+48 739 00 34 34</span>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <Vect2 />
            <span className="text-[#C7C7C9]">adw.tomaszlesnik@gmail.com</span>
          </div>
        </div>
        <div>
          <span className="font-normal text-base">Adres:</span>
          <p className="text-[#C7C7C9] max-w-[350px]">
            Kancelaria Adwokacka Adwokat Tomasz Leśnik ul. Sobieskiego 14a
            33-300 Nowy Sącz
          </p>
          <p className="text-[#C7C7C9] max-w-[150px] mt-6">NIP 734-353-26-46 REGON 361 864 092</p>
        </div>
        </div>
        <hr className="bg-[#C7C7C9] h-[1px] mt-3" />
        <p className="text-sm text-[#C7C7C9] text-center py-4">Treści zamieszczone na niniejszej stronie internetowej mają charakter wyłącznie informacyjny i stanowią one wyraz osobistych poglądów ich Autora i nie mogą być one uznane za poradę prawną.</p>
      </div>
    </Container>
  );
}
export default Footer;
