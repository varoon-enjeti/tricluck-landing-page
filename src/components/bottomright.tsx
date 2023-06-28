import React, { useState, ChangeEvent, FormEvent } from 'react';

export default function BottomRight() {
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
};

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Perform any submission logic here
      
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100vh', margin: 'auto', }}>
      <h1 style={{ fontSize: '4rem', color: 'black' }}>Learn with Us!</h1>
      <h1 style={{ fontSize: '3rem', color: 'black' }}>Join the Waitlist</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', alignItems: 'center',justifyContent: 'space-between', margin: '10px',
              paddingLeft: '10px',
              paddingRight: '0',
              border: '2px solid #ccc',
              borderRadius: '20px',
              backgroundColor: 'white',
              width: '420px',
              height: '70px', }}>
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Enter your email"
            style={{
              fontSize: '1.25rem',
              outline: 'none',
            }}
          />
          <button type="submit" style={{ padding: '10px 10px', fontSize: '1.3rem', backgroundColor: '#4679e8', color: 'white', border: 'none', borderRadius: '20px', height:'66px' }}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}