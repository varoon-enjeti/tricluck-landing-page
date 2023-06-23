import React from 'react';
import circle from './img/Circle.png';

export default function TopRight() {
    return (
        <div className="w-7/12 h-1/2">
            <header className = "flex flex-row-reverse">
                <a href="#" className="m-4 mr-10 text-2xl hover:opacity-75">Product</a>
                <a href="#" className="m-4 text-2xl hover:opacity-75">Join the Waitlist!</a>
            </header>

            <div className="grid grid-rows-2 grid-columns-1 p-24 pl-48">
                <img src={circle} alt ="image1" className="aspect-square w-96 collapse md:visible"/>
                <div className="p-10 text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            </div>
        </div>
    );
}