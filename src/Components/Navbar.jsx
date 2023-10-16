import React from "react";
import Container from "../MyContainer/Container";
import Logo from "../assests/Logo";
import Vec from "../assests/Vec";
//import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Container>
      <nav className=" text-light flex items-center py-5 justify-center px-20">
        <div className="mr-10">
          <Logo />
        </div>
        <ul className="flex items-center gap-10">
          <li className="text-[#1F1C1B] cursor-pointer font-normal text-[18px] leading-[170%]">
            O mnie
          </li>

          <li className="text-[#1F1C1B] cursor-pointer flex items-center gap-1 font-normal text-[18px] leading-[170%]">
            Zakres usług
            <Vec />
          </li>
          <li className="text-[#1F1C1B] cursor-pointer font-normal text-[18px] leading-[170%]">
            Honorarium{" "}
          </li>
          <li className="text-[#1F1C1B] cursor-pointer font-normal text-[18px] leading-[170%]">
            Porady Online
          </li>

          <li className="text-[#1F1C1B] cursor-pointer font-normal text-[18px] leading-[170%]">
            Blog
          </li>
          <button className="bg-dark px-4 py-3 rounded-lg">
            <p className=" text-white font-normal text-[18px] leading-[170%]">
              Kontakt
            </p>
          </button>
        </ul>
      </nav>
    </Container>
  );
}
export default Navbar;
