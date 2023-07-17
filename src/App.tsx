import React from 'react';
import React from 'react';
import { useState, useRef } from "react";
import TopLeft from './components/topleft';
import TopRight from './components/topright';
import BottomRight from './components/bottomright';
import BottomLeft from './components/bottomleft';
import AudioRecorder from "./components/product";
import { useMediaQuery } from 'react-responsive';

function Header() {
  return (
      <header className = "fixed top-0 left-0 w-screen bg-white z-50">
        
        <a href="#" className="float-left mt-5 ml-4 xl:m-4 hover:opacity-75"><div className="bg-soft-blue aspect-square w-10 xl:w-12 rounded-full"></div></a>
        <a href="#product" className="float-right m-6 lg:text-lg xl:m-4 xl:mr-10 xl:text-xl hover:opacity-75">Product</a>
        <a href="#waitlist" className="float-right mt-6 lg:text-lg xl:m-4 xl:text-xl hover:opacity-75">Join the Waitlist!</a>
      </header>
  );
}

function App() {
  const isMobile = useMediaQuery({ maxWidth: 1280 }); // Define the breakpoint for mobile view
  
  return (
    <div className="flex-col text-off-black font-Ubuntu">
      <Header />
      <div className="xl:flex">
        
        <TopLeft />
        <TopRight />
      </div>
      <div className="xl:flex w-screen justify-center">
        <div className="xl:w-7/12 h-full">
            {isMobile ? <BottomRight /> : <BottomLeft />}
          </div>
        <div className="xl:flex font-Ubuntu">
          <div className="xl:w-full xl:h-1/2 2xl:h-full">
            {isMobile ? <BottomLeft /> : <BottomRight />}
          </div>
        </div>
      </div>
      <AudioRecorder />
    </div>
  );
}

export default App;