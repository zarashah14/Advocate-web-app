import React from "react";
//import Container from './MyContainer/Container';
import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
function Index(){

    return(
      <>
       <Navbar/>
       <Section1/>
       <Section2/>
       <Section3/>
       <Section4/>
       <Footer/>
      </>
         
       
    );
}
export default Index;