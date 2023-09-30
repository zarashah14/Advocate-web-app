import React from 'react';
import './App.css';
//import { Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Section1 from './Content/home/Section1';
import Section2 from './Content/home/Section2';
import Section3 from './Content/home/Section3';
import Section4 from './Content/home/Section4';
function App() {
  return (
    <>
    <Navbar/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <div>
    <Footer/>
    </div>
  
  {/* <Switch>
      <Route exact path="/Navbar" component={Navbar} />
       
  </Switch>*/}
    </>
  );
}

export default App;
