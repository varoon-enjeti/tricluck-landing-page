import React from 'react';
import TopLeft from './components/topleft';
import TopRight from './components/topright';

function App() {
  return (
    <div className="xl:flex font-Ubuntu">
      <TopLeft />
      <TopRight />
    </div>
  );
}

export default App;
