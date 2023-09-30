import React from "react";
import Container from '../MyContainer/Container';
import Logo from "../assests/Logo";
import Vect1 from "../assests/Vect1";
import Vect2 from "../assests/Vect2";
//assests
import Line from "../assests/Line"
function Footer(){

    return(
        <Container>
        <div className="bg-dark pb-2 mt-40">
            <div className="pt-10  ml-20 space-x-12 mr-60 ">
                <div className="flex items-center">
           {/*<div className="bg-[#1D4B5B] w-8 h-2"/>*/}<Line/>
                <p className="text-[#c7c7c7] font-normal font-manrope text-base leading-[170%] tracking-[0.51px] ml-2">KONSULTACJE</p>
                </div>
                <div className="">
                <div className="inline-flex p-2.5 space-x-2.5 items-center justify-center bg-[#1D4B5B] ml-[880px]">
                    <p className="text-[#C7C7C9] font-manrope text-base font-normal leading-[130%] flex">Zasięgnij porady online</p>
                </div>
               </div>
               <h1 className="text-[#fffdfd] font-normal font-manrope text-base leading-[170%] tracking-[0.51px]">Potrzebujesz pomocy?</h1>
            <div className="bg-gray-300 w-1283 h-1 " ></div>
             <Logo/> 

             <p className="text-[#FFF] font-manrope text-base font-normal leading-[130%]">Dane kontaktowe:</p>
             <div className="flex  space-x-4 my-4">  
             <Vect1/>     
             <p className="text-[#C7C7C9] font-manrope text-base font-normal leading-[130%]">+48 739 00 34 34</p>
             </div>
             <div className="flex space-x-4 my-4">
              <Vect2/>
              <p className="text-[#C7C7C9] font-manrope text-base font-normal leading-[130%]">adw.tomaszlesnik@gmail.com</p>

              <div className="pl-40 justify-between">
                    <div className="text-[#FFF] font-manrope text-base font-normal leading-[130%] mb-2">
                     <h3 >Adres:</h3>
                     </div>
                     <div className="text-[#C7C7C9] font-manrope text-base font-normal leading-[130%] mb-4">
                        <h3>Kancelaria Adwokacka Adwokat Tomasz Leśnik ul.</h3>
                        <h3>Sobieskiego 14a 33-300 Nowy Sącz</h3>
                        </div>
                        <div className="text-[#C7C7C9] font-manrope text-base font-normal leading-[130%]">
                        <h3>NIP 734-353-26-46 </h3>
                        <h3>REGON 361 864 092</h3>
                        </div>
                       
                </div>
               
             </div>
             <div className="bg-gray-300 w-1283 h-1" ></div>
             <div className="my-4">
                <p className="text-[#C7C7C9] font-manrope leading-[130%] text-[12px] font-light">Treści zamieszczone na niniejszej stronie internetowej mają charakter wyłącznie informacyjny i stanowią one wyraz osobistych poglądów ich Autora i nie mogą być one uznane za poradę prawną.</p>
             </div>
             </div>
              
        </div>
        </Container>
    );
}
export default Footer;