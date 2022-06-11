import React from "react";
import LanddingPage from './components/LandingPage/LandingPage.js';
import BigMap from "./components/BigMap/BigMap.js";
import NavBar from "./components/NavBar/NavBar.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <>
    <NavBar />
    <LanddingPage /> 
    <BigMap /> 
    <Footer />
    </>
  );
}

export default App;
