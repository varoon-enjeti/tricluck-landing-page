import React from 'react';
import circle from './img/Circle.png';
import piechart from './img/Pie_Chart.png';

function ImageToAdd() {
    if (window.innerWidth > 1200) {
        return (
            
            <img src={circle} alt ="image1" className="aspect-square w-96"/>
        );
    }
    return (
        
        <img src={piechart} alt ="image1" className="aspect-square m-10 w-24 col-span-2"/>
    );
}

export default function TopRight() {

    return (
        <div className="xl:w-7/12 xl:h-1/2">
            <header className = "flex flex-row-reverse absolute top-0 right-0 xl:static">
                <a href="#" className="mt-3 m-4 text-xl xl:m-4 xl:mr-10 xl:text-2xl hover:opacity-75">Product</a>
                <a href="#" className="mt-3 text-xl xl:m-4 xl:text-2xl hover:opacity-75">Join the Waitlist!</a>
            </header>
            <div className="grid grid-cols-5 justify-items-center p-4 xl:justify-items-start xl:grid-rows-2 xl:grid-cols-1 xl:p-24 xl:pl-48">
                <ImageToAdd />
                <div className="p-2 text-center col-span-3 xl:text-left xl:p-10 xl:text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            </div>
        </div>
    );
}