import React from "react";
import Line from "../../assests/Line";
import Container from "../../MyContainer/Container";
//import Line2 from "../../assests/Line 2.png"
import image3 from "../../assests/image 3.png";
//import image3 from "../../assests/box1.png"
function Section4() {
  return (
    <Container>
      <div>
        <div className="grid lg:grid-cols-2 mx-4">
          <div className="flex flex-col">
            <div className="flex">
              <Line />
              <p className="text-black dark:text-#1E2027 text-base font-manrope ml-2">
                OPINIE
              </p>
            </div>
            <h2 className="font-manrope text-2xl font-normal text-black tracking-minus leading-tight">
              Co mówią o mnie moi klienci?
            </h2>
            <p className="text-dark font-manrope text-base font-normal leading-relaxed tracking-tight">
              Jako adwokat, jestem dumny z tego, że mogę pomagać ludziom w ich
              sprawach prawnych i że robię to skutecznie.
            </p>
            <p className="text-dark font-manrope text-base font-normal leading-relaxed tracking-tight my-4">
              Dlatego też, cieszy mnie długa lista osób relacjonująca jakie
              wrażenie na nich zrobiła moja praca i jakie rezultaty uzyskali
              dzięki mojej pomocy.
            </p>
            <div className="px-4 py-3 max-w-[15rem] text-center bg-[#1D4B5B]">
              <p className="text-light font-manrope text-base font-normal leading-tight">
                Zostań moim klientem
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className=" bg-[#1D4B5B] px-2 max-w-[30rem] py-7">
              <p className="text-text-light font-manrope text-base font-normal leading-relaxed tracking-tight text-gray-300 ml-2 border-l-2 border-[#75AFC2] h-32 pl-4">
                Od początku do końca pełen profesjonalizm. Szybki kontakt,
                współpraca przebiegła bardzo dobrze, sprawa zakończyła się na
                pierwszej rozprawie dzięki Panu Tomaszowi. Polecam wszystkim
                którzy szukają rzetelnego Adwokata, takiego z powołania.
              </p>

              <h3 className="text-light font-manrope text-base font-semibold leading-relaxed tracking-tight ml-12">
                Natalia K.
              </h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 mt-20 items-center justify-between mx-8">
          <div>
            <div className="flex items-center">
              <Line />
              <p className="text-black dark:text-#1E2027 text-base font-manrope ml-2">
                BLOG
              </p>
            </div>
            <h2 className="font-manrope font-normal text-black tracking-minus leading-tight text-2xl w-60">
              Poszerzerz swoją wiedzę
            </h2>
          </div>
          <div className="bg-[#1D4B5B] px-4 py-2 rounded-lg">
            <p className="mx-6 text-light font-manrope text-base font-normal leading-tight w-60 px-8">
              Sprawdź wszystkie wpisy
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 mx-8 gap-3 mt-7 ">
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.8),
          rgba(0,0,0,0.8)),url(${"images/card.png"})`,
          }}
        >
          <p className="text-white pt-32 ml-5 max-w-[374px]">Czy wysokość inflacji jest podstawą do podwyższenia alimentów?</p>
          <div className="flex items-center text-white py-1 justify-between mt-6 px-4 bg-[#1D4B5BBF]">
            <span>necessitatibus</span>
            <span>22/12/8</span>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.8),
          rgba(0,0,0,0.8)),url(${"images/card.png"})`,
          }}
        >
          <p className="text-white pt-32 ml-5 max-w-[374px]">Czy wysokość inflacji jest podstawą do podwyższenia alimentów?</p>
          <div className="flex items-center text-white py-1 justify-between mt-6 px-4 bg-[#1D4B5BBF]">
            <span>necessitatibus</span>
            <span>22/12/8</span>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.8),
          rgba(0,0,0,0.8)),url(${"images/card.png"})`,
          }}
        >
          <p className="text-white pt-32 ml-5 max-w-[374px]">Czy wysokość inflacji jest podstawą do podwyższenia alimentów?</p>
          <div className="flex items-center py-1 text-white justify-between mt-6 px-4 bg-[#1D4B5BBF]">
            <span>necessitatibus</span>
            <span>22/12/8</span>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Section4;
