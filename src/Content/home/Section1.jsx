import React from "react";
//container
import Container from "../../MyContainer/Container";
//assets
import myImage from "../../assests/3kwadrat.png"; // Replace with the actual path to your image
//assests
import Line from "../../assests/Line";

function Section1() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row items-center justify-center gap-14 py-6 bg-dark">
        <div>
          <div className="ml-40 pt-20 flex pb-20 items-center ">
            <Line />
            <p className="textbase text-gray-300 font-manrope leading-7 tracking-wider font-light ml-2">
              ADWOKAT TOMASZ LEŚNIK
            </p>
          </div>

          <h1 className="text-light font-manrope text-6xl">
            Szybka, fachowa i skuteczna <br /> pomoc prawna
          </h1>

          <div className="inline-block mt-7  bg-[#1D4B5B] p-2.5 items-start gap-2.5">
            <p className="textbase text-gray-300 font-manrope leading-7 tracking-wider font-light">
              Umów się na konsultacje
            </p>
          </div>
        </div>
        <div className="z-10">
          <img src={myImage} width={400} height={200} alt="My Image" />
        </div>
      </div>
    </Container>
  );
}
export default Section1;
