import React from 'react';
import phone from './img/image.png';

export default function BottomLeft() {
  return (
    <div className="flex justify-center items-center h-screen">
      <img
        src={phone}
        alt="phone"
        className="w-1/2 h-auto"
      />
    </div>
  );
}