import React from 'react';
import logo from './logo.svg';
import First from './components/first';

function App() {
  const isMobile = useMediaQuery({ maxWidth: 1200 }); // Define the breakpoint for mobile view

  return (
    <div className="xl:flex font-Ubuntu">
      <TopLeft />
      <TopRight />
      <div className="xl:w-7/12 xl:h-1/2">
        {isMobile ? <BottomRight /> : <BottomLeft />}
      </div>
      <div className="xl:w-5/12 xl:h-1/2">
        {isMobile ? <BottomLeft /> : <BottomRight />}
      </div>
    </div>
  );
}

export default App;