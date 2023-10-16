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
        <div className="grid lg:grid-cols-2 mx-10">
          <div className="flex flex-col mx-40">
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
        <div className="flex items-center justify-center">
          <div className="mt-20">
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

          <div className="inline-flex p-2.5 px-0 mx-80 gap-10 bg-[#1D4B5B]">
            <p className="mx-6 text-light font-manrope text-base font-normal leading-tight w-60 px-8">
              Sprawdź wszystkie wpisy
            </p>
          </div>

          {/* <div className="grid grid-cols-3 gap-10">
            <div className="flex items-center justify-center shrink-0">
              <div className=" mb-40 mt-8">
                <div className="absolute w-[320px] h-[200px] bg-opacity-75 bg-dark">
                  <img
                    src={image3}
                    alt="image3"
                    className=" w-[320px] h-[200px]"
                  />
                </div>
                <p className="absolute text-white font-manrope text-base font-normal leading-[130%] w-80 pt-28 px-10">
                  Czy wysokość inflacji jest podstawą do podwyższenia alimentów?
                </p>
                <div className="bg-[#1D4B5B] bg-opacity-80 w-[320px] py-4 absolute grid grid-cols-2 mt-40 pt-0 pb-2 items-center">
                  <div className="mx-10 pt-2">
                    <p className="text-light font-manrope text-xs font-normal leading-[130%]">
                      Tomasz Leśnik
                    </p>{" "}
                  </div>
                  <div className="mx-10 pt-2">
                    <p className="text-light font-manrope text-xs font-normal leading-[130%]">
                      20.01.2022r
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center shrink-0">
              <div className=" mb-40 mt-8">
                <div className="absolute w-[320px] h-[200px] bg-opacity-75 bg-dark">
                  <img
                    src={image3}
                    alt="image3"
                    className=" w-[320px] h-[200px]"
                  />
                </div>
                <p className="absolute text-white font-manrope text-base font-normal leading-[130%] w-80 pt-28 px-10">
                  Czy wysokość inflacji jest podstawą do podwyższenia alimentów?
                </p>
                <div className="bg-[#1D4B5B] bg-opacity-80 w-[320px] py-4 absolute grid grid-cols-2 mt-40 pt-0 pb-2 items-center">
                  <div className="mx-10 pt-2">
                    <p className="text-light font-manrope text-xs font-normal leading-[130%]">
                      Tomasz Leśnik
                    </p>{" "}
                  </div>
                  <div className="mx-10 pt-2">
                    <p className="text-light font-manrope text-xs font-normal leading-[130%]">
                      20.01.2022r
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex items-center justify-center shrink-0">
              <div className=" mb-40 mt-8">
                <div className="absolute w-[320px] h-[200px] bg-opacity-75 bg-dark">
                  <img
                    src={image3}
                    alt="image3"
                    className=" w-[320px] h-[200px]"
                  />
                </div>
                <p className="absolute text-white font-manrope text-base font-normal leading-[130%] w-80 pt-28 px-10">
                  Czy wysokość inflacji jest podstawą do podwyższenia alimentów?
                </p>
                <div className="bg-[#1D4B5B] bg-opacity-80 w-[320px] py-4 absolute grid grid-cols-2 mt-40 pt-0 pb-2 items-center">
                  <div className="mx-10 pt-2">
                    <p className="text-light font-manrope text-xs font-normal leading-[130%]">
                      Tomasz Leśnik
                    </p>{" "}
                  </div>
                  <div className="mx-10 pt-2">
                    <p className="text-light font-manrope text-xs font-normal leading-[130%]">
                      20.01.2022r
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </Container>
  );
}
export default Section4;
