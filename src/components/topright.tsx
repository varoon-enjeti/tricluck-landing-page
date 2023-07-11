import React from 'react';
import piechart from './img/Pie_Chart.svg';
import Container from './container';

function ImageToAdd() {
    const [width, setDimensions] = React.useState(window.innerWidth);

    React.useEffect(() => {
        
        function handleResize() {
          setDimensions(window.innerWidth);
        }


        window.addEventListener('resize', handleResize)
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    });

    if (width < 1280) {
        
        return (
            <img src={piechart} alt ="pie chart" className="aspect-square m-10 w-48 col-span-2"/>
        );
    }
    return <Container />;
}

export default function TopRight() {

    return (
        
        <div className="xl:w-7/12 xl:h-1/2">

            <div className="grid grid-cols-5 justify-items-center p-4 xl:justify-items-start xl:grid-rows-2 xl:grid-cols-1 xl:p-24 xl:pl-48">
                
                <ImageToAdd />
                <div className="p-2 text-center place-self-center col-span-3 xl:text-left xl:p-10 xl:text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            </div>
        </div>
    );
}