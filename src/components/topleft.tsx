import React from 'react';
import githubmark from './img/github-mark.png';
import linkedin from './img/LinkedIn_Logo_Black.png'
import instagram from './img/Instagram_Glyph_Black.png';
import twitter from './img/Twitter_Logo_Black.png';
import circle from './img/Circle.png';

export default function TopLeft() {
    return (
        <div className="w-screen pt-4 xl:pt-0 xl:w-5/12 overflow-auto bg-gray-200 ">

            <div className="m-12 xl:m-24 border-l-4 xl:border-l-8 border-black p-6 xl:p-10 xl:pt-12">
                <div className="grid grid-rows-2 xl:grid-rows-4 grid-cols-1">
                        <h1 className="text-6xl xl:text-7xl 2xl:text-8xl">TriCluck</h1>
                        <div className="flex m-4 xl:mt-10 object-center">
                            <a href="#"><img src={githubmark} alt="Github" className="aspect-auto w-6 xl:w-10 ml-2 hover:opacity-75"></img></a>
                            
                            <a href="#"><img src={linkedin} alt="LinkedIn" className="aspect-auto w-6 xl:w-10 ml-4 hover:opacity-75"></img></a>
                            
                            <a href="#"><img src={instagram} alt="Instagram" className="aspect-auto w-6 xl:w-10 ml-4 hover:opacity-75"></img></a>
                            
                            <a href="#"><img src={twitter} alt="Twitter" className="aspect-auto w-6 xl:w-10 ml-4 mt-px hover:opacity-75"></img></a>
                        </div>
                </div>
                <div className="self-end items-end flex-row-reverse xl:collapse">

                    <img src={circle} alt ="image1" className="pl-24 pt-10 w-96" />
                </div>
            </div>
        </div>
    );
}