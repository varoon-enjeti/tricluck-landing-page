import React from 'react';
import TopLeft from './components/topleft';
import TopRight from './components/topright';
import BottomRight from './components/bottomright';
import BottomLeft from './components/bottomleft';
import { useMediaQuery } from 'react-responsive';

function App() {
  const isMobile = useMediaQuery({ maxWidth: 1280 }); // Define the breakpoint for mobile view

  return (
    <div className="flex-col">
      <div className="xl:flex font-Ubuntu">
        <TopLeft />
        <TopRight />
      </div>
      <div className="xl:flex font-Ubuntu w-screen justify-center">
        <div className="xl:w-7/12 h-full">
            {isMobile ? <BottomRight /> : <BottomLeft />}
          </div>
        <div className="xl:flex font-Ubuntu">
          <div className="xl:w-full xl:h-1/2 2xl:h-full">
            {isMobile ? <BottomLeft /> : <BottomRight />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
