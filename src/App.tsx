import React from 'react';
import logo from './logo.svg';
import TopLeft from './components/topleft';
import TopRight from './components/topright';
import BottomRight from './components/bottomright';
import BottomLeft from './components/bottomleft';
import { useMediaQuery } from 'react-responsive';

function App() {
  const isMobile = useMediaQuery({ maxWidth: 1200 }); // Define the breakpoint for mobile view

  return (
    <div className="flex-col">
      <div className="xl:flex font-Ubuntu">
        <TopLeft />
        <TopRight />
      </div>
      <div className="xl:flex font-Ubuntu">
        <div className="xl:w-7/12 xl:h-1/2">
            {isMobile ? <BottomRight /> : <BottomLeft />}
          </div>
        <div className="xl:flex font-Ubuntu">
          <div className="xl:w-5/12 xl:h-1/2">
            {isMobile ? <BottomLeft /> : <BottomRight />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;