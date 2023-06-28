import React from 'react';
import phone from './img/image.png';

export default function BottomLeft() {
  return (
    <div className="xl:w-7/12 xl:h-1/2 flex justify-center items-center">
      <img src={phone} alt="phone" style={{
                    width: '50%',
                    height: 'auto',
                    display: 'block',
                    margin: 'auto',

                }}/>
    </div>
  );
}