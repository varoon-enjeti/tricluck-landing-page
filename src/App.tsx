import React from 'react';
import logo from './logo.svg';
import First from './components/first';
import Second from './components/second';
import SignUp from './components/signup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="p-10 text-6xl font-bold underline text-center">TriCluck: [Insert Buzzwords here to sound cool]</div>
        <div className='p-4 text-4xl text-center'>Some more buzzwords</div>
        <div className= "m-10 space-x-10 flex flex-wrap justify-center">
          <First />
          <Second />
          <SignUp />
        </div>

      </header>
    </div>
  );
}

export default App;
