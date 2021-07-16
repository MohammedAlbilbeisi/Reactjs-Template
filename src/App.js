
import React, { Component }  from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Contact from "./components/Contact";
import Index from "./components/Index";
import Navbar from "./components/Navbar";


class App extends Component {
  render(){
  return (
<BrowserRouter>
<div>
  <Navbar/>

  <Route exact path="/" component={Index} />
  <Route path="/contact" component={Contact} />
  </div>
  </BrowserRouter>

    );
}}

export default App;
