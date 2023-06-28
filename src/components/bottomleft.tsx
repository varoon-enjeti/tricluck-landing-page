import React from 'react';
import phone from './img/phone.png';

export default function BottomLeft() {
  return (
    <div className="xl:w-7/12 flex justify-center">
      <img src={phone} alt="phone" className="w-1/4 xl:w-1/2 m-24 xl:m-48 xl:ml-96 2xl:ml-48" />
    </div>
  );
}