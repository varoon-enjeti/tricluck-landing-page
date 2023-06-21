import React from 'react';
import logo from './logo.svg';
import First from './components/first';
import Second from './components/second';
import SignUp from './components/signup';
import letstalk from './img/lets-talk.jpg';
function App() {
  return (
    <div className="App aspect-video bg-bottom bg-gradient-to-tr from-violet-600 to-fuchsia-600 font-sans">
      <header className="App-header">
        <div className="pt-10 text-6xl text-yellow-400 font-bold text-center">TriCluck</div>
        <div className='p-4 text-4xl text-white text-center shadow-xl'>The bridge from classrooms to the world.</div>
        
      </header>
      <div className= "m-10 space-x-10 flex flex-wrap justify-center">
          <First />
          <Second />
          <SignUp />
          <img src= {letstalk} alt="Let's Talk!" className = "w-1/4 h-1/4 rounded-full justify-center self-end" />
        </div>
    </div>
  );
}

export default App;
