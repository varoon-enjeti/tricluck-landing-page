import React from 'react';
import githubmark from './img/github-mark.png';
import linkedin from './img/LinkedIn_Logo_Black.png'
import instagram from './img/Instagram_Glyph_Black.png';
import twitter from './img/Twitter_Logo_Black.png';
import circle from './img/Circle.png';

export default function TopLeft() {
    return (
        <div className="w-auto lg:w-5/12 overflow-auto bg-gray-200">

            <div className="m-12 lg:m-20 lg:ml-24 border-l-4 lg:border-l-8 border-black p-6 lg:p-10">
                <div className="grid grid-rows-4 lg:grid-rows-4 grid-cols-1">
                        <h1 className="text-6xl lg:text-9xl ">TriCluck</h1>
                        <div className="flex m-4 lg:mt-10 object-center">
                            <a href="#"><img src={githubmark} alt="Github" className="aspect-auto w-6 lg:w-10 ml-2 hover:opacity-75"></img></a>
                            
                            <a href="#"><img src={linkedin} alt="LinkedIn" className="aspect-auto w-6 lg:w-10 ml-4 hover:opacity-75"></img></a>
                            
                            <a href="#"><img src={instagram} alt="Instagram" className="aspect-auto w-6 lg:w-10 ml-4 hover:opacity-75"></img></a>
                            
                            <a href="#"><img src={twitter} alt="Twitter" className="aspect-auto w-6 lg:w-10 ml-4 mt-px hover:opacity-75"></img></a>
                        </div>
                </div>
                
                <img src={circle} alt ="image1" className="aspect-square w-48 self-end lg:collapse"/>
            </div>
        </div>
    );
}