import React, { useRef, useEffect } from 'react'

export default function Scene() {
    
    const svg = useRef(null);
    let pathLength = 0;

    useEffect( () => {
        pathLength = svg.current.getTotalLength();
        svg.current.style.strokeDasharray =  pathLength;
        svg.current.style.strokeDashoffset = pathLength;
        svg.current.style.stroke = "black";
    },[])

    const manageMouseOver = () => {
        svg.current.style.transitionDuration = "0.6s";
        svg.current.style.strokeDashoffset = 0;
    }

    const manageMouseLeave = () => {
        svg.current.style.strokeDashoffset = pathLength;
    }

    return (
        <div className="scene">
            <p onMouseOver={manageMouseOver} onMouseLeave={manageMouseLeave}>Hover me</p>
            <svg width="357" height="164" viewBox="0 0 357 164" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref={svg} d="M178.5 0.500007C227.736 0.500005 272.287 9.6689 304.51 24.4716C336.776 39.2942 356.5 59.6702 356.5 82C356.5 104.33 336.776 124.706 304.51 139.528C272.287 154.331 227.736 163.5 178.5 163.5C129.264 163.5 84.7131 154.331 52.4902 139.528C20.2239 124.706 0.499997 104.33 0.499996 82C0.499995 59.6702 20.2239 39.2942 52.4902 24.4716C84.7131 9.66891 129.264 0.50001 178.5 0.500007Z" stroke="black"/>
            </svg>
        </div>
    )
}
