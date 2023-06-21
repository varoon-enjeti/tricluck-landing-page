import React from 'react';
import logo from './logo.svg';
import First from './components/first';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="p-4 font-bold underline">White. A blank page or canvas. So many possibilities.</div>
        <div className='p-4'>If you're seeing this, your repo is set up correctly</div>
        <First />
      </header>
    </div>
  );
}

export default App;
