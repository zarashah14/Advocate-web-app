import React from "react";
import Container from "../../MyContainer/Container";
//assests
import Line from "../../assests/Line";
import SecImage from "../../assests/akd1.png";
import ThirdImage from "../../assests/image 2.png";
function Section3() {
  return (
    <Container>
      <div className="bg-dark px-14 py-4 my-12">
        <div className="flex flex-col lg:flex-row">
          <div className="">
            <img src={SecImage} alt=" SecImage" />
          </div>

          <div className="flex flex-col my-10">
            <div className="flex items-center">
              <Line />
              <p className="text-gray-300 font-manrope text-base font-normal leading-[28.9px] tracking-[0.51px] ml-2">
                O MNIE
              </p>
            </div>

            <p className="font-Manrope text-3xl text-white">
              Doświadczenie i profesjonalizm
            </p>
            <p className="font-Manrope text-3xl text-white">
              {" "}
              w służbie Twoich spraw
            </p>
            <p className="font-Manrope text-base text-white my-4 text-left">
              Za najwyższy z celów stawiam sobie zapewnienie szybkiej, fachowej
              i skutecznej pomocy prawnej zarówno klientom indywidualnym jak i
              przedsiębiorcom.
            </p>
            <p className="font-Manrope text-base text-white my-4 text-left">
              Rozwiązywanie konkretnych problemów prawnych odbywa się z
              uwzględnieniem interesów Klienta i zawsze poprzedzone jest
              gruntowną analizą stanu faktycznego i prawnego sprawy.
            </p>
            <p className="font-Manrope text-base text-white my-4 text-left">
              Dodatkowo, dzięki współpracy z innymi specjalistami, takimi jak
              notariusze, komornicy i doradcy podatkowi, jestem w stanie
              zapewnić kompleksową obsługę prawną z różnych dziedzin.
            </p>
            <div className="my-0 mx-0">
              <img src={ThirdImage} alt="ThirdImage" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Section3;
