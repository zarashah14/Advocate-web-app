import React from "react";
//container
import Container from "../../MyContainer/Container";
//assets
import myImage from '../../assests/3kwadrat.png'; // Replace with the actual path to your image
//assests
import Line from "../../assests/Line"

function Section1(){
    return(
        <Container>
          <div className="h-588 flex-shrink-0 bg-dark pb-60"> 
          <div className="ml-40 pt-20 flex pb-20 items-center ">
           { /*<div className="w-8 h-1 bg-[#1D4B5B]"></div>*/}<Line/>
            <p className="textbase text-gray-300 font-manrope leading-7 tracking-wider font-light ml-2">ADWOKAT TOMASZ LEŚNIK</p>
           </div>
                 <div className="ml-40">
                   <p className="text-light font-manrope text-5xl font-normal leading-7 tracking-wide">Szybka, fachowa i skuteczna</p> 
                   <p className="text-light font-manrope text-5xl font-normal leading-7 tracking-wide mt-2">pomoc prawna</p>
                 </div>
                    
                    <div className=" mt-6 ml-40 ">
                       <div className="inline-block  bg-[#1D4B5B] p-2.5 items-start gap-2.5">
                        <p className="textbase text-gray-300 font-manrope leading-7 tracking-wider font-light">Umów się na konsultacje</p>
                       </div>
                       
                     
                       <div className="top-40 right-28 w-514 h-603 flex-shrink-0 z-10 absolute">
                       <img src={myImage} alt="My Image"/>
                    </div>
                

                    </div> 
                   
                  
          </div>
          </Container>
    )
}
export default Section1;