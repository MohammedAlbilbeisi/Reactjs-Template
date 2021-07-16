
import React  from "react";
import Home from "../Home";
import About from "../About";
import Profile from "../Profile";
import Portfolio from "../Portfolio";
import SocailMedia from "../SocailMedia";
import Work from "../Work";
import Footer from "../Footer";


function Index() {
  return (
    <div className="Index">

  <Home/>
  <Work/>
  <Portfolio/>
  <Profile/>
  <About/>
  <SocailMedia/>
  <Footer/>

  

    </div>
  );
}

export default Index;
