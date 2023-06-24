import React from 'react';
import logo from './logo.svg';
import First from './components/first';
import BottomRight from './components/bottomright';
import BottomLeft from './components/bottomleft';



function App() {
  return (
    <div className="xl:flex font-Ubuntu">
      <BottomLeft />
      <BottomRight />
    </div>
  );
}

export default App;
