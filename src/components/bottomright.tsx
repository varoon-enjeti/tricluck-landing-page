import React, { useState, ChangeEvent, FormEvent } from 'react';

const BottomRight = () => {
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform any submission logic here
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl text-black">Learn with Us!</h1>
      <h1 className="text-3xl text-black">Join the Waitlist</h1>
      <form onSubmit={handleSubmit} className="mt-10">
        <div className="flex items-center justify-between w-96 p-2 border-2 border-gray-300 rounded-lg bg-white">
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="w-3/4 px-2 text-lg outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2 text-lg bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 hover:px-6 hover:py-3"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default BottomRight;