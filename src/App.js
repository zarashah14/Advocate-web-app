import React from 'react';
import './App.css';
//import { Route, Switch } from "react-router-dom";

import Index from "./Content/home/Index"
//import about from './Content/About/about';
function App() {
  return (
    <>
    <Index/>
      { /*<Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/about" component={about} /> 
  </Switch>*/}
    </>
  );
}

export default App; 
