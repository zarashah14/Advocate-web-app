import React from "react";
import Container from "../../MyContainer/Container";
//assets
import Line from "../../assests/Line";
import Vect3 from "../../assests/Vect3";
import Vect4 from "../../assests/Vect4";
import Vect5 from "../../assests/Vect5";
import Vect6 from "../../assests/Vect6";
import Vect7 from "../../assests/Vect7";
import Vect8 from "../../assests/Vect8";
import Vect9 from "../../assests/Vect9";
import Vect10 from "../../assests/Vect10";
function Section2() {
  return (
    <Container>
      <div className="lg:mx-20 mx-4">
        <div className="flex flex-col">
        <div className="flex mt-10 items-center">
          <Line />
          <p className="text-dark font-Manrope">ZAKRES USŁUG</p>
        </div>
        <div>
          <h2 className="text-dark font-Manrope text-4xl">
            Moje specjalizacje
          </h2>
        </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 justify-items-center my-8">
          <div className="flex items-center justify-center bg-[#1D4B5B] w-80 h-60 p-15 px-25 mt-2 border-spacing-2">
            <div className="top-2">
              <div className="ml-4">
                {" "}
                <Vect3 />{" "}
              </div>
              <p className="w-294 text-light font-Manrope text-base font-normal font-weight-400 leading-130 tracking-1.28 uppercase mx-4">
                Prawo cywilne
              </p>
              <div className="mx-4">
                <p className="text-gray-400 font-Manrope text-sm font-normal leading-6">
                  Sprawy spadkowe w tym dział spadku, sprawy o zapłatę,
                  odszkodowania, zasiedzenie, rozgraniczenie, zniesienie
                  współwłasności, droga konieczna.{" "}
                </p>
              </div>
              <div className="inline-flex p-6 px-12 justify-center items-center gap-10 mx-4 py-3 mt-1 bg-cyan-300">
                <p className="">Dowiedz się więcej</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center bg-[#1D4B5B] w-80 h-60 p-15 px-25 mt-2 border-spacing-2">
            <div className="top-2">
              <div className="ml-4">
                {" "}
                <Vect4 />{" "}
              </div>
              <p className="w-294 text-light font-Manrope text-base font-normal font-weight-400 leading-130 tracking-1.28 uppercase mx-4">
                PRAWO RODZINNE
              </p>
              <div className="mx-4">
                <p className="text-gray-400 font-Manrope text-sm font-normal leading-6">
                  Rozwód, separacja, podział majątku, władza rodzicielska,
                  kontakty z dzieckiem, alimenty
                </p>
              </div>
              <div className="inline-flex p-6 px-12 justify-center items-center gap-10 mx-4 py-3 mt-1 bg-cyan-300">
                <p className="">Dowiedz się więcej</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center bg-[#1D4B5B] w-80 h-60 p-15 px-25 mt-2 border-spacing-2">
            <div className="top-2">
              <div className="ml-4">
                {" "}
                <Vect5 />{" "}
              </div>
              <p className="w-294 text-light font-Manrope text-base font-normal font-weight-400 leading-130 tracking-1.28 uppercase mx-4">
                PRAWO KARNE i WYKROCZEnia
              </p>
              <div className="mx-4">
                <p className="text-gray-400 font-Manrope text-sm font-normal leading-6">
                  Występowanie w sprawie w charakterze pełnomocnika
                  pokrzywdzonego lub oskarżonego z uwzględnieniem prawa karnego
                  gospodarczego oraz skarbowego.
                </p>
              </div>
              <div className="inline-flex p-6 px-12 justify-center items-center gap-10 mx-4 py-3 mt-1 bg-cyan-300">
                <p className="">Dowiedz się więcej</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 justify-items-center my-8">
          <div className="flex items-center justify-center bg-[#1D4B5B] w-80 h-60 p-15 px-25 mt-2 border-spacing-2">
            <div className="top-2">
              <div className="ml-4">
                {" "}
                <Vect6 />{" "}
              </div>
              <p className="w-294 text-light font-Manrope text-base font-normal font-weight-400 leading-130 tracking-1.28 uppercase mx-4">
                EGZEKUCJA i WINDYKACJA
              </p>
              <div className="mx-4">
                <p className="text-gray-400 font-Manrope text-sm font-normal leading-6">
                  Wsparcie przy odzyskiwaniu należności, reprezentowanie Klienta
                  w toku postępowania egzekucyjnego, powództwa
                  przeciwegzekucyjne
                </p>
              </div>
              <div className="inline-flex p-6 px-12 justify-center items-center gap-10 mx-4 py-3 mt-1 bg-cyan-300">
                <p className="">Dowiedz się więcej</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center bg-[#1D4B5B] w-80 h-60 p-15 px-25 mt-2 border-spacing-2">
            <div className="top-2">
              <div className="ml-4">
                {" "}
                <Vect7 />{" "}
              </div>
              <p className="w-294 text-light font-Manrope text-base font-normal font-weight-400 leading-130 tracking-1.28 uppercase mx-4">
                ODSZKODOWANIA
              </p>
              <div className="mx-4">
                <p className="text-gray-400 font-Manrope text-sm font-normal leading-6">
                  Sprawy o zapłatę odszkodowania i zadośćuczynienia w
                  szczególności za wypadki drogowe, błędy medyczne, szkody na
                  mieniu, wypadki przy pracy.
                </p>
              </div>
              <div className="inline-flex p-6 px-12 justify-center items-center gap-10 mx-4 py-3 mt-1 bg-cyan-300">
                <p className="">Dowiedz się więcej</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center bg-[#1D4B5B] w-80 h-60 p-15 px-25 mt-2 border-spacing-2">
            <div className="top-2">
              <div className="ml-4">
                {" "}
                <Vect8 />{" "}
              </div>
              <p className="w-294 text-light font-Manrope text-base font-normal font-weight-400 leading-130 tracking-1.28 uppercase mx-4">
                PRAWO ADMINISTRACYJNE
              </p>
              <div className="mx-4">
                <p className="text-gray-400 font-Manrope text-sm font-normal leading-6">
                  Sporządzanie odwołań od decyzji organów administracji, organów
                  rentowych i ubezpieczeniowych, sporządzanie skarg.
                </p>
              </div>
              <div className="inline-flex p-6 px-12 justify-center items-center gap-10 mx-4 py-3 mt-1 bg-cyan-300">
                <p className="">Dowiedz się więcej</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 justify-items-center my-8">
          <div className="flex items-center justify-center bg-[#1D4B5B] w-80 h-60 p-15 px-25 mt-2 border-spacing-2">
            <div className="top-2">
              <div className="ml-4">
                {" "}
                <Vect9 />{" "}
              </div>
              <p className="w-294 text-light font-Manrope text-base font-normal font-weight-400 leading-130 tracking-1.28 uppercase mx-4">
                PRAWO UMÓW
              </p>
              <div className="mx-4">
                <p className="text-gray-400 font-Manrope text-sm font-normal leading-6">
                  Sporządzanie umów cywilnoprawnych i gospodarczych oraz analiza
                  prawna projektów umów
                </p>
              </div>
              <div className="inline-flex p-6 px-12 justify-center items-center gap-10 mx-4 py-3 mt-1 bg-cyan-300">
                <p className="">OCHRONA DANYCH OSOBOWYCH</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center bg-[#1D4B5B] w-80 h-60 p-15 px-25 mt-2 border-spacing-2">
            <div className="top-2">
              <div className="ml-4">
                {" "}
                <Vect10 />{" "}
              </div>
              <p className="w-294 text-light font-Manrope text-base font-normal font-weight-400 leading-130 tracking-1.28 uppercase mx-4">
                ODSZKODOWANIA
              </p>
              <div className="mx-4">
                <p className="text-gray-400 font-Manrope text-sm font-normal leading-6">
                  Pełnienie funkcji inspektora danych osobowych, sporządzanie
                  dokumentów związanych z RODO, przeprowadzanie audytów.
                </p>
              </div>
              <div className="inline-flex p-6 px-12 justify-center items-center gap-10 mx-4 py-3 mt-1 bg-cyan-300">
                <p className="">Dowiedz się więcej</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center bg-[#1D4B5B] w-80 h-60 p-15 px-25 mt-2 border-spacing-2">
            <div className="top-2">
              {/*<div className="ml-4">  <Vect8/> </div>*/}
              <p className="w-294 text-light font-Manrope text-base font-normal font-weight-400 leading-130 tracking-1.28 uppercase mx-4">
                NIETYPOWA SPRAWA?
              </p>
              {/*<div className="mx-4">
                        <p className="text-gray-400 font-Manrope text-sm font-normal leading-6">
                        Sporządzanie odwołań od decyzji organów administracji,
                        organów rentowych i ubezpieczeniowych, sporządzanie skarg.
                            </p>
                        </div>*/}
              <div className="inline-flex p-6 px-12 justify-center items-center gap-10 mx-4 py-3 mt-1 bg-cyan-300">
                <p className="">Skontaktuj się</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Section2;
