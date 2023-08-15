import React from 'react';
import { useState, useRef } from "react";
import TopLeft from './components/topleft';
import TopRight from './components/topright';
import BottomRight from './components/bottomright';
import BottomLeft from './components/bottomleft';
import AudioRecorder from "./components/product";
import Music_App_Section1 from './components/Music_App_Section1';
import Music_App_Section2 from './components/Music_App_Section2';
import { useMediaQuery } from 'react-responsive';
import logo from './components/img/1691638228037.jpeg';
import 'animate.css';
import Nft_Section4 from './components/Nft_Section4';
import 'atropos';
import 'eslint';
import 'leaflet';
import 'sass';
import 'swiper';
import 'wowjs';
import styles from './components/'

function Header() {
  return (
      <header className = "fixed top-0 left-0 w-screen bg-white z-10">
        
        <a href="#" className="float-left mt-3 ml-4 xl:m-3 hover:opacity-75">
  <div className="aspect-square w-10 h-10 xl:w-14 xl:h-14 rounded-full">
    <img src={logo} alt="Logo" className="rounded-full w-full h-full" />
  </div>
</a>
        <a href="#" className="float-left lg:text-lg xl:m-4 xl:mr-5 xl:text-5xl hover:opacity-75">Convident</a>
        <a href="#product" className="float-right m-6 lg:text-lg xl:m-4 xl:mr-10 xl:text-xl hover:opacity-75">Product</a>
        <a href="#waitlist" className="float-right mt-6 lg:text-lg xl:m-4 xl:text-xl hover:opacity-75">Join the Waitlist!</a>
      </header>
  );
}

function App() {
  const isMobile = useMediaQuery({ maxWidth: 1280 }); // Define the breakpoint for mobile view
  
  return (
    <div className="flex-col text-off-black font-Ubuntu">
      <style>
        {styles}
      </style>
      <Header />
      <div className = "mt-20">
        <Music_App_Section1 />
        <Nft_Section4 />
      </div>
      {/* <div className="xl:flex w-screen justify-center">
        <div className="xl:w-7/12 h-full">
            {isMobile ? <BottomRight /> : <BottomLeft />}
          </div>
        <div className="xl:flex font-Ubuntu">
          <div className="xl:w-full xl:h-1/2 2xl:h-full">
            {isMobile ? <BottomLeft /> : <BottomRight />}
          </div>
        </div>
      </div> 
  <AudioRecorder />*/}
  </div>
  );
}

export default App;